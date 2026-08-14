import { motion } from 'framer-motion';

/* Custom icons recreated to match the Figma "Our Working Process" design.
   The dark fill (#12102E) matches the icon-circle background so the
   "cut-out" details (rocket window, body stripes) read as holes. */

// 1. Research — magnifier with refresh arc + checkmark and list lines
function ResearchIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* lens */}
      <circle cx="27.5" cy="18" r="9" stroke="white" strokeWidth="3" />
      {/* refresh arc over the lens with arrowhead */}
      <path d="M18.5 14.5 A9 9 0 0 1 33.5 12" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M15 11 L19.6 14.6 L20.4 9 Z" fill="white" />
      {/* checkmark inside lens */}
      <path d="M23 18.2 L26.6 21.8 L32.2 14.6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* handle */}
      <path d="M21 25 L12.5 33.5" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
      {/* list lines */}
      <rect x="25" y="31.5" width="16" height="3" rx="1.5" fill="white" />
      <rect x="25" y="37.5" width="10" height="3" rx="1.5" fill="white" />
    </svg>
  );
}

// 2. Build & Marketing — browser window with megaphone + text lines
function MarketingIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* window frame */}
      <rect x="8" y="12" width="32" height="24" rx="4" stroke="white" strokeWidth="3" />
      {/* title-bar divider + dots */}
      <line x1="8.5" y1="19.5" x2="39.5" y2="19.5" stroke="white" strokeWidth="2" />
      <circle cx="13" cy="15.8" r="1.3" fill="white" />
      <circle cx="17.2" cy="15.8" r="1.3" fill="white" />
      <circle cx="21.4" cy="15.8" r="1.3" fill="white" />
      {/* megaphone */}
      <path d="M13 27.5 L20 24.5 L20 31.5 L13 30 Z" fill="white" />
      <path d="M20 25 L22.5 24.2 L22.5 31.8 L20 31 Z" fill="white" />
      <path d="M15 30.2 L18 30.8 L17.4 34 C17.2 34.8 16 34.8 15.6 34 Z" fill="white" />
      {/* text lines */}
      <rect x="26.5" y="24" width="9.5" height="2.6" rx="1.3" fill="white" />
      <rect x="26.5" y="28.4" width="9.5" height="2.6" rx="1.3" fill="white" />
      <rect x="26.5" y="32.8" width="6.5" height="2.6" rx="1.3" fill="white" />
    </svg>
  );
}

// 3. Launch — vertical rocket with fins launching from a cloud
function RocketIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* body + nose */}
      <path d="M24 6 C28.5 10.5 30.5 16 30.5 22 L30.5 28 L17.5 28 L17.5 22 C17.5 16 19.5 10.5 24 6 Z" fill="white" />
      {/* window (cut-out) */}
      <circle cx="24" cy="17" r="3.2" fill="#12102E" />
      {/* body stripes (cut-out) */}
      <rect x="22.1" y="24" width="1.6" height="4.5" fill="#12102E" />
      <rect x="24.3" y="24" width="1.6" height="4.5" fill="#12102E" />
      {/* left fin */}
      <path d="M17.5 21 C13.5 23 12.5 27.5 14.5 30.5 C16.5 29 17.5 25.5 17.5 23 Z" fill="white" />
      {/* right fin */}
      <path d="M30.5 21 C34.5 23 35.5 27.5 33.5 30.5 C31.5 29 30.5 25.5 30.5 23 Z" fill="white" />
      {/* launch cloud */}
      <path d="M12.5 37 C11 37 10.5 34.5 12.5 34 C12.5 31.5 16 31 17.5 33 C18.5 30.5 23 30.5 24 33.5 C25 30.5 29.5 31.5 30.5 33.5 C32.5 32 35.5 33.5 34.5 36 C36 36.5 35.5 38 34 37.5 Z" fill="white" />
    </svg>
  );
}

const steps = [
  {
    number: '1',
    icon: <ResearchIcon />,
    title: 'Research',
    description: 'With Study And Planning, We Go Deeply Into The Problem And Project Industry',
  },
  {
    number: '2',
    icon: <MarketingIcon />,
    title: 'Build & Marketing',
    description: 'Lateral Thinking That Leads To Most Befitting Design, Seeking Solution And Building It.',
  },
  {
    number: '3',
    icon: <RocketIcon />,
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
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pt-20 pb-12">
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
                <span className="text-[110px] md:text-[170px] font-bold text-white/[0.14] font-heading absolute top-0 left-1/2 -translate-x-[85%] -translate-y-[32%] z-0 leading-none select-none pointer-events-none">
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
