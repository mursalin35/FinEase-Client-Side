import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router";

const FAQ = () => {
  const faqs = [
    {
      question: "Is my financial data secure?",
      answer: "Absolutely! All your data is protected using Firebase Authentication, JWT-secured APIs, and encrypted database access."
    },
    {
      question: "Can I reset my password?",
      answer: "Yes! You can reset your password anytime using the 'Forgot Password' option on the login page."
    },
    {
      question: "Can I track both income and expenses?",
      answer: "Yes, FinEase allows you to add, view, update, and delete both income and expense transactions."
    },
    {
      question: "Does FinEase support dark mode?",
      answer: "Absolutely! You can switch between dark and light themes seamlessly."
    },
    {
      question: "How quickly will I get support?",
      answer: "Our support team usually responds within 24-48 hours to assist you."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-[#6B6B82] dark:text-gray-400 max-w-2xl mx-auto">
          Have questions? We’ve got answers to help you navigate FinEase smoothly.
        </p>
      </motion.div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/90 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-[#E2E0F5] dark:border-white/10 shadow-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
            >
              <span className="text-lg md:text-xl font-medium text-[#1F1F2E] dark:text-white">
                {faq.question}
              </span>
              <span className="text-[#632EE3] dark:text-[#4CB5AE] text-xl">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-5 pt-0 text-[#6B6B82] dark:text-gray-400 text-base md:text-lg">
                {faq.answer}
              </div>
            )}
          </motion.div>
        ))}
      </div>

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
  );
};

export default FAQ;
