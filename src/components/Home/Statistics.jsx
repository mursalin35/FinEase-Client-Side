import { motion } from "framer-motion";
import {
  FaUsers,
  FaMoneyCheckAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const Statistics = () => {
  const stats = [
    {
      icon: <FaUsers />,
      label: "Users Joined",
      value: 500,
      color: "from-[#632EE3] to-[#4CB5AE]",
    },
    {
      icon: <FaMoneyCheckAlt />,
      label: "Transactions Processed",
      value: 1200,
      color: "from-[#E14D2A] to-[#EEA83E]",
    },
    {
      icon: <FaClock />,
      label: "Hours Saved",
      value: 350,
      color: "from-[#22C55E] to-[#4CB5AE]",
    },
    {
      icon: <FaCheckCircle />,
      label: "Goals Achieved",
      value: 280,
      color: "from-[#FF6A3D] to-[#FFB86C]",
    },
  ];

  // Optional: simple count-up animation
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) => (val < stats[i].value ? val + 1 : val))
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" py-5 px-6 sm:px-11">
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
              <span className="text-[#1F1F2E] dark:text-[#E5E7EB]">Key</span>{" "}
              Statistics
            </h2>
            {/* line  */}
            <div className="h-1 w-20 mt-2 rounded-full bg-gradient-to-r from-[#632EE3] to-[#4CB5AE]"></div>
          </div>
        </div>
        {/* Description  */}
        <p className="mt-4 text-[#6B6B82] dark:text-gray-400 max-w-sm sm:max-w-2xl mx-auto">
          Get a quick glance at FinEase’s impact and achievements so far.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/90 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-10 sm:p-8 border border-[#E2E0F5] dark:border-white/10 shadow-lg flex flex-col items-center text-center hover:scale-101  transition-transform"
          >
            <div
              className={`w-10 h-10 mb-5 flex items-center justify-center rounded-full bg-gradient-to-br ${stat.color} text-white text-2xl shadow-md`}
            >
              {stat.icon}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1F1F2E] dark:text-white mb-2">
              {counts[index]}
            </h3>
            <p className="text-[#6B6B82] dark:text-gray-400 text-lg">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
