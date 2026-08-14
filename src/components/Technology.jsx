import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiFigma, SiReact, SiFlutter, SiKotlin, SiAndroidstudio, SiXcode,
  SiPhp, SiNodedotjs, SiLaravel, SiPython, SiRuby, SiCodeigniter,
  SiMongodb, SiMysql, SiFirebase, SiSqlite, SiMariadb,
} from 'react-icons/si';
import { FaJava, FaMagento } from 'react-icons/fa';

// Adobe app-icon: small dark rounded tile with accent letters, centered on the white circle
function AdobeIcon({ label, bg, accent }) {
  return (
    <div
      className="w-[26px] h-[26px] rounded-[6px] flex items-center justify-center text-[11px] font-bold"
      style={{ background: bg, color: accent }}
    >
      {label}
    </div>
  );
}

// Multicolor Figma logo
function FigmaLogo() {
  return (
    <svg width="18" height="27" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
    </svg>
  );
}

const categories = {
  'Design Tools': [
    { icon: <AdobeIcon label="Ps" bg="#001E36" accent="#31A8FF" />, name: 'Photoshop' },
    { icon: <FigmaLogo />, name: 'Figma' },
    { icon: <AdobeIcon label="Ai" bg="#330000" accent="#FF9A00" />, name: 'Illustrator' },
    { icon: <AdobeIcon label="Ae" bg="#00005B" accent="#9999FF" />, name: 'After Effects' },
    { icon: <AdobeIcon label="Pr" bg="#00005B" accent="#EA77FF" />, name: 'Premiere Pro' },
    { icon: <AdobeIcon label="Xd" bg="#470137" accent="#FF61F6" />, name: 'XD' },
  ],
  'App Development': [
    { icon: <SiAndroidstudio size={24} className="text-[#3DDC84]" />, name: 'Android Studio' },
    { icon: <SiFlutter size={22} className="text-[#02569B]" />, name: 'Flutter' },
    { icon: <SiXcode size={24} className="text-[#147EFB]" />, name: 'Xcode' },
    { icon: <SiReact size={24} className="text-[#61DAFB]" />, name: 'React Native' },
    { icon: <SiKotlin size={22} className="text-[#7F52FF]" />, name: 'Kotlin' },
    { icon: <FaJava size={22} className="text-[#EA2D2E]" />, name: 'Java' },
  ],
  'Web Development': [
    { icon: <SiPhp size={26} className="text-[#777BB4]" />, name: 'PHP' },
    { icon: <SiNodedotjs size={24} className="text-[#339933]" />, name: 'Node JS' },
    { icon: <SiLaravel size={22} className="text-[#FF2D20]" />, name: 'Laravel' },
    { icon: <SiPython size={24} className="text-[#3776AB]" />, name: 'Python' },
    { icon: <SiRuby size={22} className="text-[#CC342D]" />, name: 'Ruby' },
    { icon: <SiCodeigniter size={24} className="text-[#EF4223]" />, name: 'CodeIgniter' },
  ],
  'Data Management': [
    { icon: <SiMongodb size={24} className="text-[#47A248]" />, name: 'MongoDB' },
    { icon: <SiMysql size={26} className="text-[#4479A1]" />, name: 'MySQL' },
    { icon: <SiFirebase size={22} className="text-[#FFA000]" />, name: 'Firebase' },
    { icon: <SiSqlite size={26} className="text-[#003B57]" />, name: 'SQLite' },
    { icon: <FaMagento size={22} className="text-[#EE672F]" />, name: 'Magento' },
    { icon: <SiMariadb size={28} className="text-[#003545]" />, name: 'MariaDB' },
  ],
};

export default function Technology() {
  const [activeTab, setActiveTab] = useState('Design Tools');

  return (
    <section className="py-20 bg-primary-dark">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 2xl:px-32 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-heading text-accent mb-4"
        >
          Technology
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-secondary mb-10"
        >
          Innovative Technology Solutions Driving Efficiency, Growth, And Transformation Across Industries.
        </motion.p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(categories).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'bg-blue-btn text-white shadow-lg shadow-blue-btn/30'
                  : 'bg-transparent border border-text-secondary/30 text-text-secondary hover:border-accent hover:text-accent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-x-10 gap-y-6"
          >
            {categories[activeTab].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md group-hover:ring-2 group-hover:ring-accent transition-all">
                  {tool.icon}
                </div>
                <span className="text-text-secondary group-hover:text-white transition-colors text-sm font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
