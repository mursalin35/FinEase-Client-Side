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

    observer.observe(html, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-200 ${
        darkMode
          ? "bg-gradient-to-br from-[#1F1F2E] to-[#2C2C3A] border-[#3D3A64]"
          : "bg-gradient-to-br from-white to-indigo-50 border-indigo-100"
      }`}
    >
      <div className="space-y-2">
        <p className={darkMode ? "text-gray-300 text-sm" : "text-gray-600 text-sm"}>
          <strong className={darkMode ? "text-[#EDEBFF]" : "text-gray-800"}>Type:</strong>{" "}
          <span
            className={`font-semibold ${
              transaction.type === "Income"
                ? darkMode
                  ? "text-green-400"
                  : "text-green-600"
                : darkMode
                ? "text-red-400"
                : "text-red-600"
            }`}
          >
            {transaction.type}
          </span>
        </p>

        <p className={darkMode ? "text-gray-300 text-sm" : "text-gray-600 text-sm"}>
          <strong className={darkMode ? "text-[#EDEBFF]" : "text-gray-800"}>Category:</strong>{" "}
          {transaction.category}
        </p>

        <p className={darkMode ? "text-gray-300 text-sm" : "text-gray-600 text-sm"}>
          <strong className={darkMode ? "text-[#EDEBFF]" : "text-gray-800"}>Amount:</strong>{" "}
          <span className={darkMode ? "text-green-300 font-semibold" : "text-primary font-semibold"}>
            ${transaction.amount}
          </span>
        </p>

        <p className={darkMode ? "text-gray-300 text-sm" : "text-gray-600 text-sm"}>
          <strong className={darkMode ? "text-[#EDEBFF]" : "text-gray-800"}>Date:</strong>{" "}
          {new Date(transaction.date).toLocaleDateString()}
        </p>
      </div>

      <div className="flex justify-between items-center mt-6 flex-wrap gap-2">
        <button
          onClick={() => onUpdate(transaction)}
          className={`cursor-pointer text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm ${
            darkMode
              ? "bg-gradient-to-r from-[#8C7BFF] to-[#00D1B2] hover:opacity-90"
              : "bg-gradient-to-r from-[#632ee3] to-[#07cbc1] hover:opacity-100"
          }`}
        >
          ✏️ Update
        </button>
        <button
          onClick={() => onDelete(transaction._id)}
          className={`cursor-pointer text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm ${
            darkMode
              ? "bg-gradient-to-r from-[#FF6B6B] to-[#FFA66B] hover:opacity-90"
              : "bg-gradient-to-r from-[#ff0000] to-[#eea83e] hover:opacity-100"
          }`}
        >
          🗑️ Delete
        </button>
        <Link
          to={`/my-transactions/${transaction._id}`}
          className={`cursor-pointer text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm ${
            darkMode
              ? "bg-gradient-to-r from-gray-600 to-gray-500 hover:opacity-90"
              : "bg-gradient-to-r from-[#6B7280] to-[#9196a0] hover:opacity-100"
          }`}
        >
          👁️ View
        </Link>
      </div>
    </div>
  );
};

export default MyTransactionCard;
