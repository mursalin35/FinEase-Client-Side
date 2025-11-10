import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

export default function ReportsPage() {
  // ------------------ Default to current month ------------------
  const getCurrentMonth = () => {
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, "0"); // 01 - 12
    const year = now.getFullYear();
    return `${year}-${month}`; // format: YYYY-MM
  };

  const [month, setMonth] = useState(getCurrentMonth());
  const axiosSecure = useAxiosSecure(); // axios instance with auth token
  const { user } = useAuth(); // Firebase user

  if (!user) return <p className="p-6">Loading user info...</p>;

  // ------------------ Query Functions ------------------
  const fetchTypeReport = async () => {
    const res = await axiosSecure.get(
      `/reports/type?email=${user.email}&month=${month}`
    );
    return res.data;
  };

  const fetchCategoryReport = async () => {
    const res = await axiosSecure.get(
      `/reports/category?email=${user.email}&month=${month}`
    );
    return res.data;
  };

  const fetchMonthlyReport = async () => {
    const res = await axiosSecure.get(`/reports/monthly?email=${user.email}`);
    return res.data;
  };

  // ------------------ useQuery Hooks (v5 object style) ------------------
  const { data: typeReport = [], isLoading: typeLoading } = useQuery({
    queryKey: ["typeReport", user.email, month],
    queryFn: fetchTypeReport,
    enabled: !!user.email,
  });

  const { data: categoryReport = [], isLoading: categoryLoading } = useQuery({
    queryKey: ["categoryReport", user.email, month],
    queryFn: fetchCategoryReport,
    enabled: !!user.email,
  });

  const { data: monthlyReport = [], isLoading: monthlyLoading } = useQuery({
    queryKey: ["monthlyReport", user.email],
    queryFn: fetchMonthlyReport,
    enabled: !!user.email,
  });

  // ------------------ Render ------------------
  return (
    <div className="p-6 grid gap-6">
      {/* Filter Section */}
      <div className="flex gap-4 items-center">
        <label className="font-semibold">Filter by Month:</label>
        <input
          type="month"
          className="border p-2 rounded"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
      </div>

      {/* Summary Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Income vs Expense */}
        <div className="p-4 border rounded-xl shadow bg-white">
          <h2 className="text-lg font-bold mb-3">Income vs Expense</h2>
          {typeLoading ? (
            <p>Loading...</p>
          ) : (
            <PieChart width={350} height={280}>
              <Pie
                data={typeReport}
                dataKey="totalAmount"
                nameKey="_id"
                outerRadius={100}
                label
              />
              <Tooltip />
            </PieChart>
          )}
        </div>

        {/* Category Breakdown */}
        <div className="p-4 border rounded-xl shadow bg-white">
          <h2 className="text-lg font-bold mb-3">Category Breakdown</h2>
          {categoryLoading ? (
            <p>Loading...</p>
          ) : (
            <PieChart width={350} height={280}>
              <Pie
                data={categoryReport}
                dataKey="totalAmount"
                nameKey="_id"
                outerRadius={100}
                label
              />
              <Tooltip />
            </PieChart>
          )}
        </div>
      </div>

      {/* Monthly Bar Chart */}
      <div className="p-4 border rounded-xl shadow bg-white max-w-3xl">
        <h2 className="text-lg font-bold mb-3">Monthly Summary</h2>
        {monthlyLoading ? (
          <p>Loading...</p>
        ) : (
          <BarChart width={600} height={300} data={monthlyReport}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="_id" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="totalAmount" fill="#8884d8" />
          </BarChart>
        )}
      </div>
    </div>
  );
}
