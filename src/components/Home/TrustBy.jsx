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
    <div className=" py-5 px-6 sm:px-11">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 "
      >
        <div className="flex justify-center">
          <div className=" flex flex-col items-start justify-center">
            {/* title  */}
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] bg-clip-text text-transparent">
              <span className="text-[#1F1F2E] dark:text-[#E5E7EB]">
                Your Security,
              </span>{" "}
              Our Priority
            </h2>
            {/* line  */}
            <div className="h-1 w-60 mt-2 rounded-full bg-gradient-to-r from-[#632EE3] to-[#4CB5AE]"></div>
          </div>
        </div>
        {/* Description  */}
        <p className="mt-4 text-[#6B6B82] dark:text-gray-400 max-w-sm sm:max-w-2xl mx-auto">
          At FinEase, we ensure your financial data is always protected. Our
          systems follow strict security standards with industry-grade
          encryption and authentication.
        </p>
      </motion.div>

      {/* Security Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white/90 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-[#E2E0F5] dark:border-white/10 shadow-lg flex flex-col items-center text-center hover:scale-101 hover:shadow-xl transition-transform"
          >
            {/* Icon with circular gradient bg */}
            <div
              className={`w-14 h-14 mb-5 rounded-full flex items-center justify-center bg-gradient-to-br ${feature.color} text-white text-3xl shadow-lg`}
            >
              {feature.icon}
            </div>

            <h3 className="text-2xl font-bold text-[#1F1F2E] dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-[#6B6B82] dark:text-gray-400 text-base ">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrustBy;
