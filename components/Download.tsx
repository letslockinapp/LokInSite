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

// Platform Logo Components
const WindowsLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.35"/>
  </svg>
);

const AppleLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
);

const LinuxLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 0C8.9985 0 6.5825 2.416 6.5825 5.4185c0 1.1315.3455 2.1835.935 3.0555-.1085.193-.218.3895-.3285.5875-.5375 1.128-.82 2.3385-.7975 3.5785.0415.966.2675 1.9215.676 2.7935-.142.2315-.2575.4765-.3445.7315-.318.936-.3835 1.9355-.1855 2.8895.198.9545.629 1.8655 1.27 2.6275.6405.7625 1.485 1.347 2.457 1.697 1.2535.4515 2.637.518 4.0065.192 1.3695-.326 2.6555-.991 3.701-1.913.5235-.461.9725-1.006 1.3125-1.621.34-.615.5615-1.295.642-1.999.0805-.704.0255-1.427-.167-2.116-.1925-.689-.525-1.346-.9745-1.916-.4495-.57-1.022-1.054-1.6765-1.417-.1335-.074-.271-.143-.4095-.208-.1385-.065-.28-.126-.4225-.183-.049-1.2345-.3955-2.447-.989-3.5295-.594-1.0825-1.431-2.021-2.445-2.7345.5895-.873.935-1.925.935-3.0555 0-3.0025-2.416-5.4185-5.4185-5.4185zm0 1.3925c2.2445 0 4.026 1.7815 4.026 4.026 0 .887-.288 1.707-.774 2.373-.156-.096-.315-.188-.478-.275-1.094-.584-2.316-.896-3.548-.896-1.232 0-2.454.312-3.548.896-.163.087-.322.179-.478.275-.486-.666-.774-1.486-.774-2.373 0-2.2445 1.7815-4.026 4.026-4.026zm-2.334 5.0995c.866-.463 1.836-.709 2.822-.709.986 0 1.956.246 2.822.709.866.463 1.594 1.13 2.102 1.921.508.791.801 1.689.848 2.616.047.927-.142 1.856-.548 2.698-.406.842-1.02 1.576-1.776 2.13-.756.554-1.641.918-2.576 1.057-.935.139-1.898.051-2.799-.252-.901-.303-1.713-.815-2.362-1.485-.649-.67-1.115-1.48-1.355-2.364-.24-.884-.251-1.82-.032-2.724.219-.904.652-1.751 1.259-2.464.607-.713 1.371-1.27 2.237-1.62.866-.35 1.817-.513 2.77-.479-.953.034-1.904.197-2.77.479-.866.35-1.63.907-2.237 1.62-.607.713-1.04 1.56-1.259 2.464-.219.904-.208 1.84.032 2.724.24.884.706 1.694 1.355 2.364.649.67 1.461 1.182 2.362 1.485.901.303 1.864.391 2.799.252.935-.139 1.82-.503 2.576-1.057.756-.554 1.37-1.288 1.776-2.13.406-.842.595-1.771.548-2.698-.047-.927-.34-1.825-.848-2.616-.508-.791-1.236-1.458-2.102-1.921zm.333 2.0355c.5225 0 .9455.423.9455.9455s-.423.9455-.9455.9455-.9455-.423-.9455-.9455.423-.9455.9455-.9455zm4 0c.5225 0 .9455.423.9455.9455s-.423.9455-.9455.9455-.9455-.423-.9455-.9455.423-.9455.9455-.9455z"/>
  </svg>
);

const platformInfo = {
  windows: {
    name: 'Windows',
    Icon: WindowsLogo,
    url: "https://github.com/letslockinapp/download/releases/download/public/LokinWindows.exe",
    filename: 'LokIn-Setup-Windows.exe',
  },
  macos: {
    name: 'macOS',
    Icon: AppleLogo,
    url: "https://github.com/letslockinapp/download/releases/download/public/LokinMac.dmg",
    filename: 'LokIn-Setup-macOS.dmg',
  },
  linux: {
    name: 'Linux',
    Icon: LinuxLogo,
    url: "https://github.com/letslockinapp/download/releases/download/public/lokin-arm64-linux.AppImage",
    filename: 'LokIn-Setup-Linux.AppImage',
  },
  unknown: {
    name: 'Desktop',
    Icon: () => <span className="text-4xl">💻</span>,
    url: '#',
    filename: 'LokIn-Setup.exe',
  },
};

// Check if File System Access API is supported
function isFileSystemAccessSupported(): boolean {
  return 'showSaveFilePicker' in window;
}

// Download handler function
async function handleDownload(platform: Platform, event: React.MouseEvent) {
  event.preventDefault();
  
  const platformData = platformInfo[platform];
  const downloadUrl = platformData.url;
  
  if (!downloadUrl || downloadUrl === '#') {
    console.warn(`Download URL not set for ${platform}`);
    return;
  }

  // Directly redirect to the download URL
  window.location.href = downloadUrl;
}

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

  const iosUrl = "https://testflight.apple.com/join/DUdvbQWB";

  return (
    <section id="download" ref={ref} className="py-20 px-4 bg-[#232634]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            Ready to lock in?
          </h2>
          <p className="text-xl text-gray-400">
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
          <motion.button
            onClick={(e) => handleDownload(platform, e)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block bg-purple-600 text-white px-12 py-6 rounded-2xl text-2xl font-bold shadow-2xl hover:shadow-purple-500/50 transition-shadow mx-auto max-w-md text-center w-full cursor-pointer"
          >
            <div className="flex items-center justify-center gap-3">
              <currentPlatform.Icon className="w-8 h-8" />
              <span>Download for {currentPlatform.name}</span>
            </div>
          </motion.button>
        </motion.div>

        {/* Other Platforms */}
        {otherPlatforms.length > 0 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-center text-gray-400 mb-4 text-sm">
              Or download for:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {otherPlatforms.map(([key, info]) => (
                <motion.button
                  key={key}
                  onClick={(e) => handleDownload(key as Platform, e)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 text-purple-400 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-500 cursor-pointer flex items-center"
                >
                  <info.Icon className="w-5 h-5 mr-2" />
                  {info.name}
                </motion.button>
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
          <div className="inline-block bg-gray-800 rounded-2xl p-8 shadow-xl">
            <p className="text-lg font-semibold text-gray-200 mb-4">
              Lock in on mobile too
            </p>
            <motion.a
              href={iosUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-shadow"
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

      </div>
    </section>
  );
}
