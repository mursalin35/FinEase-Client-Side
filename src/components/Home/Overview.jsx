import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { FaWallet, FaArrowDown, FaArrowUp } from "react-icons/fa";

const Overview = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [stats, setStats] = useState({
    totalBalance: 0,
    totalIncome: 0,
    totalExpense: 0,
  });

  const [animated, setAnimated] = useState({
    totalBalance: 0,
    totalIncome: 0,
    totalExpense: 0,
  });

  useEffect(() => {
    if (!user?.email) return;

    axiosSecure
      .get(`/reports/overview?email=${user.email}`)
      .then((res) => setStats(res.data))
      .catch(() => {});
  }, [user]);

  // 🌿 Animate numbers smoothly from 0 → target value
  useEffect(() => {
    const duration = 1000; // 1 second
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setAnimated({
        totalBalance: stats.totalBalance * progress,
        totalIncome: stats.totalIncome * progress,
        totalExpense: stats.totalExpense * progress,
      });

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [stats]);

  const { totalBalance, totalIncome, totalExpense } = animated;

  const cards = [
    {
      title: "Total Balance",
      value: totalBalance,
      icon: <FaWallet className="text-green-600 w-6 h-6" />,
      color: "green",
    },
    {
      title: "Total Income",
      value: totalIncome,
      icon: <FaArrowDown className="text-blue-600 w-6 h-6" />,
      color: "blue",
    },
    {
      title: "Total Expenses",
      value: totalExpense,
      icon: <FaArrowUp className="text-red-600 w-6 h-6" />,
      color: "red",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 mt-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`bg-base-200 dark:bg-[#1E1E2F] shadow-lg rounded-xl p-6 border border-gray-200 dark:border-[#3D3A64] hover:shadow-2xl transition duration-300 relative overflow-hidden`}
        >
          <div className="absolute top-4 right-4">{card.icon}</div>
          <h3 className="text-lg font-semibold mb-2 text-[#1F1F2E] dark:text-[#EDEBFF]">
            {card.title}
          </h3>
          <p className={`text-2xl font-bold text-${card.color}-600`}>
            ${card.value.toFixed(2)}
          </p>
          <div className="mt-2 text-gray-500 dark:text-[#B0B3C6] text-sm"></div>
        </div>
      ))}
    </section>
  );
};

export default Overview;
