import { motion } from "framer-motion";

const BudgetingTips = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] bg-clip-text text-transparent">
          <span className="text-[#1F1F2E] dark:text-[#E5E7EB]">Budgeting</span> Tips
        </h2>
        <div className="h-1 w-32 mt-2 rounded-full bg-gradient-to-r from-[#632EE3] to-[#4CB5AE]"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-6 bg-white dark:bg-[#1E1E2F] backdrop-blur border border-[#d2cef8] dark:border-[#3D3A64] shadow-[0_4px_20px_rgba(99,46,227,0.1)] rounded-xl"
        >
          <h4 className="font-semibold text-lg mb-2 text-[#2E1F47] dark:text-[#EDEBFF]">
            Track Your Spending
          </h4>
          <p className="text-[#6B6B82] dark:text-[#B0B3C6] leading-relaxed">
            Monitor daily expenses to identify unnecessary spending and improve
            budgeting discipline.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="p-6 bg-white dark:bg-[#1E1E2F] backdrop-blur border border-[#d2cef8] dark:border-[#3D3A64] shadow-[0_4px_20px_rgba(99,46,227,0.1)] rounded-xl"
        >
          <h4 className="font-semibold text-lg mb-2 text-[#2E1F47] dark:text-[#EDEBFF]">
            Follow The 50/30/20 Rule
          </h4>
          <p className="text-[#6B6B82] dark:text-[#B0B3C6] leading-relaxed">
            Allocate 50% to needs, 30% to wants, and save the remaining 20% for
            future goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BudgetingTips;
