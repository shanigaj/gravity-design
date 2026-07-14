import { motion } from 'framer-motion';
import { FaAndroid, FaApple, FaPaintBrush, FaCode, FaVideo, FaShoppingCart, FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import GetInTouch from '../components/GetInTouch';

import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Explore the wide range of services provided by Gravity Tech World including Web Development, App Development, UI/UX Design, and more."
        keywords="Services, Web Development, App Development, UI/UX Design, Android, iOS"
      />
      <Navbar />
      
      <main className="bg-primary-dark min-h-screen pt-32 pb-20">
        {/* Page Header */}
        <section className="relative px-4 sm:px-8 lg:px-16 2xl:px-32 max-w-7xl mx-auto mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-6">
              Our <span className="text-[#45ADFF] italic">Expertise</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We leverage cutting-edge technology and creative thinking to deliver solutions that drive growth and transform businesses.
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-8 lg:px-16 2xl:px-32 max-w-7xl mx-auto mb-24">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {servicesData.map((service, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="group relative bg-[#151E32] rounded-[30px] p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-white/5 hover:border-[#45ADFF]/30"
                style={{
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                }}
              >
                {/* Background Image Layer */}
                {service.image && (
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <img src={service.image} alt="" className="w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151E32] via-[#151E32]/90 to-transparent" />
                  </div>
                )}

                {/* Glow Effect */}
                <div 
                  className="absolute -right-20 -top-20 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: service.color }}
                />

                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                    style={{ 
                      backgroundColor: service.color === '#000000' ? '#2A3751' : service.color,
                      color: service.iconColor || '#FFFFFF'
                    }}
                  >
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#45ADFF] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <Link to={`/services/${service.slug}`} className="flex items-center gap-2 text-[#45ADFF] text-sm font-semibold cursor-pointer group/btn w-fit">
                    <span>Learn More</span>
                    <FaArrowRight className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA / Contact Section */}
        <GetInTouch />
      </main>

      <Footer />
    </>
  );
}
