'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

type Platform = 'windows' | 'macos' | 'linux' | 'unknown';

function detectPlatform(): Platform {
  if (typeof window === 'undefined') return 'unknown';

  const userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.indexOf('win') !== -1) return 'windows';
  if (userAgent.indexOf('mac') !== -1) return 'macos';
  if (userAgent.indexOf('linux') !== -1) return 'linux';

  return 'unknown';
}

const platformInfo = {
  windows: {
    name: 'Windows',
    icon: '🪟',
    url: process.env.NEXT_PUBLIC_DOWNLOAD_WINDOWS || '#',
  },
  macos: {
    name: 'macOS',
    icon: '🍎',
    url: process.env.NEXT_PUBLIC_DOWNLOAD_MACOS || '#',
  },
  linux: {
    name: 'Linux',
    icon: '🐧',
    url: process.env.NEXT_PUBLIC_DOWNLOAD_LINUX || '#',
  },
  unknown: {
    name: 'Desktop',
    icon: '💻',
    url: '#',
  },
};

export default function Download() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [platform, setPlatform] = useState<Platform>('unknown');

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const currentPlatform = platformInfo[platform];
  const otherPlatforms = Object.entries(platformInfo).filter(
    ([key]) => key !== platform && key !== 'unknown'
  );

  const iosUrl = process.env.NEXT_PUBLIC_DOWNLOAD_IOS || '#';

  return (
    <section id="download" ref={ref} className="py-20 px-4 bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ready to lock in?
          </h2>
          <p className="text-xl text-gray-600">
            Download LokIn and start crushing your goals today. No cap.
          </p>
        </motion.div>

        {/* Primary Download Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <motion.a
            href={currentPlatform.url}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-2xl text-2xl font-bold shadow-2xl hover:shadow-purple-500/50 transition-shadow mx-auto max-w-md text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-4xl">{currentPlatform.icon}</span>
              <span>Download for {currentPlatform.name}</span>
            </div>
          </motion.a>
        </motion.div>

        {/* Other Platforms */}
        {otherPlatforms.length > 0 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-center text-gray-600 mb-4 text-sm">
              Or download for:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {otherPlatforms.map(([key, info]) => (
                <motion.a
                  key={key}
                  href={info.url}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-200"
                >
                  <span className="mr-2">{info.icon}</span>
                  {info.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Mobile Download */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-white rounded-2xl p-8 shadow-xl">
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Lock in on mobile too
            </p>
            <motion.a
              href={iosUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-shadow"
            >
              <span className="text-2xl">📱</span>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </motion.a>
            <p className="text-xs text-gray-500 mt-4">
              Android coming soon
            </p>
          </div>
        </motion.div>

        {/* Fun stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Available to help you lock in</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Free to download</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">0</div>
            <div className="text-sm text-gray-600">Excuses accepted</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
