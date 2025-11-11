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
  const getCurrentMonth = () => {
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();
    return `${year}-${month}`;
  };

  const [month, setMonth] = useState(getCurrentMonth());
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  if (!user) return <p className="p-6 text-center text-gray-600">Loading user info...</p>;

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

  return (
    <div className="p-8 min-h-screen ">
      {/* -------- Filter Section -------- */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10 bg-white/70 backdrop-blur-md border border-indigo-100 p-5 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#632ee3] to-[#00b8b0] bg-clip-text text-transparent">
          <span className="text-[#1F1F2E]">Financial</span> Reports
        </h2>

        <div className="flex items-center gap-3 md:ml-auto">
          <label className="font-semibold text-gray-700">Filter by Month:</label>
          <input
            type="month"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#632ee3]"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </div>
      </div>

      {/* -------- Charts Grid -------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Income vs Expense */}
        <div className="glass-card bg-white/70 border border-indigo-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-lg font-semibold mb-4 text-[#632ee3]">
            💰 Income <span className="text-[#1F1F2E]">vs</span> Expense
          </h2>
          {typeLoading ? (
            <p className="text-gray-500 text-sm">Loading chart...</p>
          ) : (
            <div className="flex justify-center">
              <PieChart width={350} height={280}>
                <Pie
                  data={typeReport}
                  dataKey="totalAmount"
                  nameKey="_id"
                  outerRadius={100}
                  fill="#632ee3"
                  label
                />
                <Tooltip />
              </PieChart>
            </div>
          )}
        </div>

        {/* Category Breakdown */}
        <div className="glass-card bg-white/70 border border-indigo-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-lg font-semibold mb-4 text-[#00b8b0]">
            📊 Category Breakdown
          </h2>
          {categoryLoading ? (
            <p className="text-gray-500 text-sm">Loading chart...</p>
          ) : (
            <div className="flex justify-center">
              <PieChart width={350} height={280}>
                <Pie
                  data={categoryReport}
                  dataKey="totalAmount"
                  nameKey="_id"
                  outerRadius={100}
                  fill="#00b8b0"
                  label
                />
                <Tooltip />
              </PieChart>
            </div>
          )}
        </div>
      </div>

      {/* -------- Monthly Summary -------- */}
      <div className="mt-10 glass-card bg-white/70 border border-indigo-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
        <h2 className="text-lg font-semibold mb-4 text-[#632ee3]">
          📅 Monthly Summary
        </h2>
        {monthlyLoading ? (
          <p className="text-gray-500 text-sm">Loading chart...</p>
        ) : (
          <div className="flex justify-center">
            <BarChart width={700} height={300} data={monthlyReport}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="_id" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="totalAmount" fill="#632ee3" radius={[6, 6, 0, 0]} />
            </BarChart>
          </div>
        )}
      </div>
    </div>
  );
}
