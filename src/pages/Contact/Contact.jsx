import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send form data to backend/email service
    toast.success("Message sent successfully! 🎉");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto  px-6 sm:px-11 py-16">
      <Toaster position="top-right" />
      <div className="">
        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#1F1F2E] dark:text-white">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] bg-clip-text text-transparent">
              FinEase
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#6B6B82] dark:text-gray-400 max-w-3xl mx-auto">
            Have questions or want to get in touch? Fill out the form below or
            reach us via our contact info.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-white/90 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-10 shadow-[0_15px_40px_rgba(99,46,227,0.15)] border border-[#E2E0F5] dark:border-white/10 flex flex-col justify-between"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F2E] dark:text-white  ">
              Send a Message
            </h2>
            {/* Subtle description below button */}
            <p className="mt-2 md:mt-0  text-sm text-[#6B6B82] dark:text-gray-400">
              Thank you for reaching out! We value your message and will
              carefully review it. You can expect a response from our team
              within 24-48 hours. We look forward to assisting you!
            </p>
            <form className="flex flex-col gap-5 mt-7" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-2.5 sm:py-4 rounded-lg sm:rounded-xl border border-[#E2E0F5] dark:border-white/20 bg-white/90 dark:bg-[#1F1F2E]/60 text-[#1F1F2E] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#632EE3] transition placeholder:text-[#6B6B82] dark:placeholder:text-gray-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-2.5 sm:py-4 rounded-lg sm:rounded-xl border border-[#E2E0F5] dark:border-white/20 bg-white/90 dark:bg-[#1F1F2E]/60 text-[#1F1F2E] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#632EE3] transition placeholder:text-[#6B6B82] dark:placeholder:text-gray-400"
                required
              />

              {/* Subject Field */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="px-4 py-2.5 sm:py-4 rounded-lg sm:rounded-xl border border-[#E2E0F5] dark:border-white/20 bg-white/90 dark:bg-[#1F1F2E]/60 text-[#1F1F2E] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#632EE3] transition placeholder:text-[#6B6B82] dark:placeholder:text-gray-400"
                required
              />

              {/* Message Field */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="px-4 py-2.5 sm:py-4 rounded-lg sm:rounded-xl border border-[#E2E0F5] dark:border-white/20 bg-white/90 dark:bg-[#1F1F2E]/60 text-[#1F1F2E] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#632EE3] transition placeholder:text-[#6B6B82] dark:placeholder:text-gray-400 resize-none"
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 w-full md:w-auto mx-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#632EE3] to-[#4CB5AE] text-white font-semibold shadow-lg hover:scale-101 hover:shadow-xl transition-all cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col gap-6"
          >
            <h2 className="text-3xl font-bold text-[#1F1F2E] dark:text-white mb-6">
              Contact Info
            </h2>
            {[
              {
                icon: <FaMapMarkerAlt />,
                title: "Address",
                info: "Dhaka, Bangladesh",
              },
              {
                icon: <FaPhoneAlt />,
                title: "Phone",
                info: "+88 01860-231090",
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                info: "msmursalin35@gmail.com",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white/90 dark:bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#E2E0F5] dark:border-white/10 shadow-lg"
              >
                <div className="text-[#632EE3] text-2xl mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-[#1F1F2E] dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-[#6B6B82] dark:text-gray-400">
                    {item.info}
                  </p>
                </div>
              </div>
            ))}

            {/* Optional Google Map */}
            <div className="mt-8 w-full h-64 rounded-xl overflow-hidden shadow-lg border border-[#E2E0F5] dark:border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9025819739836!2d90.389567!3d23.750903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b0b0b0b0b1%3A0x1b2c3d4e5f6a7b8c!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
