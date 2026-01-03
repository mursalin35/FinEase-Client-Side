    {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <motion.img
            src={banner}
            alt="Finance Dashboard Preview"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-full max-w-md rounded-3xl shadow-2xl
            dark:shadow-[0_0_40px_rgba(99,46,227,0.35)]"
          />

          {/* Glow Ring */}
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#632EE3]/30 to-[#4CB5AE]/30 blur-3xl" />
        </motion.div>