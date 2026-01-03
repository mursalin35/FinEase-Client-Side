import { Link } from "react-router";
import { motion } from "framer-motion";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#632EE3]/10 to-[#4CB5AE]/10 dark:from-[#1a1a1d]/80 dark:to-[#0d2e2c]/80 py-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left md:pl-6]"
        >
         <motion.span
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="inline-block mb-4 px-5 py-1.5 text-sm rounded-full
             bg-gradient-to-r from-[#632EE3]/30 to-[#4CB5AE]/30
             dark:from-[#1C1C28] dark:to-[#0D2E2C]
             text-[#632EE3] dark:text-[#4CB5AE]
             font-semibold tracking-wide shadow-sm"
>
  Fast • Smart • Reliable
</motion.span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1F1F2E] dark:text-gray-100 mb-5">
            Take Control of Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#4CB5AE]">
              Financial Future
            </span>
          </h1>
          <p className="text-[#6B6B82] dark:text-gray-300 text-base md:text-lg max-w-lg mx-auto md:mx-0 mb-8">
            Simplify your money management — track income, control expenses, and
            grow your savings effortlessly with FinEase.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/add-transaction"
              className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] hover:opacity-90 transition-all"
            >
              Get Started
            </Link>
            <Link
              to="/reports"
              className="px-6 py-3 rounded-lg font-semibold border border-[#632EE3] text-[#632EE3] hover:bg-[#632EE3] hover:text-white dark:border-[#4CB5AE] dark:text-[#4CB5AE] dark:hover:bg-[#4CB5AE] dark:hover:text-black transition-all"
            >
              View Reports
            </Link>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <motion.img
            src={banner}
            alt="Finance Illustration"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-full rounded-2xl max-w-md mx-auto drop-shadow-lg dark:drop-shadow-[0_0_25px_rgba(99,46,227,0.25)]"
          />
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r from-[#632EE3]/20 to-[#4CB5AE]/20 dark:from-[#632EE3]/30 dark:to-[#4CB5AE]/30 blur-3xl rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
