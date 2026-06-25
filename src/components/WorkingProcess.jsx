import { motion } from 'framer-motion';
import { FaSearch, FaLaptopCode, FaRocket } from 'react-icons/fa';

const steps = [
  {
    number: '1',
    icon: <FaSearch size={28} />,
    title: 'Research',
    description: 'With Study And Planning, We Go Deeply Into The Problem And Project Industry',
  },
  {
    number: '2',
    icon: <FaLaptopCode size={28} />,
    title: 'Build & Marketing',
    description: 'Lateral Thinking That Leads To Most Befitting Design, Seeking Solution And Building It.',
  },
  {
    number: '3',
    icon: <FaRocket size={28} />,
    title: 'Launch',
    description: 'Delivering A Successful Product To Launch With Seamless Support & Rigorous Promotion.',
  },
];

export default function WorkingProcess() {
  return (
    <section className="py-20">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 2xl:px-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-heading text-accent mb-4"
        >
          Our Working Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-secondary mb-12 max-w-2xl"
        >
          Our Mobile App Development Company Takes Great Pride In Achieving These Milestones Through Hard Work, Passion, Expertise, And Experience.
        </motion.p>

        <div className="relative rounded-[30px] overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(69, 173, 255, 0.3) 0%, rgba(69, 173, 255, 0) 100%)' }}>
          {/* Background gradient bar */}
          <div className="absolute inset-0" />
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step number */}
                <span className="text-[140px] font-bold text-[#FFFFFF0A] font-heading absolute top-1/2 left-1/2 -translate-x-[80%] -translate-y-[60%] z-0 leading-none select-none pointer-events-none">
                  {step.number}
                </span>
                
                {/* Icon circle */}
                <div 
                  className="mb-6 relative z-10 w-[88px] h-[88px] rounded-full flex items-center justify-center text-white"
                  style={{ border: '4px solid #45ADFF', background: '#12102E' }}
                >
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-heading">{step.title}</h3>
                <p className="text-text-secondary text-sm">{step.description}</p>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-16 translate-x-4">
                    <svg width="84" height="59" viewBox="0 0 32 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-white/40">
                      <path d="M2.58 3L1.16 4.41L8.74 12L1.16 19.59L2.58 21L11.58 12L2.58 3Z" opacity="0.3"/>
                      <path d="M10.58 3L9.16 4.41L16.74 12L9.16 19.59L10.58 21L19.58 12L10.58 3Z" opacity="0.6"/>
                      <path d="M18.58 3L17.16 4.41L24.74 12L17.16 19.59L18.58 21L27.58 12L18.58 3Z" opacity="1"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
