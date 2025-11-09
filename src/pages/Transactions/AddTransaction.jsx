import { useState } from "react";
import Swal from "sweetalert2";

import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddTransaction = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [formData, setFormData] = useState({
    type: "Income",
    category: "",
    amount: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTransaction = {
      ...formData,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    try {
      // ✅ Send to backend via axiosSecure (token included)
      const res = await axiosSecure.post("/transactions", newTransaction);

      // ✅ Check backend response
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Transaction added successfully.",
          icon: "success",
          confirmButtonColor: "#2563eb",
        });

        // Reset form after success
        setFormData({
          type: "Income",
          category: "",
          amount: "",
          description: "",
          date: "",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to add transaction!",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong!",
        icon: "error",
      });
    }
  };

  return (
    <section className="max-w-3xl mx-auto mt-14 p-8 bg-white shadow-lg rounded-xl border">
      <h2 className="text-2xl font-bold mb-6">Add New Transaction</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Type */}
        <div>
          <label className="font-semibold">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full mt-2 border p-2 rounded"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="font-semibold">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full mt-2 border p-2 rounded"
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
          <label className="font-semibold">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className="w-full mt-2 border p-2 rounded"
            placeholder="Amount"
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full mt-2 border p-2 rounded"
            rows="3"
            placeholder="Write description..."
          ></textarea>
        </div>

        {/* Date */}
        <div>
          <label className="font-semibold">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full mt-2 border p-2 rounded"
          />
        </div>

        {/* User Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">User Email</label>
            <input
              type="text"
              value={user?.email}
              disabled
              className="w-full mt-2 border p-2 rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="font-semibold">User Name</label>
            <input
              type="text"
              value={user?.displayName}
              disabled
              className="w-full mt-2 border p-2 rounded bg-gray-100"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded mt-4"
        >
          Add Transaction
        </button>
      </form>
    </section>
  );
};

export default AddTransaction;
