import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";

const UpdateTransaction = ({ transaction, onClose, onUpdated }) => {
  document.title = "Update Transaction";
  const axios = useAxiosSecure();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    type: transaction.type,
    category: transaction.category,
    amount: transaction.amount,
    description: transaction.description,
    date: new Date(transaction.date).toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/transactions/${transaction._id}`, formData);

      Swal.fire("Success!", "Transaction updated successfully.", "success");

      onUpdated(formData); // notify parent
      onClose(); // close modal

      // ✅ Redirect to View Details Page
      navigate(`/my-transactions/${transaction._id}`);
    } catch (error) {
      Swal.fire("Error!", "Failed to update transaction.", "error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-gradient-to-br from-white to-indigo-50 dark:from-[#1F1F2E] dark:to-[#2C2C3A] border border-indigo-100 dark:border-[#3D3A64] shadow-xl rounded-2xl p-6 w-full max-w-md relative transition-colors">
        
        <button
          onClick={onClose}
          className="absolute cursor-pointer hover:text-red-600 top-3 right-3.5 text-gray-500 dark:text-[#B0B3C6]"
        >
          ✕
        </button>

        <h2 className="text-xl bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] bg-clip-text text-transparent font-bold mb-4">
          <span className="text-[#1F1F2E] dark:text-[#EDEBFF]">Update</span> Transaction
        </h2>

        <form onSubmit={handleUpdate} className="space-y-3">

          {/* Type */}
          <div>
            <label className="block font-semibold text-gray-700 dark:text-[#EDEBFF]">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded mt-2 border-gray-300 dark:border-[#3D3A64] bg-white dark:bg-[#1F1F2E] text-gray-800 dark:text-[#EDEBFF] focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-colors"
              required
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold text-gray-700 dark:text-[#EDEBFF]">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full border px-2 py-1 rounded mt-2 border-gray-300 dark:border-[#3D3A64] bg-white dark:bg-[#1F1F2E] text-gray-800 dark:text-[#EDEBFF] focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-colors"
            >
              <option value="">Select Category</option>
              <option value="Salary">Salary</option>
              <option value="Business">Business</option>
              <option value="Food">Food</option>
              <option value="Shopping">Shopping</option>
              <option value="Transport">Transport</option>
              <option value="Saving">Saving</option>
            </select>
          </div>

          {/* Amount */}
          <div>
            <label className="block font-semibold text-gray-700 dark:text-[#EDEBFF]">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded mt-2 border-gray-300 dark:border-[#3D3A64] bg-white dark:bg-[#1F1F2E] text-gray-800 dark:text-[#EDEBFF] focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-colors"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold text-gray-700 dark:text-[#EDEBFF]">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded mt-2 border-gray-300 dark:border-[#3D3A64] bg-white dark:bg-[#1F1F2E] text-gray-800 dark:text-[#EDEBFF] focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-colors"
            ></textarea>
          </div>

          {/* Date */}
          <div>
            <label className="block font-semibold text-gray-700 dark:text-[#EDEBFF]">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded mt-2 border-gray-300 dark:border-[#3D3A64] bg-white dark:bg-[#1F1F2E] text-gray-800 dark:text-[#EDEBFF] focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-colors"
              required
            />
          </div>

          {/* Update Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-[#632ee3] to-[#07cbc1] dark:from-[#8C7BFF] dark:to-[#00D1B2] cursor-pointer opacity-85 hover:opacity-100 text-white text-sm font-medium px-6 py-2 rounded-lg shadow-sm"
          >
            Update
          </button>

        </form>
      </div>
    </div>
  );
};

export default UpdateTransaction;
