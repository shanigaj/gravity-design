import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import GetInTouch from '../components/GetInTouch';
import { servicesData } from '../data/servicesData';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <SEO
        title={`${service.title} | Our Services`}
        description={service.description}
        keywords={`${service.title}, Gravity Tech World, Services, Web Development, App Development`}
      />
      <Navbar />
      
      <main className="bg-primary-dark min-h-screen pt-32 pb-20">
        
        {/* Back button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 2xl:px-32 mb-8 relative z-20">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-[#45ADFF] transition-colors">
            <FaArrowLeft size={14} />
            <span className="text-sm font-medium uppercase tracking-wider">Back to Services</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative px-4 sm:px-8 lg:px-16 2xl:px-32 max-w-7xl mx-auto mb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <div 
                className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-2xl"
                style={{ 
                  backgroundColor: service.color === '#000000' ? '#2A3751' : service.color,
                  color: service.iconColor || '#FFFFFF'
                }}
              >
                {service.icon}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-[#45ADFF] font-medium mb-8">
                {service.description}
              </p>
            </motion.div>

            {/* Right Graphic/Glow */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative flex justify-center"
            >
              <div 
                className="absolute inset-0 blur-[100px] rounded-full opacity-30"
                style={{ backgroundColor: service.color }}
              />
              <div className="relative z-10 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl w-full max-w-lg aspect-[4/3] group">
                 {service.image ? (
                   <img 
                     src={service.image} 
                     alt={service.title} 
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                 ) : (
                   <div className="w-full h-full bg-[#151E32] flex flex-col items-center justify-center">
                     <div className="text-white/20 mb-6 scale-[3]">{service.icon}</div>
                     <h3 className="text-2xl font-bold text-white mt-12">{service.title}</h3>
                   </div>
                 )}
              </div>
            </motion.div>

          </div>
        </section>

        {/* Details Section */}
        <section className="px-4 sm:px-8 lg:px-16 2xl:px-32 max-w-7xl mx-auto mb-24">
          <div className="bg-[#FFFFFF05] border border-white/5 rounded-[40px] p-8 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Long Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-[#45ADFF] rounded-full"></span>
                  Overview
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {service.longDescription}
                </p>
              </motion.div>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-[#45ADFF] rounded-full"></span>
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <FaCheckCircle className="text-[#45ADFF] mt-1.5 flex-shrink-0" size={18} />
                      <span className="text-gray-300 text-[17px]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <GetInTouch />
      </main>

      <Footer />
    </>
  );
}
