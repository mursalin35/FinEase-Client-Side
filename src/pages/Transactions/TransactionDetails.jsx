import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { motion } from "framer-motion";

const TransactionDetails = () => {
  document.title="Transaction Details"
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

        if (data.userEmail !== user.email) {
          Swal.fire("Unauthorized!", "You cannot access this transaction.", "error");
          navigate("/my-transactions");
          return;
        }

        setTransaction(data);

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

  if (loading)
    return <p className="text-center mt-10 text-[#6B6B82]">Loading details...</p>;

  if (!transaction) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative max-w-3xl mx-auto mt-12 bg-white/90 backdrop-blur-xl 
      border border-[#E2E0F5] rounded-2xl p-10 shadow-[0_10px_40px_rgba(99,46,227,0.12)] overflow-hidden"
    >
      {/* ✅ Gradient Glow Background Halo */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#4fdfcc] to-[#6dc5bd] opacity-20 blur-2xl rounded-3xl"></div>
      </div>

      {/* ✅ Title */}
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] bg-clip-text text-transparent"><span className="text-[#1F1F2E]">Transaction</span> Details</h1>
      <div className="h-1 w-44 mt-2 mb-6 rounded-full bg-gradient-to-r from-[#632EE3] to-[#4CB5AE]"></div>

      {/* ✅ Details */}
      <div className="space-y-4 text-lg">

        <motion.p
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
        >
          <span className="font-semibold text-[#2E1F47]">Type:</span>{" "}
          <span
            className={`font-semibold ${
              transaction.type === "Income" ? "text-[#22C55E]" : "text-[#EF4444]"
            }`}
          >
            {transaction.type}
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          <span className="font-semibold text-[#2E1F47]">Category:</span>{" "}
          <span className="text-[#6B6B82]">{transaction.category}</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
        >
          <span className="font-semibold text-[#2E1F47]">Amount:</span>{" "}
          <span className="font-semibold text-[#632EE3]">
            ${transaction.amount}
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45 }}
        >
          <span className="font-semibold text-[#2E1F47]">Description:</span>{" "}
          <span className="text-[#6B6B82]">
            {transaction.description || "No description"}
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.55 }}
        >
          <span className="font-semibold text-[#2E1F47]">Date:</span>{" "}
          <span className="text-[#6B6B82]">
            {new Date(transaction.date).toLocaleDateString()}
          </span>
        </motion.p>

        {/* ✅ Category Total */}
        <motion.p
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.65 }}
          className="text-xl font-semibold text-[#177163] mt-4"
        >
          Total Amount in This Category: <span className="text-[#632EE3]">${categoryTotal}</span>
        </motion.p>
      </div>

      {/* ✅ Back Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        className="flex gap-4 mt-10"
      >
        <button
          onClick={() => navigate("/my-transactions")}
          className="px-5 py-2.5 text-white font-medium rounded-lg
          bg-gradient-to-r from-[#6B6B82] to-[#A1A1B5]
          shadow-sm hover:shadow-md hover:opacity-100 opacity-90 transition-all duration-200"
        >
          ⬅ Back
        </button>
      </motion.div>
    </motion.section>
  );
};

export default TransactionDetails;
