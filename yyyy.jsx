import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaPlusCircle,
  FaChartLine,
  FaUserCog,
  FaShieldAlt,
  FaCheckCircle,
  FaWallet,
  FaClock,
  FaMoon,
} from "react-icons/fa";

const steps = [
  {
    title: "Create Account",
    icon: <FaUserPlus />,
    desc: "Sign up securely with email or Google authentication.",
  },
  {
    title: "Add Transactions",
    icon: <FaPlusCircle />,
    desc: "Record income & expenses with categories and dates.",
  },
  {
    title: "View Insights",
    icon: <FaChartLine />,
    desc: "Analyze spending with charts and reports.",
  },
  {
    title: "Manage Profile",
    icon: <FaUserCog />,
    desc: "Control preferences, themes, and account info.",
  },
];

const features = [
  {
    icon: <FaWallet />,
    title: "Smart Budget Tracking",
    desc: "Understand where your money goes every month.",
  },
  {
    icon: <FaClock />,
    title: "Real-time Updates",
    desc: "Instant transaction updates with smooth UI.",
  },
  {
    icon: <FaMoon />,
    title: "Dark & Light Mode",
    desc: "Switch themes anytime for comfortable usage.",
  },
];

const faqs = [
  {
    q: "Is FinEase free to use?",
    a: "Yes, FinEase is completely free for personal finance tracking.",
  },
  {
    q: "Is my financial data safe?",
    a: "Absolutely. We use Firebase authentication and JWT-secured APIs.",
  },
  {
    q: "Can I access FinEase from mobile?",
    a: "Yes, FinEase is fully responsive on all devices.",
  },
];

const UserGuide = () => {
  return (
    <div className="min-h-screen bg-[#F8F8FB] dark:bg-[#0F1025] px-4 py-16 transition-colors">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl font-bold text-[#1F1F2E] dark:text-white">
            Getting Started with{" "}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] bg-clip-text text-transparent">
              FinEase
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-[#6B6B82] dark:text-gray-400">
            Take full control of your income and expenses with a clean,
            modern, and secure finance management experience.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-28">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white/90 dark:bg-white/5 backdrop-blur
              p-6 rounded-xl border border-[#E2E0F5] dark:border-white/10
              shadow-[0_10px_30px_rgba(99,46,227,0.1)] text-center"
            >
              <div className="text-3xl text-[#632EE3] mb-4 mx-auto">
                {step.icon}
              </div>
              <h3 className="font-semibold text-[#1F1F2E] dark:text-white">
                {step.title}
              </h3>
              <p className="text-sm mt-2 text-[#6B6B82] dark:text-gray-400">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FEATURES */}
        <div className="mb-28">
          <h2 className="text-3xl font-bold text-center text-[#1F1F2E] dark:text-white">
            Powerful Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white/90 dark:bg-white/5 backdrop-blur
                p-7 rounded-xl border border-[#E2E0F5] dark:border-white/10"
              >
                <div className="text-3xl text-[#4CB5AE] mb-4">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-[#1F1F2E] dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-[#6B6B82] dark:text-gray-400">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECURITY */}
        <div className="bg-gradient-to-r from-[#632EE3] to-[#4CB5AE]
          rounded-xl p-10 text-white shadow-xl mb-28"
        >
          <FaShieldAlt className="text-4xl mb-4" />
          <h3 className="text-3xl font-semibold">Security You Can Trust</h3>
          <p className="mt-3 max-w-2xl text-white/90">
            FinEase ensures your financial data is protected using industry-standard
            authentication, encrypted APIs, and secure database access.
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-28">
          <h2 className="text-3xl font-bold text-center text-[#1F1F2E] dark:text-white">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto mt-10 space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                className="bg-white/90 dark:bg-white/5 rounded-xl p-5
                border border-[#E2E0F5] dark:border-white/10"
              >
                <summary className="cursor-pointer font-medium text-[#1F1F2E] dark:text-white">
                  {faq.q}
                </summary>
                <p className="mt-2 text-[#6B6B82] dark:text-gray-400">
                  {faq.a}
                </p>
              </motion.details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/register"
            className="inline-block px-12 py-4 rounded-xl font-semibold text-white
            bg-gradient-to-r from-[#632EE3] to-[#4CB5AE]
            shadow-[0_15px_40px_rgba(99,46,227,0.25)]
            hover:opacity-90 transition"
          >
            Start Using FinEase Today
          </a>
        </div>

      </div>
    </div>
  );
};

export default UserGuide;
