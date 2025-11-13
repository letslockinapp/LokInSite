'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const facts = [
  {
    id: 1,
    text: 'Teens who spend more than two hours a day scrolling on phones double their risk of anxiety and quadruple their risk of depression.',
    source: 'economictimes.com',
    icon: '😰',
    label: 'Anxiety',
  },
  {
    id: 2,
    text: '37% of adults globally feel addicted to doomscrolling.',
    source: 'McAfee Study, 2023',
    icon: '📱',
    label: 'Addiction',
  },
  {
    id: 3,
    text: 'Adolescents engaging in over 5 hours of doomscrolling face a 258% higher risk of long-term psychiatric vulnerabilities.',
    source: 'pumrj.com',
    icon: '🧠',
    label: 'Mental Health',
  },
  {
    id: 4,
    text: 'Doomscrolling before bedtime can disrupt sleep by suppressing melatonin production.',
    source: 'mayoclinic.org',
    icon: '😴',
    label: 'Sleep',
  },
];

const ScareScreens = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % facts.length);
    }, 5000); // Change fact every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="scarescreens" className="py-20 bg-[#292c3c] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-purple-500 text-center">The Truth About Screen Time</h2>

        <div className="relative min-h-[600px]">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              x1="15%"
              y1="25%"
              x2="50%"
              y2="45%"
              stroke="rgb(75, 85, 99)"
              strokeWidth="2"
              opacity="0.3"
            />
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              x1="75%"
              y1="20%"
              x2="50%"
              y2="45%"
              stroke="rgb(75, 85, 99)"
              strokeWidth="2"
              opacity="0.3"
            />
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              x1="25%"
              y1="70%"
              x2="50%"
              y2="45%"
              stroke="rgb(75, 85, 99)"
              strokeWidth="2"
              opacity="0.3"
            />
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              x1="80%"
              y1="65%"
              x2="50%"
              y2="45%"
              stroke="rgb(75, 85, 99)"
              strokeWidth="2"
              opacity="0.3"
            />
          </svg>

          {/* Floating Fact Nodes */}
          {facts.map((fact, i) => {
            const positions = [
              { top: '15%', left: '5%' },
              { top: '10%', right: '15%' },
              { bottom: '20%', left: '15%' },
              { bottom: '25%', right: '10%' },
            ];
            const isHighlighted = index === i;

            return (
              <motion.div
                key={fact.id}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="absolute z-10"
                style={positions[i]}
              >
                <motion.div
                  animate={{
                    scale: isHighlighted ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl ${
                    isHighlighted
                      ? 'bg-gray-800/80 border-2 border-yellow-500'
                      : 'bg-gray-800/40'
                  } backdrop-blur-sm relative`}
                >
                  {/* Star indicator */}
                  {isHighlighted && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="absolute -top-3 -right-3 text-yellow-400 text-2xl z-20"
                    >
                      ⭐
                    </motion.div>
                  )}

                  {/* Icon Circle */}
                  <div className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0 shadow-lg">
                    {fact.icon}
                  </div>

                  {/* Text */}
                  <div className="max-w-[200px]">
                    <p className="font-bold text-white text-sm">{fact.label}</p>
                    <p className="text-gray-400 text-xs">{fact.source}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Center Fact Display */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-4">
            <div className="relative h-40">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={facts[index].id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col justify-center items-center"
                >
                  <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-gray-700">
                    <p className="text-lg font-semibold text-center">&quot;{facts[index].text}&quot;</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScareScreens;
