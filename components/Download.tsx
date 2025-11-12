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
    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.896-.12.169-.257.33-.35.51-.1.193-.17.4-.134 6.298.333 4.226 4.807 3.105 6.298 3.17 1.878.13 3.318.044 4.52 1.05 1.052.885 2.751 2.127 4.522 2.716.832.278 1.684.41 2.489.287.135.11.135.11.135.11.268.26.6.45.896.663.169.12.33.257.51.35.193.1.4.17 6.298.134 4.226-.333 3.105-4.807 3.17-6.298.13-1.878.044-3.318-1.05-4.52-.885-1.052-2.127-2.751-2.716-4.522-.278-.832-.41-1.684-.287-2.489a.424.424 0 00-.11-.135c-.26-.268-.45-.6-.663-.896-.12-.169-.257-.33-.35-.51-.1-.193-.17-.4-.134-6.298-.333-4.226-4.807-3.105-6.298-3.17-.832-.278-1.684-.41-2.489-.287a.424.424 0 00-.135-.11c-.268-.26-.6-.45-.896-.663-.169-.12-.33-.257-.51-.35-.193-.1-.4-.17-6.298-.134zm.854 2.166c.12-.01.24-.014.36-.016 3.905.12 4.283 4.966 4.283 5.014 0 .1.016.198.05.29.05.14.12.27.22.38.15.17.35.3.58.38.26.09.54.13.82.13.28 0 .56-.04.82-.13.23-.08.43-.21.58-.38.1-.11.17-.24.22-.38.03-.092.05-.19.05-.29 0-.048.378-4.894 4.283-5.014.12.002.24.006.36.016 2.4.2 2.4 3.2 2.4 3.2v9.268c0 .7-.58 1.28-1.28 1.28-.7 0-1.28-.58-1.28-1.28V5.566c0-.048-.378-4.894-4.283-5.014-.12-.002-.24-.006-.36-.016-2.4-.2-2.4-3.2-2.4-3.2v9.268c0 .7-.58 1.28-1.28 1.28-.7 0-1.28-.58-1.28-1.28V5.366c0 0 0-2.8-2.4-3.2z"/>
  </svg>
);

const platformInfo = {
  windows: {
    name: 'Windows',
    Icon: WindowsLogo,
    url: process.env.NEXT_PUBLIC_DOWNLOAD_WINDOWS || '#',
    filename: 'LokIn-Setup-Windows.exe',
  },
  macos: {
    name: 'macOS',
    Icon: AppleLogo,
    url: process.env.NEXT_PUBLIC_DOWNLOAD_MACOS || '#',
    filename: 'LokIn-Setup-macOS.dmg',
  },
  linux: {
    name: 'Linux',
    Icon: LinuxLogo,
    url: process.env.NEXT_PUBLIC_DOWNLOAD_LINUX || '#',
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
  
  // If no URL is set, return early
  if (!downloadUrl || downloadUrl === '#') {
    console.warn(`Download URL not set for ${platform}`);
    return;
  }

  try {
    // Try to use File System Access API if available (Chrome, Edge, etc.)
    if (isFileSystemAccessSupported()) {
      try {
        // Fetch the file
        const response = await fetch(downloadUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.statusText}`);
        }
        
        const blob = await response.blob();
        
        // Show file picker to let user choose save location
        const fileHandle = await (window as unknown as { showSaveFilePicker: (options: unknown) => Promise<{ createWritable: () => Promise<{ write: (data: Blob) => Promise<void>; close: () => Promise<void> }> }> }).showSaveFilePicker({
          suggestedName: platformData.filename,
          types: [{
            description: `${platformData.name} Installer`,
            accept: {
              'application/octet-stream': [`.${platformData.filename.split('.').pop()}`],
            },
          }],
        });

        // Write the file to the selected location
        const writable = await fileHandle.createWritable();
        await writable.write(blob);
        await writable.close();
        
        console.log('File saved successfully');
      } catch (error: unknown) {
        // If user cancels the file picker, just return
        if (error instanceof Error && error.name === 'AbortError') {
          return;
        }
        // If File System Access API fails, fall back to regular download
        console.warn('File System Access API failed, falling back to regular download:', error);
        fallbackDownload(downloadUrl, platformData.filename);
      }
    } else {
      // Fallback for browsers that don't support File System Access API
      fallbackDownload(downloadUrl, platformData.filename);
    }
  } catch (error) {
    console.error('Download failed:', error);
    // Fallback to regular download on any error
    fallbackDownload(downloadUrl, platformData.filename);
  }
}

// Fallback download function for browsers without File System Access API
function fallbackDownload(url: string, filename: string) {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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

  const iosUrl = process.env.NEXT_PUBLIC_DOWNLOAD_IOS || '#';

  return (
    <section id="download" ref={ref} className="py-20 px-4 bg-gray-900">
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

        {/* Fun stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-500 mb-2">24/7</div>
            <div className="text-sm text-gray-400">Available to help you lock in</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-500 mb-2">100%</div>
            <div className="text-sm text-gray-400">Free to download</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-500 mb-2">0</div>
            <div className="text-sm text-gray-400">Excuses accepted</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
