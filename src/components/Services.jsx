import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaAndroid, FaApple, FaShoppingCart } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

/* Custom service icons recreated to match the Figma design.
   Cut-out details use the icon-circle blue (#45ADFF) so they read as holes. */

// UI/UX — vector pen tool with bezier anchor points
function PenToolIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 20 C14 12 34 12 38 20" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
      <circle cx="10" cy="20" r="2.8" fill="white" />
      <circle cx="38" cy="20" r="2.8" fill="white" />
      <rect x="17.5" y="21" width="13" height="3.8" rx="1.9" fill="white" />
      <path d="M18 25 L30 25 L24 41 Z" fill="white" />
      <circle cx="24" cy="29.5" r="2" fill="#45ADFF" />
      <path d="M24 32 L24 37" stroke="#45ADFF" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

// Web Development — monitor with text lines, gear and code brackets
function WebDevIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="10" width="34" height="23" rx="3" stroke="white" strokeWidth="2.6" />
      {/* text lines */}
      <rect x="12" y="15" width="9" height="2" rx="1" fill="white" />
      <rect x="12" y="19" width="9" height="2" rx="1" fill="white" />
      <rect x="12" y="23" width="7" height="2" rx="1" fill="white" />
      <rect x="12" y="27" width="9" height="2" rx="1" fill="white" />
      {/* gear */}
      <g transform="translate(32 16)">
        {[0, 45, 90, 135].map((a) => (
          <rect key={a} x="-1" y="-5.4" width="2" height="2.8" rx="0.5" fill="white" transform={`rotate(${a})`} />
        ))}
        <circle r="3.4" fill="white" />
        <circle r="1.5" fill="#45ADFF" />
      </g>
      {/* code brackets */}
      <path d="M28 25 L25.5 28 L28 31" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 25 L36.5 28 L34 31" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32.4 24 L30 32" stroke="white" strokeWidth="2" strokeLinecap="round" />
      {/* stand */}
      <path d="M20.5 33 L27.5 33 L29 38 L19 38 Z" fill="white" />
      <rect x="16" y="38" width="16" height="2.6" rx="1.3" fill="white" />
    </svg>
  );
}

// Video Animation — media player with play button
function VideoIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="14" width="32" height="20" rx="5" fill="white" />
      <circle cx="14.5" cy="19" r="1.5" fill="#45ADFF" />
      <circle cx="14.5" cy="24" r="1.5" fill="#45ADFF" />
      <circle cx="14.5" cy="29" r="1.5" fill="#45ADFF" />
      <path d="M22 19 L33 24 L22 29 Z" fill="#45ADFF" />
    </svg>
  );
}

const services = [
  {
    icon: <FaAndroid size={28} />,
    title: 'Android Application',
    description: 'Develop High-Quality Mobile Applications With The Most Professional, Reliable, And Fully',
  },
  {
    icon: <FaApple size={28} />,
    title: 'iOS Application',
    description: 'Strive To Build Innovative IOS Apps, Believing To Deliver The Best IOS Application Development Service.',
  },
  {
    icon: <PenToolIcon />,
    title: 'UI/UX Creative Design',
    description: 'Get User Friendly, Robust, Advanced And Attractive Designs For Website, Application And Games.',
  },
  {
    icon: <WebDevIcon />,
    title: 'Web Development',
    description: 'Get Innovative, SEO Friendly, Responsive And User Friendly Website Development Services.',
  },
  {
    icon: <VideoIcon />,
    title: 'Video Animation',
    description: 'Animated Videos, Complete With Intangible Assets That Help Communicate Your Message.',
  },
  {
    icon: <FaShoppingCart size={28} />,
    title: 'E-Commerce',
    description: 'Build Powerful E-Commerce Platforms That Drive Sales And Provide Exceptional Shopping Experiences.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-primary-dark">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 2xl:px-32">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-text-secondary uppercase tracking-widest"
          >
            OUR
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white italic"
          >
            Services
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="pb-16 px-4"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="py-4">
                <div className="bg-[#FFFFFF1A] rounded-[32px] p-8 h-full min-h-[320px] flex flex-col border-[2.27px] border-transparent transition-all duration-300 hover:scale-[1.05] hover:-translate-y-2 hover:bg-[#45ADFF26] hover:border-[#45ADFF] hover:shadow-[0_0_25px_rgba(69,173,255,0.3)] cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-[#45ADFF] flex items-center justify-center text-white mb-6 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">{service.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed flex-grow">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
