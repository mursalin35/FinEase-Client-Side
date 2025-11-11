import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  // from-[#632ee3] via-[#7456f5] to-[#00b8b0]
  return (
    <footer className="relative mt-16 text-base-content overflow-hidden rounded-t-3xl shadow-lg">
      {/* ===== Gradient Background ===== */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#432c78] via-[#4126ba] to-[#088781] opacity-90 blur-[1px]"></div>
      <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-md"></div>

      {/* ===== Content ===== */}
      <div className="relative glass-card py-10 px-6 md:px-12 text-center md:text-left text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* ===== Brand Section ===== */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <img
                src="https://img.icons8.com/?size=100&id=mPGqFM7tLdfV&format=png&color=ffffff"
                alt="FinEase Logo"
                className="w-10 h-10 drop-shadow-lg"
              />
              <h2 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-200">
                FinEase
              </h2>
            </div>
            <p className="text-sm text-gray-100/90 leading-relaxed">
              FinEase helps you manage your income, expenses, and savings goals — 
              making personal finance simple, smart, and stress-free.
            </p>
          </div>

          {/* ===== Quick Links ===== */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-teal-100">Quick Links</h3>
            <ul className="space-y-2 opacity-90">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/add-transaction" className="hover:underline">Add Transaction</Link></li>
              <li><Link to="/my-transactions" className="hover:underline">My Transactions</Link></li>
              <li><Link to="/reports" className="hover:underline">Reports</Link></li>
            </ul>
          </div>

          {/* ===== Policies ===== */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-teal-100">Legal</h3>
            <ul className="space-y-2 opacity-90">
              <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/support" className="hover:underline">Support</Link></li>
            </ul>
          </div>

          {/* ===== Contact & Social ===== */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-teal-100">Contact Us</h3>
            <p className="text-sm text-gray-100 mb-3">
              ✉️ support@finease.com  
              <br /> 📞 +880 1234-567890
            </p>

            <div className="flex justify-center md:justify-start gap-3 mt-2">
              {[
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaLinkedinIn />, href: "#" },
                { icon: <FaGithub />, href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition transform text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Bottom Line ===== */}
        <div className="border-t border-white/30 mt-10 pt-5 text-sm text-gray-100/80 text-center">
          © {new Date().getFullYear()} <span className="font-semibold">FinEase</span> — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
