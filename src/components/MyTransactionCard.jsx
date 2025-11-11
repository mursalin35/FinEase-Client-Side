import React from "react";
import { Link } from "react-router";

const MyTransactionCard = ({ transaction, onUpdate, onDelete }) => {
  return (
    <div className="border border-indigo-100 bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="space-y-2">
        <p className="text-sm text-gray-600">
          <strong className="text-gray-800">Type:</strong>{" "}
          <span
            className={`font-semibold ${
              transaction.type === "Income"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {transaction.type}
          </span>
        </p>

        <p className="text-sm text-gray-600">
          <strong className="text-gray-800">Category:</strong>{" "}
          {transaction.category}
        </p>

        <p className="text-sm text-gray-600">
          <strong className="text-gray-800">Amount:</strong>{" "}
          <span className="text-primary font-semibold">
            ${transaction.amount}
          </span>
        </p>

        <p className="text-sm text-gray-600">
          <strong className="text-gray-800">Date:</strong>{" "}
          {new Date(transaction.date).toLocaleDateString()}
        </p>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => onUpdate(transaction)}
          className="bg-gradient-to-r from-[#632ee3] to-[#07cbc1] cursor-pointer opacity-85 hover:opacity-100  text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 shadow-sm"
        >
          ✏️ Update
        </button>
        <button
          onClick={() => onDelete(transaction._id)}
          className="bg-gradient-to-r from-[#ff0000] to-[#eea83e] opacity-85 hover:opacity-100 cursor-pointer text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 shadow-sm"
        >
          🗑️ Delete
        </button>
{/* bg-gray-500 hover:bg-gray-600 */}
        <Link
          to={`/transaction-details/${transaction._id}`}
          className="bg-gradient-to-r from-[#6B7280] to-[#9196a0] opacity-85 hover:opacity-100 cursor-pointer text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 shadow-sm"
        >
          👁️ View
        </Link>
      </div>
    </div>
  );
};

export default MyTransactionCard;
