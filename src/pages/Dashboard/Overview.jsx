import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { FaWallet, FaArrowDown, FaArrowUp } from "react-icons/fa";

const Overview = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const today = new Date().toISOString().split("T")[0];

  const [dateRange, setDateRange] = useState({
    from: today,
    to: today,
  });

  const [stats, setStats] = useState({
    totalBalance: 0,
    totalIncome: 0,
    totalExpense: 0,
  });

  const [animated, setAnimated] = useState(stats);

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    if (!user?.email) return;

    axiosSecure
      .get(
        `/overview?email=${user.email}&from=${dateRange.from}&to=${dateRange.to}`
      )
      .then((res) => setStats(res.data))
      .catch(() => {});
  }, [user, dateRange, axiosSecure]);

  /* ================= ANIMATE NUMBERS ================= */
  useEffect(() => {
    const duration = 800;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
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
      text: "text-[#22C55E]",
      bg: "from-[#22C55E]/20 to-[#22C55E]/5",
    },
    {
      title: "Total Income",
      value: animated.totalIncome,
      icon: <FaArrowDown />,
      text: "text-[#4CB5AE]",
      bg: "from-[#4CB5AE]/20 to-[#4CB5AE]/5",
    },
    {
      title: "Total Expenses",
      value: animated.totalExpense,
      icon: <FaArrowUp />,
      text: "text-[#EF4444]",
      bg: "from-[#EF4444]/20 to-[#EF4444]/5",
    },
  ];

 return (
  <section className="space-y-12">

    {/* ================= TOP BADGE ================= */}
    <motion.span
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-block px-5 py-1.5 text-sm rounded-full
      bg-gradient-to-r from-[#632EE3]/15 to-[#4CB5AE]/15
      text-[#4CB5AE] font-semibold tracking-wide"
    >
      Financial Snapshot
    </motion.span>

    {/* ================= HEADER ================= */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
    >
      <div>
        <h2 className="text-3xl md:text-4xl font-bold
        bg-gradient-to-r from-[#632EE3] to-[#4CB5AE]
        bg-clip-text text-transparent">
          Dashboard Overview
        </h2>
        <p className="mt-2 text-[#6B6B82] max-w-md">
          Monitor your balance, income, and expenses with real-time insights.
        </p>
      </div>

      {/* ================= DATE FILTER ================= */}
      <div
        className="flex flex-wrap gap-3 bg-white/90 dark:bg-white/5
        backdrop-blur border border-[#E2E0F5] dark:border-white/10
        rounded-2xl p-3 shadow-sm"
      >
        <input
          type="date"
          value={dateRange.from}
          onChange={(e) =>
            setDateRange({ ...dateRange, from: e.target.value })
          }
          className="px-4 py-2 rounded-xl text-sm
          border border-[#E2E0F5] dark:border-white/10
          bg-transparent outline-none"
        />
        <input
          type="date"
          value={dateRange.to}
          onChange={(e) =>
            setDateRange({ ...dateRange, to: e.target.value })
          }
          className="px-4 py-2 rounded-xl text-sm
          border border-[#E2E0F5] dark:border-white/10
          bg-transparent outline-none"
        />
      </div>
    </motion.div>

    {/* ================= STATS GRID ================= */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 3 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -1 }}
          className="relative p-6 rounded-3xl
          bg-white/90 dark:bg-white/5 backdrop-blur
          border border-[#E2E0F5] dark:border-white/10
          shadow-md hover:shadow-lg transition-all"
        >
          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 rounded-3xl
            bg-gradient-to-br ${card.bg} opacity-70`}
          />

          <div className="relative z-10">
            {/* Icon */}
            <div
              className="w-14 h-14 flex items-center justify-center
              rounded-2xl bg-white dark:bg-black/30
              shadow mb-5"
            >
              <span className={`${card.text} text-2xl`}>
                {card.icon}
              </span>
            </div>

            {/* Text */}
            <h3 className="text-sm uppercase tracking-wide
            text-[#6B6B82]">
              {card.title}
            </h3>

            <p className={`mt-2 text-3xl md:text-4xl font-bold ${card.text}`}>
              ${card.value.toFixed(2)}
            </p>

            <div className="mt-4 h-1 w-full rounded-full bg-black/5 dark:bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 1 }}
                className={`h-1 rounded-full ${card.text}`}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* ================= FOOTER NOTE ================= */}
    <p className="text-center text-sm text-[#6B6B82]">
      Data updates automatically based on your selected date range.
    </p>
  </section>
);

};

export default Overview;
