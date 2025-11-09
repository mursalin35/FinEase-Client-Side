import React, { useState, useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext"
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [wrongAttempts, setWrongAttempts] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const { login, signInWithGoogle, setUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    setPasswordError("");

    login(email, password)
      .then((result) => {
        setUser(result.user);
        setWrongAttempts(0);
        toast.success("Login successful!");
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        const attempts = wrongAttempts + 1;
        setWrongAttempts(attempts);
        if (attempts >= 4) {
          setPasswordError("Too many attempts. Click forgot!");
        } else {
          setPasswordError("Wrong password");
        }
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("Signed in with Google!");
        navigate(location.state?.from || "/");
      })
      .catch((error) => toast.error(error.message));
  };
  // bg-[#FFF8F1]
  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-8 sm:px-6 md:px-0 ">
      <title>LogIn</title>
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full sm:w-8/12 md:w-6/12 lg:w-4/12 border border-[#EAD9C9]">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#603601] mb-6">
          Login Page
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <label className="block text-[#5B3A1A] mb-1 font-medium text-sm sm:text-base">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-[#EAD9C9] rounded-md focus:outline-none focus:ring-2 text-black placeholder-gray-600 focus:ring-[#C17A4E] text-sm sm:text-base"
            // className="w-full p-3 border border-[#EAD9C9] rounded-md focus:outline-none focus:ring-2 text-black placeholder-gray-600 focus:ring-[#C17A4E] text-sm sm:text-base"
            required
          />

          <div className="relative">
            <label className="block text-[#5B3A1A] mb-1 font-medium text-sm sm:text-base">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="enter password"
              className="w-full p-3 border border-[#EAD9C9] rounded-md focus:outline-none focus:ring-2 text-black placeholder-gray-600 focus:ring-[#C17A4E] text-sm sm:text-base"
              required
            />
            <span
              className="absolute right-3 top-9.5 sm:top-11 cursor-pointer text-gray-500 text-lg"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {passwordError && (
            <p className="text-red-500 text-xs sm:text-sm">{passwordError}</p>
          )}

          <button
            type="submit"
            className="cursor-pointer w-full bg-[#A0522D] text-white py-2 sm:py-3 rounded-md hover:bg-[#8B4513] transition duration-300 text-sm sm:text-base"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm sm:text-base text-gray-600 mt-3 hover:underline">
          <Link
            className="cursor-pointer"
            to="/auth/forget-password"
            state={{ email }}
          >
            Forgot Password?
          </Link>
        </p>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 sm:py-3 rounded-md text-black hover:bg-gray-100 transition cursor-pointer text-sm sm:text-base"
        >
          <FcGoogle className="text-xl sm:text-2xl " /> Sign in with Google
        </button>

        <p className="text-center text-sm sm:text-base text-gray-600 mt-4">
          Don't have an account?
          <Link to="/auth/register">
            <span className="text-[#A0522D] font-semibold cursor-pointer hover:underline ml-1">
              Register
            </span>
          </Link>
        </p>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Login;
