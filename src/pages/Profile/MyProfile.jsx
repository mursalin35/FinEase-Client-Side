import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

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

      // instant UI update
      setCurrentUser({
        ...currentUser,
        displayName: editName,
        photoURL: editPhoto,
      });
      toast.success("Profile updated successfully!");
      setShowModal(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 ">
      <title>My Profile</title>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col md:flex-row w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg border border-[#EAD9C9]">
        {/* Left Side - Profile Image */}
        <div className="bg-[#FFF8F1] flex flex-col justify-center items-center md:w-1/2 p-8">
          <img
            src={
              currentUser?.photoURL ||
              "https://img.icons8.com/?size=100&id=0prbldgxVuTl&format=png&color=000000"
            }
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-[#C17A4E] object-cover shadow-md"
          />
          <h2 className="text-2xl font-semibold text-[#603601] mt-4">
            {currentUser?.displayName || "Unnamed User"}
          </h2>
        </div>

        {/* Right Side - Info & Update */}
        <div className="bg-[#FAEDE1] md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#603601] mb-2">
            Profile Info
          </h2>
          <p className="text-gray-700 text-sm mb-6 font-semibold">
            {currentUser?.email || "No email found"}
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="w-full bg-[#A0522D] text-white py-2 rounded-md hover:bg-[#8B4513] transition duration-300 cursor-pointer"
          >
            Update Profile
          </button>
        </div>
      </div>

      {/* Update Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-[#d5c9be] bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 shadow-xl relative">
            <h2 className="text-xl font-bold text-[#603601] mb-4 text-center">
              Update Profile
            </h2>

            <form onSubmit={handleProfileUpdate} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full text-black placeholder-gray-600 p-2 border border-[#EAD9C9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C17A4E]"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Photo URL
                </label>
                <input
                  type="text"
                  value={editPhoto}
                  onChange={(e) => setEditPhoto(e.target.value)}
                  className="w-full text-black placeholder-gray-600 p-2 border border-[#EAD9C9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C17A4E]"
                  placeholder="Enter photo URL"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#A0522D] text-white py-2 rounded-md hover:bg-[#8B4513] transition duration-300 cursor-pointer"
              >
                Save Changes
              </button>
            </form>

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;


