import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const TransactionDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axios = useAxiosSecure();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState(null);
  const [categoryTotal, setCategoryTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  // ✅ Load transaction by ID
  useEffect(() => {
    if (!id || !user?.email) return;

    axios
      .get(`/transactions/${id}`)
      .then(async (res) => {
        const data = res.data;

        // Unauthorized transaction protect
        if (data.userEmail !== user.email) {
          Swal.fire("Unauthorized!", "You cannot access this transaction.", "error");
          navigate("/my-transactions");
          return;
        }

        setTransaction(data);

        // ✅ Load Total Amount for this Category (NO USER FILTER)
        const totalRes = await axios.get(
          `/transactions/category-total?category=${data.category}`
        );

        setCategoryTotal(totalRes.data.totalAmount || 0);

        setLoading(false);
      })
      .catch(() => {
        Swal.fire("Error!", "Transaction not found!", "error");
        navigate("/my-transactions");
      });
  }, [id, user]);

  if (loading) return <p className="text-center mt-10">Loading details...</p>;
  if (!transaction) return null;

  return (
    <section className="max-w-3xl mx-auto mt-10 bg-white shadow-lg border rounded-xl p-8">
      <h1 className="text-3xl font-bold mb-6">Transaction Details</h1>

      <div className="space-y-3 text-lg">
        <p>
          <strong>Type:</strong>{" "}
          <span
            className={transaction.type === "Income" ? "text-green-600" : "text-red-600"}
          >
            {transaction.type}
          </span>
        </p>

        <p><strong>Category:</strong> {transaction.category}</p>

        <p>
          <strong>Amount:</strong>
          <span className="font-semibold"> ${transaction.amount}</span>
        </p>

        <p>
          <strong>Description:</strong> {transaction.description || "No description"}
        </p>

        <p>
          <strong>Date:</strong>{" "}
          {new Date(transaction.date).toLocaleDateString()}
        </p>

        <p>
          <strong>User:</strong> {transaction.userName} ({transaction.userEmail})
        </p>

        {/* ✅ Category total amount */}
        <p className="text-blue-700 font-semibold text-xl mt-4">
          Total Amount in This Category: ${categoryTotal}
        </p>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={() => navigate("/my-transactions")}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Back
        </button>
      </div>
    </section>
  );
};

export default TransactionDetails;
