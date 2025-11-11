import React, { useState, useContext } from "react";
import { FaEnvelope, FaLockOpen } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import toast, { Toaster } from "react-hot-toast"; 


const ForgetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resetPassword } = useContext(AuthContext); 


  const defaultEmail = location.state?.email || "user@example.com";
  const [email] = useState(defaultEmail);

  const handleReset = () => {
    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox 📩");
        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/user-not-found") {
          toast.error("No account found with this email!");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email address!");
        } else {
          toast.error("Something went wrong!");
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center -my-15 px-4">
      <title>Reset password</title>
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border border-[#EAD9C9]">
        <div className="text-center mb-6">
          <FaLockOpen className="text-4xl text-[#B87333] mx-auto mb-2" />
          <h2 className="text-2xl font-bold text-[#5A3A2E]">
            Forgot Password?
          </h2>
          <p className="text-sm text-[#7A5D4A] mt-2">
            Enter your registered email address to reset your password.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleReset();
          }}
        >
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#5A3A2E] mb-2"
            >
              Email Address
            </label>
            <div className="flex items-center border border-[#EAD9C9] rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-[#B87333]">
              <FaEnvelope className="ml-3 text-[#B87333]" />
              <input
                id="email"
                type="email"
                value={email}
                readOnly
                className="w-full p-2 pl-3 outline-none bg-transparent text-[#5A3A2E]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#B87333] text-white font-medium py-2 rounded-lg hover:bg-[#9b5f28] transition cursor-pointer"
          >
            Reset Password
          </button>

          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-sm text-[#7A5D4A] hover:text-[#B87333] transition cursor-pointer"
            >
              ← Back to Login
            </button>
          </div>
        </form>
      </div>
      <Toaster position="top-center" /> 
    </div>
  );
};

export default ForgetPassword;
