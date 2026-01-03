import { motion } from "framer-motion";
import { FaPiggyBank, FaChartLine, FaWallet, FaLightbulb } from "react-icons/fa";

const FinanceTips = () => {
  const tips = [
    {
      icon: <FaPiggyBank />,
      title: "Save Smartly",
      description: "Set aside a portion of your income each month and watch your savings grow steadily."
    },
    {
      icon: <FaChartLine />,
      title: "Track Your Spending",
      description: "Monitor your daily expenses and categorize them for better budgeting decisions."
    },
    {
      icon: <FaWallet />,
      title: "Manage Your Budget",
      description: "Create monthly budgets and stick to them to avoid overspending."
    },
    {
      icon: <FaLightbulb />,
      title: "Plan for Goals",
      description: "Set financial goals and plan systematically to achieve them on time."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-[#1F1F2E] dark:text-white">
          Finance Tips
        </h2>
        <p className="mt-4 text-[#6B6B82] dark:text-gray-400 max-w-2xl mx-auto">
          Quick actionable tips to manage your money, save more, and plan effectively for the future.
        </p>
      </motion.div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/90 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-[#E2E0F5] dark:border-white/10 shadow-lg flex flex-col items-center text-center"
          >
            <div className="text-[#632EE3] dark:text-[#4CB5AE] text-4xl mb-4">
              {tip.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#1F1F2E] dark:text-white mb-2">
              {tip.title}
            </h3>
            <p className="text-[#6B6B82] dark:text-gray-400">
              {tip.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FinanceTips;
    