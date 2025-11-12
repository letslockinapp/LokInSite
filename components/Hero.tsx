'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative z-0 min-h-screen flex items-center justify-center overflow-hidden rounded-3xl">
      <div className="absolute inset-0 -z-10 hero-background" />
      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 max-w-7xl mx-auto py-20">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-8xl font-bold mb-6 text-white"
          >
            Time to Lock In.
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl lg:max-w-none mx-auto lg:mx-0"
          >
            Focus on what matters. Not what&apos;s meaningless.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-purple-700 transition-colors"
            >
              Download Now
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-gray-700 transition-colors border-2 border-gray-700"
            >
              See Features
            </motion.a>
          </motion.div>
        </div>

        {/* iPhone Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          className="lg:w-1/2 flex justify-center lg:justify-end"
        >
          <Image
            src="/iphoneVer.png" // Placeholder for iPhone image
            alt="iPhone Mockup"
            width={300}
            height={600}
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-purple-500"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
