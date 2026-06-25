import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaAndroid, FaApple, FaPaintBrush, FaCode, FaVideo, FaShoppingCart } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
    icon: <FaPaintBrush size={28} />,
    title: 'UI/UX Creative Design',
    description: 'Get User Friendly, Robust, Advanced And Attractive Designs For Website, Application And Games.',
  },
  {
    icon: <FaCode size={28} />,
    title: 'Web Development',
    description: 'Get Innovative, SEO Friendly, Responsive And User Friendly Website Development Services.',
  },
  {
    icon: <FaVideo size={28} />,
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
