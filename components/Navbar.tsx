'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md rounded-2xl shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src="/logo.jpg"
                alt="LokIn Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </motion.div>
            <motion.span
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              lokin.
            </motion.span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <motion.button
              onClick={() => scrollToSection('download')}
              className="text-gray-300 hover:text-purple-600 font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Downloads
            </motion.button>

            <Link href="/blog">
              <motion.span
                className="text-gray-300 hover:text-purple-600 font-medium transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Blog
              </motion.span>
            </Link>

            <motion.button
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-purple-600 font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Features
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
