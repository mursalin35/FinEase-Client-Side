import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";
import MyTransactionCard from "../../components/MyTransactionCard";
import UpdateTransaction from "./UpdateTransaction";

// ✅ Import modal and card component


const MyTransactions = () => {
  const { user } = useAuth();
  const axios = useAxiosSecure();
  const navigate = useNavigate();

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
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
          setTransactions((prev) => prev.filter((t) => t._id !== id));
          Swal.fire("Deleted!", "Transaction has been deleted.", "success");
        } catch {
          Swal.fire("Error!", "Failed to delete transaction.", "error");
        }
      }
    });
  };

  // ✅ Open modal
  const handleUpdate = (transaction) => setSelectedTransaction(transaction);

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
            <MyTransactionCard
              key={transaction._id}
              transaction={transaction}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              onView={handleViewDetails}
            />
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
