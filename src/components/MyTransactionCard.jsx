import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const MyTransactionCard = ({ transaction, onUpdate, onDelete }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    setDarkMode(html.getAttribute("data-theme") === "dark");

    const observer = new MutationObserver(() => {
      setDarkMode(html.getAttribute("data-theme") === "dark");
    });

    observer.observe(html, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`relative overflow-hidden border rounded-2xl p-5 sm:p-6
  shadow-md hover:shadow-lg transition-all duration-300
  
  ${
    darkMode
      ? "bg-gradient-to-br from-[#1F1F2E] to-[#2C2C3A] border-[#3D3A64]"
      : "bg-gradient-to-br from-white to-indigo-50 border-indigo-100"
  }`}
    >
      {/* Content */}
      <div className="relative z-10 space-y-3 text-sm">
        {/* Type */}
        <div className="flex justify-between items-center">
          <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
            Type
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold
        ${
          transaction.type === "Income"
            ? darkMode
              ? "bg-green-400/10 text-green-400"
              : "bg-green-100 text-green-600"
            : darkMode
            ? "bg-red-400/10 text-red-400"
            : "bg-red-100 text-red-600"
        }`}
          >
            {transaction.type}
          </span>
        </div>

        {/* Category */}
        <div className="flex justify-between">
          <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
            Category
          </span>
          <span
            className={
              darkMode ? "text-[#EDEBFF]" : "text-gray-800 font-medium"
            }
          >
            {transaction.category}
          </span>
        </div>

        {/* Amount */}
        <div className="flex justify-between items-center">
          <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
            Amount
          </span>
          <span
            className={`text-lg font-bold tracking-wide
        ${
          transaction.type === "Income"
            ? darkMode
              ? "text-green-300"
              : "text-green-600"
            : darkMode
            ? "text-red-300"
            : "text-red-600"
        }`}
          >
            ${transaction.amount}
          </span>
        </div>

        {/* Date */}
        <div className="flex justify-between">
          <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
            Date
          </span>
          <span className={darkMode ? "text-gray-300" : "text-gray-700"}>
            {new Date(transaction.date).toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="relative z-10 mt-6 flex flex-wrap justify-between gap-3">
        <button
          onClick={() => onUpdate(transaction)}
          className={`flex-1 sm:flex-none text-white text-sm font-medium
      px-4 py-2 rounded-xl shadow-md transition
      ${
        darkMode
          ? "bg-gradient-to-r from-[#8C7BFF] to-[#00D1B2] hover:scale-[1.03]"
          : "bg-gradient-to-r from-[#632ee3] to-[#07cbc1] hover:scale-[1.03]"
      }`}
        >
          ✏️ Update
        </button>

        <button
          onClick={() => onDelete(transaction._id)}
          className={`flex-1 sm:flex-none text-white text-sm font-medium
      px-4 py-2 rounded-xl shadow-md transition
      ${
        darkMode
          ? "bg-gradient-to-r from-[#FF6B6B] to-[#FFA66B] hover:scale-[1.03]"
          : "bg-gradient-to-r from-[#ff0000] to-[#eea83e] hover:scale-[1.03]"
      }`}
        >
          🗑️ Delete
        </button>

        <Link
          to={`/dashboard/my-transactions/${transaction._id}`}
          className={`flex-1 sm:flex-none text-center text-white text-sm font-medium
      px-4 py-2 rounded-xl shadow-md transition
      ${
        darkMode
          ? "bg-gradient-to-r from-gray-600 to-gray-500 hover:scale-[1.03]"
          : "bg-gradient-to-r from-[#6B7280] to-[#9196a0] hover:scale-[1.03]"
      }`}
        >
          👁️ View
        </Link>
      </div>
    </div>
  );
};

export default MyTransactionCard;
