import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiFigma, SiReact, SiFlutter, SiKotlin, SiSwift, SiWordpress, SiNextdotjs, SiNodedotjs, SiMongodb, SiMysql, SiFirebase } from 'react-icons/si';

// Custom Adobe icon badge component
function AdobeBadge({ label, color }) {
  return (
    <div
      className="w-[38px] h-[38px] flex items-center justify-center text-white text-[14px] font-bold"
      style={{ 
        background: color,
        clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'
      }}
    >
      {label}
    </div>
  );
}

const categories = {
  'Design Tools': [
    { icon: <AdobeBadge label="Ps" color="#31A8FF" />, name: 'Photoshop' },
    { icon: <SiFigma size={28} className="text-[#F24E1E]" />, name: 'Figma' },
    { icon: <AdobeBadge label="Ai" color="#FF9A00" />, name: 'Illustrator' },
    { icon: <AdobeBadge label="Ae" color="#9999FF" />, name: 'After Effects' },
    { icon: <AdobeBadge label="Pr" color="#9999FF" />, name: 'Premiere Pro' },
    { icon: <AdobeBadge label="Xd" color="#FF61F6" />, name: 'XD' },
  ],
  'App Development': [
    { icon: <SiReact size={28} className="text-[#61DAFB]" />, name: 'React Native' },
    { icon: <SiFlutter size={28} className="text-[#02569B]" />, name: 'Flutter' },
    { icon: <SiKotlin size={28} className="text-[#7F52FF]" />, name: 'Kotlin' },
    { icon: <SiSwift size={28} className="text-[#FA7343]" />, name: 'Swift' },
  ],
  'Web Development': [
    { icon: <SiReact size={28} className="text-[#61DAFB]" />, name: 'React' },
    { icon: <SiNextdotjs size={28} className="text-white" />, name: 'Next.js' },
    { icon: <SiNodedotjs size={28} className="text-[#339933]" />, name: 'Node.js' },
    { icon: <SiWordpress size={28} className="text-[#21759B]" />, name: 'WordPress' },
  ],
  'Data Management': [
    { icon: <SiMongodb size={28} className="text-[#47A248]" />, name: 'MongoDB' },
    { icon: <SiMysql size={28} className="text-[#4479A1]" />, name: 'MySQL' },
    { icon: <SiFirebase size={28} className="text-[#FFCA28]" />, name: 'Firebase' },
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
            className="flex flex-wrap justify-center gap-8"
          >
            {categories[activeTab].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center border border-card-border group-hover:border-accent transition-colors overflow-hidden">
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
