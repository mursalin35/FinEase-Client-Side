import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

// ✅ Import the modal
import UpdateTransaction from "./UpdateTransaction";
import { useNavigate } from "react-router";

const MyTransactions = () => {
  const { user } = useAuth();
  const axios = useAxiosSecure();
  const navigate = useNavigate();

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Modal state
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // ✅ Load transactions
  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`/my-transactions?email=${user.email}`)
      .then((res) => {
        setTransactions(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user]);

  // ✅ Delete transaction
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This transaction will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`/transactions/${id}`);

          // ✅ Remove from UI only after success
          setTransactions((prev) => prev.filter((t) => t._id !== id));

          Swal.fire("Deleted!", "Transaction has been deleted.", "success");
        } catch (error) {
          Swal.fire("Error!", "Failed to delete transaction.", "error");
        }
      }
    });
  };

  // ✅ Open modal instead of navigate
  const handleUpdate = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleViewDetails = (id) => navigate(`/transactions/details/${id}`);

  // ✅ Modal callbacks
  const handleCloseModal = () => setSelectedTransaction(null);

  const handleUpdated = (updatedData) => {
    setTransactions((prev) =>
      prev.map((t) =>
        t._id === selectedTransaction._id ? { ...t, ...updatedData } : t
      )
    );
  };

  if (loading) return <p>Loading transactions...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Transactions</h1>

      {transactions.length === 0 ? (
        <p>You have no transactions yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {transactions.map((transaction) => (
            <div
              key={transaction._id}
              className="border rounded p-4 shadow hover:shadow-lg transition"
            >
              <p>
                <strong>Type:</strong>{" "}
                <span
                  className={
                    transaction.type === "Income"
                      ? "text-green-600"
                      : "text-red-600"
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
                <strong>Date:</strong>{" "}
                {new Date(transaction.date).toLocaleDateString()}
              </p>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleUpdate(transaction)}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  Update
                </button>

                <button
                  onClick={() => handleDelete(transaction._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>

                <button
                  onClick={() => handleViewDetails(transaction._id)}
                  className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Render modal if a transaction is selected */}
      {selectedTransaction && (
        <UpdateTransaction
          transaction={selectedTransaction}
          onClose={handleCloseModal}
          onUpdated={handleUpdated}
        />
      )}
    </div>
  );
};

export default MyTransactions;
