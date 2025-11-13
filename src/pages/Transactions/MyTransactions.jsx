import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MyTransactionCard from "../../components/MyTransactionCard";
import Swal from "sweetalert2";
import UpdateTransaction from "./UpdateTransaction";
import { Link } from "react-router";
import LoadingSpinner from "../../components/LoadingSpinner";

const MyTransactions = () => {
  document.title = "My Transaction";
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // 🌿 New filter & sort states
  const [filter, setFilter] = useState("All");
  const [sortAmount, setSortAmount] = useState("None");

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

  // 🌿 Filter + Sort logic
  const filteredTransactions =
    filter === "All"
      ? transactions
      : transactions.filter((t) => t.type === filter);

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (sortAmount === "LowToHigh") {
      return parseFloat(a.amount) - parseFloat(b.amount);
    } else if (sortAmount === "HighToLow") {
      return parseFloat(b.amount) - parseFloat(a.amount);
    }
    return 0;
  });

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F9FAFF] to-[#F4F6FB] dark:from-[#1F1F2E] dark:to-[#2C2C3A] transition-colors duration-300">
        <LoadingSpinner size={96} message="Page Loading..." />
      </div>
    );

  return (
    <div className="min-h-screen px-6 py-10 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#1F1F2E] dark:text-[#EDEBFF] mb-10">
          My{" "}
          <span className="bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] bg-clip-text text-transparent">
            Transactions
          </span>
        </h1>

        {/* 🌿 Filter & Sort by Amount */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <label className="font-medium text-[#1F1F2E] dark:text-[#EDEBFF]">
              Filter:
            </label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-[#4CB5AE] dark:border-[#8C7BFF] rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#632EE3] bg-transparent text-[#1F1F2E] dark:text-[#EDEBFF]"
            >
              <option value="All">All</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="font-medium text-[#1F1F2E] dark:text-[#EDEBFF]">
              Sort by Amount:
            </label>
            <select
              value={sortAmount}
              onChange={(e) => setSortAmount(e.target.value)}
              className="border border-[#4CB5AE] dark:border-[#8C7BFF] rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#632EE3] bg-transparent text-[#1F1F2E] dark:text-[#EDEBFF]"
            >
              <option value="None">Default</option>
              <option value="LowToHigh">Lowest First</option>
              <option value="HighToLow">Highest First</option>
            </select>
          </div>
        </div>

        {transactions.length === 0 ? (
          <div className="text-center mt-12">
            <img
              src="https://i.ibb.co.com/Xk2tj6pr/finans-0.png"
              alt="No transactions"
              className="w-48 mx-auto opacity-80"
            />
            <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg">
              You have no transactions yet.
            </p>
            <Link
              to="/add-transaction"
              className="bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] dark:from-[#8C7BFF] dark:to-[#00D1B2] text-white px-6 py-3 rounded-lg hover:opacity-90 transition font-semibold"
            >
              ➕ Add Transaction
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedTransactions.map((transaction) => (
              <MyTransactionCard
                key={transaction._id}
                transaction={transaction}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                darkMode
              />
            ))}
          </div>
        )}

        {selectedTransaction && (
          <UpdateTransaction
            transaction={selectedTransaction}
            onClose={handleCloseModal}
            onUpdated={handleUpdated}
            darkMode
          />
        )}
      </div>
    </div>
  );
};

export default MyTransactions;
