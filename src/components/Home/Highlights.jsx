import { motion } from "framer-motion";
import { FaChartLine, FaWallet, FaBullseye, FaLightbulb } from "react-icons/fa";

const Highlights = () => {
  const highlights = [
    {
      icon: <FaChartLine />,
      title: "Real-time Reports",
      description: "Track your finances with interactive charts and detailed reports instantly.",
      color: "from-[#632EE3] to-[#4CB5AE]",
    },
    {
      icon: <FaWallet />,
      title: "Easy Budgeting",
      description: "Set budgets and monitor expenses effortlessly to achieve your financial goals.",
      color: "from-[#E14D2A] to-[#EEA83E]",
    },
    {
      icon: <FaBullseye />,
      title: "Goal Tracking",
      description: "Plan and achieve your savings targets with clear milestones and notifications.",
      color: "from-[#22C55E] to-[#4CB5AE]",
    },
    {
      icon: <FaLightbulb />,
      title: "Smart Tips",
      description: "Get actionable financial tips to improve your spending habits and investments.",
      color: "from-[#FF6A3D] to-[#FFB86C]",
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto py-24 px-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F2E] dark:text-white">
          Highlights of FinEase
        </h2>
        <p className="mt-4 text-[#6B6B82] dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
          Discover what makes FinEase the perfect tool to manage your personal finances.
        </p>
      </motion.div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/90 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-[#E2E0F5] dark:border-white/10 shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <div className={`w-20 h-20 mb-5 rounded-full flex items-center justify-center bg-gradient-to-br ${item.color} text-white text-3xl shadow-lg`}>
              {item.icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1F1F2E] dark:text-white mb-2">
              {item.title}
            </h3>
            <p className="text-[#6B6B82] dark:text-gray-400 text-base md:text-lg">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
