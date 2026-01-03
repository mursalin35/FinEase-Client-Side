import { motion } from "framer-motion";
import { FaChartLine, FaPlusCircle, FaWallet } from "react-icons/fa";
import banner from "../../assets/aboutBanner.png";
import { Link } from "react-router";

const features = [
  {
    icon: <FaChartLine />,
    title: "Smart Reports",
    desc: "Visual, interactive insights of your income and expenses with charts and summaries.",
  },
  {
    icon: <FaPlusCircle />,
    title: "Track Transactions",
    desc: "Add, update, and manage all your income & expenses easily.",
  },
  {
    icon: <FaWallet />,
    title: "Budget Management",
    desc: "Set goals, track spending, and stay on top of your finances effortlessly.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto  px-6 sm:px-11 py-16">
      {/* HERO BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] rounded-3xl p-10 mb-20 flex flex-col md:flex-row items-center gap-8 text-white shadow-lg justify-between"
      >
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-5xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white">
              FinEase
            </span>
          </h1>
          <p className="text-lg md:text-lg mb-6">
            FinEase is a modern personal finance management app that helps you
            track, plan, and understand your financial life — secure, simple,
            and smart.
          </p>
          <Link
            to="/add-transaction"
            className="inline-block px-8 py-3 text-sm rounded-xl font-semibold text-white
              bg-white/20 backdrop-blur-sm shadow-lg hover:scale-103 transition-transform"
          >
            Get Started
          </Link>
        </div>

        <img
          src={banner}
          alt="Fintech Illustration"
          className="w-full md:w-2/5 h-60 object-cover rounded-xl shadow-xl"
        />
      </motion.div>

      {/* MISSION & VISION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-24 text-center"
      >
        <h2 className="text-4xl font-bold text-[#1F1F2E] dark:text-white mb-6">
          Our Mission & Vision
        </h2>
        <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
          <div className="bg-white/90 dark:bg-white/5 backdrop-blur rounded-xl p-8 border border-[#E2E0F5] dark:border-white/10 shadow-lg flex-1 hover:scale-101 transition-transform">
            <h3 className="text-2xl font-semibold text-[#632EE3] mb-4">
              Mission
            </h3>
            <p className="text-[#6B6B82] dark:text-gray-400">
              Empower users to take control of their finances, make smarter
              decisions, and achieve their financial goals with confidence.
            </p>
          </div>
          <div className="bg-white/90 dark:bg-white/5 backdrop-blur rounded-xl p-8 border border-[#E2E0F5] dark:border-white/10 shadow-lg flex-1 hover:scale-101 transition-transform">
            <h3 className="text-2xl font-semibold text-[#632EE3] mb-4">
              Vision
            </h3>
            <p className="text-[#6B6B82] dark:text-gray-400">
              A world where managing money is simple, transparent, and secure
              for everyone.
            </p>
          </div>
        </div>
      </motion.div>

      {/* FEATURES GRID */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="bg-white/90 dark:bg-white/5 backdrop-blur rounded-xl p-7 border border-[#E2E0F5] dark:border-white/10 shadow-[0_10px_30px_rgba(99,46,227,0.1)] text-center transition-transform hover:scale-101"
          >
            <div className="text-3xl text-[#632EE3] mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-[#1F1F2E] dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-[#6B6B82] dark:text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
