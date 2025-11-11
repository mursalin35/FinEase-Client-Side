import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContext";
import { toast, Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser, setUser, updateUser, signInWithGoogle } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  // Password validation
  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least 1 uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least 1 lowercase letter.";
    }
    return "";
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const validationMessage = validatePassword(password);
    if (validationMessage) {
      setPasswordError(validationMessage);
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Account created successfully! 🎉");
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Profile updated successfully!");
            navigate("/");
          })
          .catch(() => {
            setUser(user);
            toast("Signed up, but profile not updated 🟡");
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("Signed in with Google!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#F8F8FB] to-[#EDEBFF] px-4 sm:px-6 md:px-0">
      <title>SignUp</title>
      <div className="bg-white/90 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg w-full sm:w-8/12 md:w-6/12 lg:w-4/12 border border-[#DAD7FF]/60">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#632ee3] to-[#00b8b0] bg-clip-text text-transparent text-center mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-2 border text-black placeholder-gray-600 border-[#D3D0FA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#632EE3] "
            required
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="w-full p-2 border text-black placeholder-gray-600 border-[#D3D0FA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#632EE3] "
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border text-black placeholder-gray-600 border-[#D3D0FA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#632EE3] "
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full p-2 border text-black placeholder-gray-600 border-[#D3D0FA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#632EE3] "
              required
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {passwordError && (
              <p className="text-red-500 text-xs mt-1">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] text-white py-2 rounded-md hover:bg-[#8B4513] transition duration-300 cursor-pointer font-medium"
          >
            Signup
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full flex  items-center justify-center gap-2 border border-gray-300 py-2 rounded-md text-[#2E1F47] hover:bg-[#F5F3FF] transition cursor-pointer"
        >
          <FcGoogle className="text-xl" /> Sign in with Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?
          <Link to="/auth/login">
            <span className="text-[#632EE3] font-semibold cursor-pointer hover:underline ml-1">
              Login
            </span>
          </Link>
        </p>
      </div>  
      <Toaster position="top-center" reverseOrder={false} />{" "}
    </div>
  );
};

export default Register;
