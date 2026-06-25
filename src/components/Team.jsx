import { motion } from 'framer-motion';
import { FaUserCheck, FaBriefcase, FaCogs } from 'react-icons/fa';

const features = [
  {
    icon: <FaUserCheck size={24} />,
    title: 'Talented & Verified Team',
    subtitle: 'Confidence In Quality',
  },
  {
    icon: <FaBriefcase size={24} />,
    title: 'We Value Our Work With',
    subtitle: 'Next-Generation Technologies',
  },
  {
    icon: <FaCogs size={24} />,
    title: 'Adjustable & Flexible',
    subtitle: 'Flexible Framework',
  },
];

export default function Team() {
  return (
    <section className="py-20 bg-primary-dark">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 2xl:px-32">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-heading text-[#45ADFF] text-center mb-12"
        >
          We Are A Team Of Certified<br />Developers
        </motion.h2>

        {/* Staggered Photo Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          {/* Row 1 */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="rounded-2xl bg-[#1E2A45] aspect-[4/5] mt-10 overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#1E2A45] to-[#151D33]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-[#1E2A45] aspect-[4/5] overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#1E2A45] to-[#151D33]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl bg-[#1E2A45] aspect-[4/5] overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#1E2A45] to-[#151D33]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl bg-[#1E2A45] aspect-[4/5] mt-4 overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#1E2A45] to-[#151D33]" />
            </motion.div>
          </div>
          
          {/* Row 2 - offset to right */}
          <div className="grid grid-cols-4 gap-4 ml-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="rounded-2xl bg-[#1E2A45] aspect-[5/4] overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#1E2A45] to-[#151D33]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl bg-[#1E2A45] aspect-[5/4] overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#1E2A45] to-[#151D33]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="rounded-2xl bg-[#1E2A45] aspect-[5/4] overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#1E2A45] to-[#151D33]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl bg-[#1E2A45] aspect-[5/4] overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#1E2A45] to-[#151D33]" />
            </motion.div>
          </div>
        </div>

        {/* Feature Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-full py-5 px-8"
          style={{
            background: 'linear-gradient(180deg, rgba(69, 173, 255, 0.2) 0%, rgba(69, 173, 255, 0.05) 100%)',
            border: '1px solid rgba(69, 173, 255, 0.2)',
          }}
        >
          <div className="flex justify-around items-center flex-wrap gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#45ADFF] flex items-center justify-center text-white flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-[#45ADFF] font-semibold text-sm">{feature.title}</h4>
                  <p className="text-white/60 text-xs">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
