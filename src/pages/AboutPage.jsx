import { motion } from 'framer-motion';
import ParticleNetwork from '../components/ParticleNetwork';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { useSiteImage } from '../hooks/useSiteImage';
import Values from '../components/Values';

const timeline = [
  { year: '2022', desc: 'Gravity Tech World Established As A Part Of The Software Development Industry, We Are Into 4 Major Verticals. Viz - Mobile App Development.', side: 'left' },
  { year: '2023', desc: 'Developing Apps For IPhones Is Leading The Challenging Start By Using Long User Studies And Creating One Of The Country\'s Most Widely Used Apps.', side: 'right' },
  { year: '2024', desc: 'Starting With Just The Of Us, We Attracted Talented To Make A Name For Ourselves And To Expand Our Reach To Reach Dedicated Individuals.', side: 'center' },
  { year: '2025', desc: 'With Growing Experience, Self Advanced Our Development Skills, Creating User-Friendly And Reliable Interfaces And Apps At The Tech Industry.', side: 'left' },
  { year: '2026', desc: 'Today, We Stand At Innovative, Advanced Technologies. Are Building Powerful Digital Products For The Future.', side: 'right' },
];

export default function AboutPage() {
  const heroUrl = useSiteImage('about', 'heroUrl', '/images/team-hero.jpg');
  const journeyUrl = useSiteImage('about', 'journeyUrl', '/images/Group-60.png');

  return (
    <>
      <SEO title="About Us" description="Learn about Gravity Tech World - A leading web and software development company in Surat." />
      <Navbar />

      {/* Hero with team photo */}
      <section className="relative min-h-[110vh] flex items-end justify-center overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `linear-gradient(to bottom, rgba(11,18,36,0.4), rgba(11,18,36,0.85)), url('${heroUrl}')`
        }} />
        <ParticleNetwork />
        <div className="relative z-10 text-center h-screen flex items-center justify-center px-4 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-heading text-white mb-4"
          >
            "Empowering Innovation With Advanced{' '}
            <span className="text-accent italic">Digital Solutions</span>"
          </motion.h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-heading text-accent mb-8"
          >
            Who We Are?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary leading-relaxed space-y-4 text-sm"
          >
            <p>Gravity Tech World Is One Of The Most Advanced Software Solutions Company In The Industry. We Have Been Delivering High Quality Services And World-Class Technology Solutions To Customers Since 2019. As A Part Of The Software Development Industry, We Are Into 4 Major Verticals. Viz - Mobile App Development, Web Development, Game Development And APP Designs Along With Providing Offshore Development Teams.</p>
            <p>Our Team Of 20+ Experienced Professionals Comprises Software Developers, UI/UX Designers, Quality Analysts, Technology Experts And The R&D Team. The Capabilities And Knowledge They Bring Enable Us To Deliver Complex Projects On Time.</p>
            <p>What We Bring To You Is Creativity, Understanding, And Expertise Which Ensures That The Results Delivered Align With Your Vision And Objectives.</p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-[#0B1224]">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-heading text-white text-center mb-16"
          >
            Our Journey
          </motion.h2>

          {/* Desktop Circular Layout */}
          <div className="hidden md:flex relative w-full h-[500px] items-center justify-center">
            
            {/* Outer Dotted Circle SVG */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute z-10 w-[560px] h-[560px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            >
              <svg className="overflow-visible" width="100%" height="100%" viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Crisp Dotted Arc from 2026 (Top-Right) around the bottom to 2022 (Top-Left) */}
                <path d="M 478 82 A 280 280 0 1 1 82 82" stroke="#6B7280" strokeWidth="2" strokeDasharray="4 16" strokeLinecap="round" />
                
                {/* Chevrons (Arrows) placed directly on the circle pointing INWARDS */}
                <g stroke="#9CA3AF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  {/* Bottom Chevron pointing UP */}
                  <path d="M 272 544 L 280 536 L 288 544" />
                  {/* Left Chevron pointing RIGHT */}
                  <path d="M 16 272 L 24 280 L 16 288" />
                  {/* Right Chevron pointing LEFT */}
                  <path d="M 544 272 L 536 280 L 544 288" />
                </g>
              </svg>
              
              {/* Blue Dots (5 Total: 2022, 2023, 2024, 2025, 2026) */}
              {/* 1. Top-Left Dot (2022) */}
              {/* <div className="absolute w-[14px] h-[14px] bg-[#3B82F6] rounded-full top-[14.64%] left-[14.64%] transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_#3B82F6]" /> */}
              {/* 3. Left Dot (2023) */}
              {/* <div className="absolute w-[14px] h-[14px] bg-[#3B82F6] rounded-full top-[50%] left-0 transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_#3B82F6]" /> */}
              {/* 4. Bottom Dot (2024) */}
              {/* <div className="absolute w-[14px] h-[14px] bg-[#3B82F6] rounded-full top-[100%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_#3B82F6]" /> */}
              {/* 5. Right Dot (2025) */}
              {/* <div className="absolute w-[14px] h-[14px] bg-[#3B82F6] rounded-full top-[50%] left-[100%] transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_#3B82F6]" /> */}
              {/* 6. Top-Right Dot (2026) */}
              {/* <div className="absolute w-[14px] h-[14px] bg-[#3B82F6] rounded-full top-[14.64%] left-[85.36%] transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_#3B82F6]" /> */}
            </motion.div>

            {/* Center Image */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute z-20 w-[340px] h-[340px] flex items-center justify-center"
            >
              <img 
                src={journeyUrl}
                alt="Gravity Journey" 
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.15)]" 
              />
            </motion.div>

            {/* 2022 */}
            <motion.div 
              initial={{ opacity: 0, x: -30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute top-[calc(50%-198px)] right-[calc(50%+220px)] w-[340px] text-right transform -translate-y-1/2 z-30"
            >
              <h3 className="text-[#3B82F6] font-bold text-[44px] font-heading leading-none mb-3">2022</h3>
              <p className="text-text-secondary text-[12px] leading-relaxed max-w-[280px] ml-auto">Gravity Tech World, Founded By Tech Experts Trushali (Computer Engineer) And Pushpak (Software Developer), Aims To Revolutionize The Tech Industry With Their Groundbreaking Product.</p>
            </motion.div>

            {/* 2023 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute top-[50%] right-[calc(50%+300px)] w-[340px] text-right transform -translate-y-1/2 z-30"
            >
              <h3 className="text-[#3B82F6] font-bold text-[44px] font-heading leading-none mb-3">2023</h3>
              <p className="text-text-secondary text-[12px] leading-relaxed max-w-[280px] ml-auto">Developing Apps And Websites Is Exciting Yet Challenging. Start By Identifying User Needs And Creating A Plan To Address Them Effectively.</p>
            </motion.div>

            {/* 2024 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="absolute top-[calc(50%+300px)] left-1/2 w-[600px] text-center transform -translate-x-1/2 z-30"
            >
              <h3 className="text-[#3B82F6] font-bold text-[44px] font-heading leading-none mb-3">2024</h3>
              <p className="text-text-secondary text-[12px] leading-relaxed mx-auto max-w-[460px]">Starting With Just Two Of Us, We Worked Tirelessly To Make A Name For Ourselves In The Freelancing World. Through Our Dedication And Hard Work, We Have Been Able To Expand Our Team To Seven Dedicated Individuals.</p>
            </motion.div>

            {/* 2025 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="absolute top-[50%] left-[calc(50%+300px)] w-[340px] text-left transform -translate-y-1/2 z-30"
            >
              <h3 className="text-[#3B82F6] font-bold text-[44px] font-heading leading-none mb-3">2025</h3>
              <p className="text-text-secondary text-[12px] leading-relaxed max-w-[280px] mr-auto">With Growing Experience, We Enhanced Our Development Skills, Delivered Better Solutions, And Strengthened Our Position In The Tech Industry</p>
            </motion.div>

            {/* 2026 */}
            <motion.div 
              initial={{ opacity: 0, x: 30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
              className="absolute top-[calc(50%-198px)] left-[calc(50%+220px)] w-[340px] text-left transform -translate-y-1/2 z-30"
            >
              <h3 className="text-[#3B82F6] font-bold text-[44px] font-heading leading-none mb-3">2026</h3>
              <p className="text-text-secondary text-[12px] leading-relaxed max-w-[280px] mr-auto">Continuing Our Journey, We Focus On Innovation, Advanced Technologies, And Building Powerful Digital Products For The Future</p>
            </motion.div>
          </div>

          {/* Mobile Vertical Layout */}
          <div className="md:hidden relative mt-10">
            <div className="flex justify-center mb-10">
              <img src={journeyUrl} alt="Gravity Journey" className="w-48 h-48 object-contain" />
            </div>
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`flex items-center ${i % 2 === 0 ? '' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 px-4">
                    <div className={`${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <span className="text-blue-btn font-bold text-2xl font-heading">{item.year}</span>
                      <p className="text-text-secondary text-[11px] mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-blue-btn rounded-full border-4 border-primary z-10 flex-shrink-0" />
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <Values />

      <Footer />
    </>
  );
}
