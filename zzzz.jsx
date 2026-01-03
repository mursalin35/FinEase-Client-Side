import { motion } from "framer-motion";
import { FaUsers, FaMoneyCheckAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

const Statistics = () => {
  const stats = [
    { icon: <FaUsers />, label: "Users Joined", value: 500, color: "from-[#632EE3] to-[#4CB5AE]" },
    { icon: <FaMoneyCheckAlt />, label: "Transactions Processed", value: 1200, color: "from-[#E14D2A] to-[#EEA83E]" },
    { icon: <FaClock />, label: "Hours Saved", value: 350, color: "from-[#22C55E] to-[#4CB5AE]" },
    { icon: <FaCheckCircle />, label: "Goals Achieved", value: 280, color: "from-[#FF6A3D] to-[#FFB86C]" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) => {
          const increment = Math.ceil(stats[i].value / 100); // smooth increment
          return val + increment <= stats[i].value ? val + increment : stats[i].value;
        })
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-24 px-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F2E] dark:text-white">
          Key Statistics
        </h2>
        <p className="mt-4 text-[#6B6B82] dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
          Get a quick glance at FinEase’s impact and achievements so far.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-[#E2E0F5] dark:border-white/10 rounded-3xl shadow-lg flex flex-col items-center justify-center p-8 text-center hover:scale-105 hover:shadow-2xl transition-transform"
          >
            {/* Icon with gradient circle */}
            <div className={`w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br ${stat.color} text-white text-3xl shadow-md`}>
              {stat.icon}
            </div>

            {/* Count */}
            <h3 className="text-3xl md:text-4xl font-bold text-[#1F1F2E] dark:text-white mb-2">
              {counts[index]}
            </h3>

            {/* Label */}
            <p className="text-[#6B6B82] dark:text-gray-400 text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
