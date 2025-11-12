'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const facts = [
  {
    id: 1,
    text: 'Teens who spend more than two hours a day scrolling on phones double their risk of anxiety and quadruple their risk of depression.',
    source: 'economictimes.com',
  },
  {
    id: 2,
    text: '37% of adults globally feel addicted to doomscrolling.',
    source: 'McAfee Study, 2023',
  },
  {
    id: 3,
    text: 'Adolescents engaging in over 5 hours of doomscrolling face a 258% higher risk of long-term psychiatric vulnerabilities.',
    source: 'pumrj.com',
  },
  {
    id: 4,
    text: 'Doomscrolling before bedtime can disrupt sleep by suppressing melatonin production.',
    source: 'mayoclinic.org',
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
    <section id="scarescreens" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 text-purple-500">The Truth About Screen Time</h2>
        <div className="relative h-48">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={facts[index].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col justify-center items-center"
            >
              <p className="text-2xl font-semibold">"{facts[index].text}"</p>
              <p className="text-md text-gray-400 mt-4">- {facts[index].source}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ScareScreens;
