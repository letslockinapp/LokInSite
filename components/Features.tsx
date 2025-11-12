'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
    <section id="features" className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            Features that hit different
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to stop procrastinating and start absolutely crushing it
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
