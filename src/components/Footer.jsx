const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">

        {/* Logo + Name */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://img.icons8.com/?size=100&id=mPGqFM7tLdfV&format=png&color=000000"
              alt="FinEase Logo"
              className="w-10 h-10 rounded"
            />
            <h2 className="text-xl font-bold text-white">FinEase</h2>
          </div>
          <p className="text-gray-400 text-sm">
            Personal Finance Management for smarter financial decisions.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <span className="text-gray-400">support@finease.com</span></li>
            <li>Phone: <span className="text-gray-400">+880 1234-567890</span></li>
            <li>Address: <span className="text-gray-400">Dhaka, Bangladesh</span></li>
          </ul>
        </div>

        {/* Terms */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Bottom Part */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} FinEase — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
