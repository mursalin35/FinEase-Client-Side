import React, { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateTransaction = ({ transaction, onClose, onUpdated }) => {
  const axios = useAxiosSecure();

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
      await axios.put(
        `/transactions/${transaction._id}`,
        formData
      );
      Swal.fire("Success!", "Transaction updated successfully.", "success");
      onUpdated(formData); // parent কে notify করবে
      onClose(); // modal close
    } catch (error) {
      Swal.fire("Error!", "Failed to update transaction.", "error");
    }
  };

  return (
    <div className="fixed inset-0 bg-base-200 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] font-bold mb-4">Update Transaction</h2>
        <form onSubmit={handleUpdate} className="space-y-3">
          <div>
            <label className="block font-semibold text-gray-700">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded  mt-2  border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
              required
            >
             
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Category</label>
              <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border px-2 py-1 rounded  mt-2  border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
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

          <div>
            <label className="block font-semibold text-gray-700">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded  mt-2  border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded  mt-2  border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded  mt-2  border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-[#632ee3] to-[#07cbc1] cursor-pointer opacity-85 hover:opacity-100  text-white text-sm font-medium px-6 py-2 rounded-lg transition-all duration-200 shadow-sm"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTransaction;
