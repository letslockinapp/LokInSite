'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'Focus Timer',
    description: 'Pomodoro? Custom sessions? We got you. Lock in for 25 mins or go full beast mode for hours.',
    emoji: '⏰',
  },
  {
    title: 'Distraction Blocking',
    description: 'TikTok? Instagram? Twitter? Not today. Block those time-wasters and actually get stuff done.',
    emoji: '🚫',
  },
  {
    title: 'Goal Tracking',
    description: 'Build streaks. Track wins. Watch yourself become that person who actually does what they say.',
    emoji: '🎯',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.2,
      }}
      whileHover={{
        scale: 1.05,
        rotate: [-1, 1, -1, 0],
        transition: { duration: 0.3 }
      }}
      className="relative bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-gray-700"
    >
      <motion.div
        className="text-6xl mb-4"
        animate={{
          rotate: [0, -10, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        {feature.emoji}
      </motion.div>

      <h3 className="text-2xl font-bold mb-3 text-gray-100">
        {feature.title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-[#232634]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            Features to keep you focused.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to stop procrastinating and start absolutely crushing it
          </p>
        </motion.div>

        {/* Block Screen Showcase - Mobile */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative flex-shrink-0"
              style={{ rotate: -5 }}
            >
              <Image
                src="/blocked.png"
                alt="LokIn Block Screen - Stay Focused"
                width={250}
                height={500}
                className="rounded-[2rem] shadow-2xl"
              />
            </motion.div>

            {/* Text */}
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-bold mb-4 text-white">
                Stay Focused, Stay Locked In
              </h3>
              <p className="text-lg text-gray-400">
                When you need to lock in, we block distractions at the system level. No escape, no excuses.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Block Screen Showcase - Desktop */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80, delay: 0.2 }}
          className="mt-20"
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-5xl mx-auto">
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative flex-shrink-0"
              style={{ rotate: 2 }}
            >
              <Image
                src="/blockedDesktop.png"
                alt="LokIn Desktop Block Screen"
                width={400}
                height={300}
                className="rounded-xl shadow-2xl"
              />
            </motion.div>

            {/* Text */}
            <div className="text-center md:text-right">
              <h3 className="text-4xl font-bold mb-4 text-white">
                Cross platform -  Sync your focus across devices
              </h3>
              <p className="text-lg text-gray-400">
                Whether you&apos;re on your phone or computer, we&apos;ve got your back. Lock in anywhere, anytime.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Leaderboard Showcase */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80, delay: 0.2 }}
          className="mt-20"
        >
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative flex-shrink-0"
              style={{ rotate: -5 }}
            >
              <Image
                src="/leaderboard.png"
                alt="LokIn Leaderboard - Stay Competitive"
                width={450}
                height={900}
                className="rounded-[2rem] shadow-2xl"
              />
            </motion.div>

            {/* Text */}
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-bold mb-4 text-white">
                Stay Competitive
              </h3>
              <p className="text-lg text-gray-400">
                Compete with friends and climb the ranks. Nothing motivates like seeing yourself at the top of the leaderboard.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
