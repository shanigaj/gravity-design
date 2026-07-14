import { motion } from 'framer-motion';
import { useTeamPhotos } from '../hooks/useSiteImage';

const features = [
  {
    icon: <img src="/Frame (1).png" alt="Talented Team" className="w-12 h-12 object-contain" />,
    title: 'Talented & Verified Team',
    subtitle: 'Confidence In Quality',
  },
  {
    icon: <img src="/Frame (2).png" alt="Value Work" className="w-12 h-12 object-contain" />,
    title: 'We Value Our Work With',
    subtitle: 'Next-Generation Technologies',
  },
  {
    icon: <img src="/Frame (3).png" alt="Adjustable" className="w-12 h-12 object-contain" />,
    title: 'Adjustable & Flexible',
    subtitle: 'Flexible Framework',
  },
];

export default function Team() {
  const teamPhotos = useTeamPhotos();

  const renderPhoto = (index, className) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`rounded-2xl bg-[#1E2A45] overflow-hidden ${className}`}
    >
      {teamPhotos[index] ? (
        <img src={teamPhotos[index]} alt={`Team member ${index + 1}`} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#1E2A45] to-[#151D33]" />
      )}
    </motion.div>
  );

  return (
    <section className="py-20 bg-primary-dark">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 2xl:px-32">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden text-3xl md:text-4xl font-bold font-heading text-[#45ADFF] text-center mb-12"
        >
          We Are A Team Of Certified<br />Developers
        </motion.h2>

        {/* Staggered Photo Grid */}
        <div className="hidden max-w-5xl mx-auto mb-16">
          {/* Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-3 md:mb-4">
            {renderPhoto(0, 'aspect-[4/5] mt-6 md:mt-10')}
            {renderPhoto(1, 'aspect-[4/5]')}
            {renderPhoto(2, 'aspect-[4/5]')}
            {renderPhoto(3, 'aspect-[4/5] mt-3 md:mt-4')}
          </div>
          
          {/* Row 2 - offset to right */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 ml-8 md:ml-16">
            {renderPhoto(4, 'aspect-[5/4]')}
            {renderPhoto(5, 'aspect-[5/4]')}
            {renderPhoto(6, 'aspect-[5/4]')}
            {renderPhoto(7, 'aspect-[5/4]')}
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
          <div className="flex flex-col md:flex-row justify-around items-center flex-wrap gap-6 md:gap-4 text-center md:text-left">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                <div className="flex items-center justify-center flex-shrink-0">
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
