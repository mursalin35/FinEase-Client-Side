import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaPlusCircle,
  FaChartLine,
  FaUserCog,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Create Your Account",
    desc: "Sign up securely using email or Google. Your account is protected with Firebase authentication.",
    color: "text-[#632EE3]",
  },
  {
    icon: <FaPlusCircle />,
    title: "Add Income & Expenses",
    desc: "Track daily income and expenses by category, date, and amount with a clean interface.",
    color: "text-[#4CB5AE]",
  },
  {
    icon: <FaChartLine />,
    title: "Analyze Reports",
    desc: "Understand your spending habits through interactive monthly and category-based charts.",
    color: "text-[#632EE3]",
  },
  {
    icon: <FaUserCog />,
    title: "Manage Profile",
    desc: "Update your profile details, switch theme modes, and manage your preferences easily.",
    color: "text-[#4CB5AE]",
  },
];

const UserGuide = () => {
  return (
    <div className="min-h-screen px-4 py-14">
      <div className="max-w-7xl mx-auto">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1F1F2E] dark:text-white">
            Getting Started with{" "}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] bg-clip-text text-transparent">
              FinEase
            </span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-[#6B6B82] dark:text-gray-400">
            A simple step-by-step guide to help you manage income, control
            expenses, and stay financially confident.
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/90 dark:bg-white/5 backdrop-blur
              rounded-xl p-7 border border-[#E2E0F5] dark:border-white/10
              shadow-[0_10px_30px_rgba(99,46,227,0.1)]"
            >
              <div className={`text-3xl mb-4 ${step.color}`}>{step.icon}</div>
              <h3 className="text-xl font-semibold text-[#1F1F2E] dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-[#6B6B82] dark:text-gray-400">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* WHY FINEASE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 "
        >
          <div
            className="bg-gradient-to-r from-[#632EE3] to-[#4CB5AE]
            rounded-xl p-8 text-white shadow-lg"
          >
            <FaShieldAlt className="text-4xl mb-4" />
            <h3 className="text-2xl font-semibold">Security First</h3>
            <p className="mt-3 max-w-3xl text-white/90">
              Your data is protected using Firebase authentication, JWT-secured
              APIs, encrypted database access, and strict role-based
              authorization to ensure complete privacy.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mt-24"
        >
          <Link
            to="/add-transaction"
            className="inline-block px-10 py-4 rounded-xl font-semibold text-white
            bg-gradient-to-r from-[#632EE3] to-[#4CB5AE]
            shadow-[0_15px_40px_rgba(99,46,227,0.25)]
            hover:opacity-90 transition"
          >
            Start Your Financial Journey
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default UserGuide;
