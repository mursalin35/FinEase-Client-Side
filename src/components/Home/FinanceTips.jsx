import { motion } from "framer-motion";
import {
  FaPiggyBank,
  FaChartLine,
  FaWallet,
  FaLightbulb,
} from "react-icons/fa";

const FinanceTips = () => {
  const tips = [
    {
      icon: <FaPiggyBank />,
      title: "Save Smartly",
      description:
        "Set aside a portion of your income each month and watch your savings grow steadily.",
    },
    {
      icon: <FaChartLine />,
      title: "Track Your Spending",
      description:
        "Monitor your daily expenses and categorize them for better budgeting decisions.",
    },
    {
      icon: <FaWallet />,
      title: "Manage Your Budget",
      description:
        "Create monthly budgets and stick to them to avoid overspending.",
    },
    {
      icon: <FaLightbulb />,
      title: "Plan for Goals",
      description:
        "Set financial goals and plan systematically to achieve them on time.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-5 px-4">
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
              <span className="text-[#1F1F2E] dark:text-[#E5E7EB]">Finance</span>{" "}
              Tips
            </h2>
            {/* line  */}
            <div className="h-1 w-30 mt-2 rounded-full bg-gradient-to-r from-[#632EE3] to-[#4CB5AE]"></div>
          </div>
        </div>
        {/* Description  */}
        <p className="mt-4 text-[#6B6B82] dark:text-gray-400 max-w-sm sm:max-w-2xl mx-auto">
         Quick actionable tips to manage your money, save more, and plan
          effectively for the future.
        </p>
      </motion.div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/90 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-10 sm:p-8 border border-[#E2E0F5] dark:border-white/10 shadow-lg flex flex-col items-center text-center"
          >
            <div className="text-[#632EE3] dark:text-[#3bdbd1] text-4xl mb-4">
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
