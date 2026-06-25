import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="relative">
      {/* Blue overlay image section */}
      <div className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(69, 173, 255, 0.80), rgba(69, 173, 255, 0.80)), url('/images/Frame-15.png')`
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 underline underline-offset-8 decoration-2"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            Gravity Tech World Is One Of The Reckoned Web & Software Development Company In Surat. 
            Our Teams Have 3 Years Of Experience In The Development Of Software Applications & Systems.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            href="#"
            className="inline-block bg-white text-primary-dark px-8 py-3 rounded-full font-medium hover:bg-accent hover:text-white transition-all duration-300"
          >
            More
          </motion.a>
        </div>
      </div>
    </section>
  );
}
