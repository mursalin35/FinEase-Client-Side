import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
      .get(`/overview?email=${user.email}`)
      .then((res) => setStats(res.data))
      .catch(() => {});
  }, [user, axiosSecure]);

  // Animate numbers
  useEffect(() => {
    const duration = 1000;
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

  const cards = [
    {
      title: "Total Balance",
      value: animated.totalBalance,
      icon: <FaWallet />,
      text: "text-green-600",
      bg: "from-green-500/20 to-green-600/10",
    },
    {
      title: "Total Income",
      value: animated.totalIncome,
      icon: <FaArrowDown />,
      text: "text-blue-600",
      bg: "from-blue-500/20 to-blue-600/10",
    },
    {
      title: "Total Expenses",
      value: animated.totalExpense,
      icon: <FaArrowUp />,
      text: "text-red-600",
      bg: "from-red-500/20 to-red-600/10",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-5">

  {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center">
          <div className=" flex flex-col items-start justify-center">
            {/* title  */}
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] bg-clip-text text-transparent">
              <span className="text-[#1F1F2E] dark:text-[#E5E7EB]">Financial</span>{" "}
              Overview
            </h2>
            {/* line  */}
            <div className="h-1 w-40 mt-2 rounded-full bg-gradient-to-r from-[#632EE3] to-[#4CB5AE]"></div>
          </div>
        </div>
        {/* Description  */}
        <p className="mt-4 text-[#6B6B82] dark:text-gray-400 max-w-sm sm:max-w-2xl mx-auto">
           Get a clear snapshot of your income, expenses, and overall financial
          balance.
        </p>
      </motion.div>




      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-2xl bg-white/90 dark:bg-white/5 backdrop-blur-xl
            border border-[#E2E0F5] dark:border-white/10 shadow-lg
            hover:shadow-xl  transition-all duration-300"
          >
            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.bg} opacity-60 pointer-events-none`}
            />

            {/* Icon */}
            <div className="relative z-10 flex items-center justify-between mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-black/30 shadow">
                <span className={`${card.text} text-xl`}>{card.icon}</span>
              </div>
            </div>

            {/* Content */}
            <h3 className="relative z-10 text-lg font-semibold text-[#1F1F2E] dark:text-white">
              {card.title}
            </h3>
            <p className={`relative z-10 mt-2 text-3xl font-bold ${card.text}`}>
              ${card.value.toFixed(2)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
