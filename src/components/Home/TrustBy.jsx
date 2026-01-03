import { motion } from "framer-motion";
import { FaLock, FaShieldAlt, FaUserCheck, FaServer } from "react-icons/fa";

const TrustBy = () => {
  const features = [
    {
      icon: <FaLock />,
      title: "Secure Login",
      description:
        "Your account is protected with Firebase Authentication and password encryption.",
      color: "from-[#632EE3] to-[#4CB5AE]",
    },
    {
      icon: <FaShieldAlt />,
      title: "JWT-Secured APIs",
      description:
        "All API requests are validated with JWT tokens ensuring secure data transfer.",
      color: "from-[#E14D2A] to-[#EEA83E]",
    },
    {
      icon: <FaUserCheck />,
      title: "Privacy First",
      description:
        "Your personal and financial data is strictly private and never shared.",
      color: "from-[#FF6A3D] to-[#FFB86C]",
    },
    {
      icon: <FaServer />,
      title: "Encrypted Database",
      description:
        "All transactions and data are encrypted and securely stored in MongoDB.",
      color: "from-[#22C55E] to-[#4CB5AE]",
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto py-28 px-4">
      {/* Floating Background Shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-[#632EE3]/20 to-[#4CB5AE]/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-16 w-96 h-96 bg-gradient-to-r from-[#E14D2A]/20 to-[#EEA83E]/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F2E] dark:text-white">
          Your Security, Our Priority
        </h2>
        <p className="mt-4 text-[#6B6B82] dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
          At FinEase, we ensure your financial data is always protected. Our systems follow
          strict security standards with industry-grade encryption and authentication.
        </p>
      </motion.div>

      {/* Security Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white/90 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-[#E2E0F5] dark:border-white/10 shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform"
          >
            {/* Icon with circular gradient bg */}
            <div className={`w-20 h-20 mb-5 rounded-full flex items-center justify-center bg-gradient-to-br ${feature.color} text-white text-3xl shadow-lg`}>
              {feature.icon}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[#1F1F2E] dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-[#6B6B82] dark:text-gray-400 text-base md:text-lg">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrustBy;
