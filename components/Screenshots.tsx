'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Screenshots() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            See it in action
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Clean. Simple. Beautiful. Everything you need, nothing you don&rsquo;t.
          </p>
        </motion.div>

        {/* Desktop App Screenshot */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-200">
            Desktop App - Your Focus Fortress
          </h3>
          <motion.div
            whileHover={{ scale: 1.02, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-gray-700 rounded-2xl p-1 shadow-2xl mx-auto max-w-4xl"
          >
            <div className="bg-gray-900 rounded-xl p-8 relative overflow-hidden">
              {/* Window controls */}
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Placeholder content */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-white text-4xl font-bold">25:00</div>
                  <div className="text-purple-300 text-sm">LOCKED IN MODE</div>
                </div>

                <div className="bg-purple-600/30 rounded-lg p-4 backdrop-blur">
                  <div className="h-2 bg-purple-400 rounded-full w-3/4" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-purple-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-1">🔥</div>
                    <div className="text-purple-200 text-xs">7 day streak</div>
                  </div>
                  <div className="bg-pink-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-1">⏰</div>
                    <div className="text-pink-200 text-xs">12h focused</div>
                  </div>
                  <div className="bg-indigo-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-1">🎯</div>
                    <div className="text-indigo-200 text-xs">42 goals hit</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold">
                    LOCK IN
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile App Screenshot */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 50 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-200">
            Mobile App - Lock in on the go
          </h3>
          <motion.div
            whileHover={{ scale: 1.05, rotateZ: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-gray-700 rounded-[3rem] p-1 shadow-2xl mx-auto max-w-sm"
          >
            <div className="bg-gray-900 rounded-[2.5rem] p-6 relative overflow-hidden">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl" />

              {/* Placeholder content */}
              <div className="mt-8 space-y-6">
                <div className="text-center">
                  <div className="text-white text-5xl font-bold mb-2">15:30</div>
                  <div className="text-purple-300 text-sm">Deep Work Session</div>
                </div>

                <div className="relative h-4 bg-purple-900/30 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-purple-600 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>

                <div className="space-y-3">
                  <div className="bg-purple-600/20 backdrop-blur rounded-2xl p-4 flex items-center">
                    <div className="text-3xl mr-3">📱</div>
                    <div className="flex-1">
                      <div className="text-white text-sm font-semibold">Social Media</div>
                      <div className="text-purple-300 text-xs">BLOCKED</div>
                    </div>
                    <div className="text-2xl">🚫</div>
                  </div>

                  <div className="bg-pink-600/20 backdrop-blur rounded-2xl p-4 flex items-center">
                    <div className="text-3xl mr-3">🎮</div>
                    <div className="flex-1">
                      <div className="text-white text-sm font-semibold">Games</div>
                      <div className="text-pink-300 text-xs">BLOCKED</div>
                    </div>
                    <div className="text-2xl">🚫</div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <div className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold text-sm">
                    STAY LOCKED IN
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
