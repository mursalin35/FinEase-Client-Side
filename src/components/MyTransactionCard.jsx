import React from "react";
import { Link } from "react-router";

const MyTransactionCard = ({ transaction, onUpdate, onDelete }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <p>
        <strong>Type:</strong>{" "}
        <span
          className={
            transaction.type === "Income" ? "text-green-600" : "text-red-600"
          }
        >
          {transaction.type}
        </span>
      </p>
      <p>
        <strong>Category:</strong> {transaction.category}
      </p>
      <p>
        <strong>Amount:</strong> ${transaction.amount}
      </p>
      <p>
        <strong>Date:</strong> {new Date(transaction.date).toLocaleDateString()}
      </p>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => onUpdate(transaction)}
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
        >
          Update
        </button>

        <button
          onClick={() => onDelete(transaction._id)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>

        <Link
          to={`/transaction-details/${transaction._id}`}
          className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default MyTransactionCard;
