import { motion } from 'framer-motion';
import ParticleNetwork from './ParticleNetwork';
import { useSiteImage } from '../hooks/useSiteImage';

export default function Hero() {
  const heroImage = useSiteImage('hero', 'url', '/images/OBJECTS.png');
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-primary-dark">
      <ParticleNetwork />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-8 lg:px-16 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white leading-tight"
            >
              Combine Your{' '}
              <span className="font-bold text-accent">IDEA</span> With{' '}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block font-extrabold text-accent text-5xl md:text-6xl lg:text-7xl mt-2"
              >
                TECHNOLOGY
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-text-secondary text-sm md:text-base leading-relaxed mt-6 max-w-xl"
            >
              We bring your vision to life with cutting-edge technology solutions. 
              Our team of experts transforms innovative ideas into powerful digital 
              products that drive results and elevate your business to new heights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a href="#services" className="bg-blue-btn text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-btn/30 transition-all">
                Our Services
              </a>
              <a href="/contact" className="bg-transparent border border-[#45ADFF] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#45ADFF]/10 transition-all">
                Contact Us
              </a>
            </motion.div>
          </div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={heroImage}
              alt="Team working with technology"
              className="w-full max-w-lg drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
