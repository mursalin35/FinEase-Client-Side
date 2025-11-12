import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MyTransactionCard from "../../components/MyTransactionCard";
import Swal from "sweetalert2";
import UpdateTransaction from "./UpdateTransaction";
import { Link } from "react-router";
import LoadingSpinner from "../../components/LoadingSpinner";

const MyTransactions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  useEffect(() => {
    axiosSecure.get(`/my-transactions/?email=${user.email}`).then((res) => {
      setTransactions(res.data);
      setLoading(false);
    });
  }, [user, axiosSecure]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This transaction will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4CB5AE",
      cancelButtonColor: "#E14D2A",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.delete(`/transactions/${id}`);
          setTransactions((prev) => prev.filter((t) => t._id !== id));
          Swal.fire("Deleted!", "Transaction has been deleted.", "success");
        } catch {
          Swal.fire("Error!", "Failed to delete transaction.", "error");
        }
      }
    });
  };

  const handleUpdate = (transaction) => setSelectedTransaction(transaction);
  const handleCloseModal = () => setSelectedTransaction(null);
  const handleUpdated = (updatedData) => {
    setTransactions((prev) =>
      prev.map((t) =>
        t._id === selectedTransaction._id ? { ...t, ...updatedData } : t
      )
    );
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
      <LoadingSpinner size={96} message="Page Loading..." />
     </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFF] to-[#F4F6FB] px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#1F1F2E] mb-10">
          My{" "}
          <span className="bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] bg-clip-text text-transparent">
            Transactions
          </span>
        </h1>

        {transactions.length === 0 ? (
          <div className="text-center mt-12">
            <img
              src="https://i.ibb.co.com/Xk2tj6pr/finans-0.png"
              alt="No transactions"
              className="w-48 mx-auto opacity-80"
            />
            <p className="text-gray-600 mb-12 text-lg">
              You have no transactions yet.
            </p>
            <Link to="/add-transaction" className="bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] text-white px-6 py-3 rounded-lg hover:opacity-90 transition font-semibold">
              ➕ Add Transaction
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transactions.map((transaction) => (
              <MyTransactionCard
                key={transaction._id}
                transaction={transaction}
                onUpdate={handleUpdate} 
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {selectedTransaction && (
          <UpdateTransaction
            transaction={selectedTransaction}
            onClose={handleCloseModal}
            onUpdated={handleUpdated}
          />
        )}
      </div>
    </div>
  );
};

export default MyTransactions;
