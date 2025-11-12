'use client';

import { motion } from 'framer-motion';

const TimeWasted = () => {
  const hoursPerDay = 5;
  const daysPerYear = 365;
  const totalHoursPerYear = hoursPerDay * daysPerYear;
  const totalDaysPerYear = totalHoursPerYear / 24;

  return (
    <section id="timewasted" className="py-20 bg-[#232634] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-purple-500"
        >
          Time Spent on Your Phone
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-8 rounded-lg shadow-xl"
        >
          <p className="text-xl mb-4">
            Considering the average person spends around <span className="text-purple-400 font-bold">{hoursPerDay} hours</span> on their phone each day...
          </p>
          <p className="text-3xl font-bold text-red-400">
            That&apos;s approximately <span className="text-red-500">{totalHoursPerYear} hours</span> or <span className="text-red-500">{totalDaysPerYear.toFixed(1)} days</span> wasted per person each year!
          </p>
          <p className="text-lg mt-4 text-gray-300">
            Imagine what you could achieve with an extra {totalDaysPerYear.toFixed(1)} days a year.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TimeWasted;
