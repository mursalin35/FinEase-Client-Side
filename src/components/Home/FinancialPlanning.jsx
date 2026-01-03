import { motion } from "framer-motion";

const FinancialPlanning = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-5">
      {/* Section Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#632ee3] to-[#00b8b0] bg-clip-text text-transparent">
          <span className="text-[#1F1F2E] dark:text-[#E5E7EB]">
            Financial
          </span>{" "}
          Planning
        </h2>
        <div className="h-1 w-35 mt-2 rounded-full bg-gradient-to-r from-[#632EE3] to-[#4CB5AE]"></div>
        <p className="mt-4 text-[#6B6B82] dark:text-gray-400 max-w-2xl ">
          Financial planning helps you manage money wisely, reduce stress, and
          build a secure future with confident decisions.
        </p>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-6 bg-white dark:bg-[#1E1E2F] backdrop-blur border border-[#d2cef8] dark:border-[#3D3A64] shadow-[0_4px_20px_rgba(99,46,227,0.1)] rounded-xl"
      >
        <p className="text-[#6B6B82] dark:text-[#B0B3C6] leading-relaxed text-lg">
          Financial planning helps you set clear goals, reduce financial stress,
          and build long-term stability. By understanding your spending habits
          and setting realistic savings targets, you can ensure a more secure
          and confident financial future.
        </p>
      </motion.div>
    </section>
  );
};

export default FinancialPlanning;
