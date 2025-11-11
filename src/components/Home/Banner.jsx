import { Link } from "react-router";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#632EE3]/10 to-[#4CB5AE]/10 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        {/* ===== Left Text Section ===== */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1F1F2E] mb-5">
            Take Control of Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#4CB5AE]">
              Financial Future
            </span>
          </h1>
          <p className="text-[#6B6B82] text-base md:text-lg max-w-lg mx-auto md:mx-0 mb-8">
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
              className="px-6 py-3 rounded-lg font-semibold border border-[#632EE3] text-[#632EE3] hover:bg-[#632EE3] hover:text-white transition-all"
            >
              View Reports
            </Link>
          </div>
        </motion.div>

        {/* ===== Right Illustration ===== */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <img
            src="https://i.ibb.co.com/hxDk5MFS/finans-5.png"
            alt="Finance Illustration"
            className="w-full rounded-2xl max-w-md mx-auto drop-shadow-lg"
          />
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r from-[#632EE3]/20 to-[#4CB5AE]/20 blur-3xl rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;


