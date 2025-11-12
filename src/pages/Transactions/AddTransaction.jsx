import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddTransaction = () => {
  document.title = "Add Transaction";
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
      const res = await axiosSecure.post("/transactions", newTransaction);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Transaction added successfully.",
          icon: "success",
          confirmButtonColor: "#632ee3",
        });

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
    <section className="max-w-3xl mx-auto mt-16 mb-24 p-10 bg-gradient-to-br from-white to-indigo-50 dark:from-[#1F1F2E] dark:to-[#2C2C3A] border border-indigo-100 dark:border-[#3D3A64] shadow-xl rounded-2xl transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#632ee3] to-[#00b8b0] bg-clip-text text-transparent mb-8">
        <span className="text-[#1F1F2E] dark:text-[#EDEBFF]">Add</span> Transaction
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Type */}
        <div>
          <label className="font-semibold text-gray-700 dark:text-[#EDEBFF]">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full mt-2 border border-gray-300 dark:border-[#3D3A64] focus:border-primary focus:ring-2 focus:ring-primary/30 p-3 rounded-lg outline-none bg-white dark:bg-[#1F1F2E] text-gray-800 dark:text-[#EDEBFF] transition-all"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="font-semibold text-gray-700 dark:text-[#EDEBFF]">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full mt-2 border border-gray-300 dark:border-[#3D3A64] focus:border-primary focus:ring-2 focus:ring-primary/30 p-3 rounded-lg outline-none bg-white dark:bg-[#1F1F2E] text-gray-800 dark:text-[#EDEBFF] transition-all"
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
          <label className="font-semibold text-gray-700 dark:text-[#EDEBFF]">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            placeholder="Enter amount"
            className="w-full mt-2 border border-gray-300 dark:border-[#3D3A64] focus:border-primary focus:ring-2 focus:ring-primary/30 p-3 rounded-lg outline-none bg-white dark:bg-[#1F1F2E] text-gray-800 dark:text-[#EDEBFF] transition-all"
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-semibold text-gray-700 dark:text-[#EDEBFF]">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            placeholder="Write a short note..."
            className="w-full mt-2 border border-gray-300 dark:border-[#3D3A64] focus:border-primary focus:ring-2 focus:ring-primary/30 p-3 rounded-lg outline-none bg-white dark:bg-[#1F1F2E] text-gray-800 dark:text-[#EDEBFF] transition-all"
          ></textarea>
        </div>

        {/* Date */}
        <div>
          <label className="font-semibold text-gray-700 dark:text-[#EDEBFF]">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full mt-2 border border-gray-300 dark:border-[#3D3A64] focus:border-primary focus:ring-2 focus:ring-primary/30 p-3 rounded-lg outline-none bg-white dark:bg-[#1F1F2E] text-gray-800 dark:text-[#EDEBFF] transition-all"
          />
        </div>

        {/* User Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="font-semibold text-gray-700 dark:text-[#EDEBFF]">User Email</label>
            <input
              type="text"
              value={user?.email}
              disabled
              className="w-full mt-2 border border-gray-200 dark:border-[#3D3A64] p-3 rounded-lg bg-gray-100 dark:bg-[#2C2C3A] text-gray-500 dark:text-[#B0B3C6]"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700 dark:text-[#EDEBFF]">User Name</label>
            <input
              type="text"
              value={user?.displayName}
              disabled
              className="w-full mt-2 border border-gray-200 dark:border-[#3D3A64] p-3 rounded-lg bg-gray-100 dark:bg-[#2C2C3A] text-gray-500 dark:text-[#B0B3C6]"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-6 cursor-pointer bg-gradient-to-r from-[#632ee3] to-[#00b8b0] dark:from-[#8C7BFF] dark:to-[#00D1B2] hover:opacity-90 text-white font-semibold p-3 rounded-lg transition-all duration-300 shadow-md"
        >
          Add Transaction
        </button>
      </form>
    </section>
  );
};

export default AddTransaction;
