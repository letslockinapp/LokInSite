'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Screenshots() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const [isDesktopPlaying, setIsDesktopPlaying] = useState(false);
  const [isMobilePlaying, setIsMobilePlaying] = useState(false);

  const toggleDesktopVideo = () => {
    if (desktopVideoRef.current) {
      if (isDesktopPlaying) {
        desktopVideoRef.current.pause();
      } else {
        desktopVideoRef.current.play();
      }
      setIsDesktopPlaying(!isDesktopPlaying);
    }
  };

  const toggleMobileVideo = () => {
    if (mobileVideoRef.current) {
      if (isMobilePlaying) {
        mobileVideoRef.current.pause();
      } else {
        mobileVideoRef.current.play();
      }
      setIsMobilePlaying(!isMobilePlaying);
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-[#292c3c]">
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
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative shadow-2xl mx-auto max-w-4xl cursor-pointer"
            onClick={toggleDesktopVideo}
          >
            <video
              ref={desktopVideoRef}
              src="/lokindesktop.mp4"
              loop
              muted
              playsInline
              className="rounded-2xl w-full h-auto"
            />
            {!isDesktopPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-purple-600 hover:bg-purple-700 rounded-full p-6 shadow-2xl transition-colors">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
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
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative shadow-2xl mx-auto max-w-4xl cursor-pointer"
            onClick={toggleMobileVideo}
          >
            <video
              ref={mobileVideoRef}
              src="/lokinmobile.mp4"
              loop
              muted
              playsInline
              className="rounded-[3rem] w-full h-auto"
            />
            {!isMobilePlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-purple-600 hover:bg-purple-700 rounded-full p-6 shadow-2xl transition-colors">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
