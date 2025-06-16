import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [search, setSearch] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Decorative background line */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 800 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 300 C 150 200, 350 400, 500 250 C 600 150, 700 350, 800 200"
            stroke="white"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="10 6"
          />
        </svg>
      </div>

      {/* Foreground Content */}
      <div className="z-10 w-full max-w-4xl text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Trade Crypto. <br className="hidden md:block" />
          Simple. Fast. Secure.
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Buy, sell and track your favorite coins in real-time — all from one
          clean and powerful platform.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link
            to="/register"
            className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-md text-lg font-semibold transition"
          >
            Get Started
          </Link>
          <Link
            to="/dashboard"
            className="border border-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-md text-lg font-semibold transition"
          >
            Explore Dashboard
          </Link>
        </motion.div>

        <motion.input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search coins, features, or help..."
          className="w-full max-w-md mx-auto p-3 rounded-md bg-gray-800 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        />
      </div>
    </section>
  );
};

export default Hero;
