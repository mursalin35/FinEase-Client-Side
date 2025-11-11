import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";
import { motion } from "framer-motion";

const MyProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState(user);

  const [showModal, setShowModal] = useState(false);
  const [editName, setEditName] = useState(user?.displayName || "");
  const [editPhoto, setEditPhoto] = useState(user?.photoURL || "");

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUser({
        displayName: editName,
        photoURL: editPhoto,
      });

      setCurrentUser({
        ...currentUser,
        displayName: editName,
        photoURL: editPhoto,
      });

      toast.success("Profile updated successfully!");
      setShowModal(false);
    } catch (error) {
      toast.error("Failed to update profile!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4 bg-[#F8F8FB]">
      <title>My Profile</title>
      <Toaster position="top-center" reverseOrder={false} />

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white/85 backdrop-blur-xl border border-[#E2E0F5] shadow-[0_8px_32px_rgba(99,46,227,0.15)] rounded-2xl overflow-hidden grid md:grid-cols-2"
      >
        {/* LEFT — Profile Display */}
        <div className="bg-gradient-to-br from-[#632EE3]/10 to-[#4CB5AE]/10 p-10 flex flex-col justify-center items-center border-r border-[#E2E0F5]">
          
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] blur-xl opacity-30"></div>
            <img
              src={
                currentUser?.photoURL ||
                "https://img.icons8.com/?size=100&id=0prbldgxVuTl&format=png&color=000000"
              }
              alt="Profile"
              className="relative w-36 h-36 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>

          {/* User Info */}
          <h2 className="text-2xl font-bold text-[#1F1F2E] mt-4">
            {currentUser?.displayName || "Unnamed User"}
          </h2>

          <p className="text-[#6B6B82] text-sm mt-1">
            {currentUser?.email || "No email found"}
          </p>
        </div>

        {/* RIGHT — Info + Update */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#1F1F2E]">Profile</h2>
          <div className="h-1 w-24 mt-1 mb-6 rounded-full bg-gradient-to-r from-[#632EE3] to-[#4CB5AE]"></div>

          <p className="text-[#6B6B82] mb-8">
            Manage your account and personal information.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="w-full py-3 rounded-xl text-white font-medium shadow-sm 
            bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] hover:opacity-95 transition duration-200"
          >
            ✏️ Update Profile
          </button>
        </div>
      </motion.div>

      {/* ================== MODAL =================== */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 w-96 shadow-xl border border-[#E2E0F5] relative"
          >
            <h2 className="text-xl font-bold text-[#1F1F2E] mb-4 text-center">
              Update Profile
            </h2>

            <form onSubmit={handleProfileUpdate} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-[#2E1F47] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#E2E0F5] text-black 
                  focus:ring-2 focus:ring-[#632EE3] outline-none"
                  placeholder="Enter your name"
                />
              </div>

              {/* Photo URL */}
              <div>
                <label className="block text-sm font-semibold text-[#2E1F47] mb-1">
                  Photo URL
                </label>
                <input
                  type="text"
                  value={editPhoto}
                  onChange={(e) => setEditPhoto(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#E2E0F5] text-black 
                  focus:ring-2 focus:ring-[#4CB5AE] outline-none"
                  placeholder="Enter photo URL"
                />
              </div>

              {/* Save Button */}
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg text-white font-medium bg-gradient-to-r 
                from-[#632EE3] to-[#4CB5AE] hover:opacity-95 transition"
              >
              Save Changes
              </button>
            </form>

            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-xl"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
