import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function GetInTouch() {
  return (
    <section className="relative py-20 bg-primary-dark overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* "US" watermark text - left bottom */}
        <span className="absolute left-4 bottom-8 text-[140px] font-extrabold text-white/[0.03] font-heading leading-none select-none tracking-wider">
          US
        </span>
        {/* "Contact" watermark text - right side, vertical */}
        <span 
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 text-[130px] font-extrabold text-white/[0.03] font-heading leading-none select-none tracking-wider"
          style={{ writingMode: 'vertical-rl' }}
        >
          Contact
        </span>
        
        {/* Image Decorative Circles */}
        <img src="/Group 7.png" alt="" className="absolute bottom-0 -translate-y-1/2 left-0 h-[250px] w-auto object-contain opacity-100" />
        <img src="/Group 9.png" alt="" className="absolute top-[80px] right-0 h-[150px] w-auto object-contain opacity-100" />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-8 lg:px-16 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#45ADFF] italic mb-2">
              Get In Touch
            </h2>
            <p className="text-white/50 text-sm mb-14">Let Us Know How We Can Help</p>

            {/* Contact Details */}
            <div className="space-y-10">
              {/* Call Us */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#45ADFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaPhoneAlt className="text-[#45ADFF]" size={15} />
                </div>
                <div>
                  <p className="text-[#45ADFF] text-xs font-semibold uppercase tracking-[0.15em] mb-1.5 flex items-center gap-2">
                    <span>CALL US</span>
                  </p>
                  <p className="text-white text-[15px] font-medium">+91 90540 74748</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#45ADFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaEnvelope className="text-[#45ADFF]" size={15} />
                </div>
                <div>
                  <p className="text-[#45ADFF] text-xs font-semibold uppercase tracking-[0.15em] mb-1.5 flex items-center gap-2">
                    <span>EMAIL US</span>
                  </p>
                  <p className="text-white text-[15px] font-medium">info@gravitytechworld.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#45ADFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="text-[#45ADFF]" size={15} />
                </div>
                <div>
                  <p className="text-[#45ADFF] text-xs font-semibold uppercase tracking-[0.15em] mb-1.5 flex items-center gap-2">
                    <span>LOCATION</span>
                  </p>
                  <p className="text-white text-[15px] font-medium leading-relaxed">
                    207 / 208 Shreenathji Icon, VIP Circle,<br />
                    Uttran, Surat, Gujarat - 394105
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form in Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[28px] p-8 md:p-10"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(69,173,255,0.15)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <form className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="text-[#45ADFF] text-sm font-medium mb-2.5 block">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full bg-[#FFFFFF08] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#45ADFF]/50 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-[#45ADFF] text-sm font-medium mb-2.5 block">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full bg-[#FFFFFF08] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#45ADFF]/50 transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-[#45ADFF] text-sm font-medium mb-2.5 block">Subject</label>
                <input
                  type="text"
                  placeholder="Enter Your Subject"
                  className="w-full bg-[#FFFFFF08] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#45ADFF]/50 transition-colors"
                />
              </div>

              {/* Your Message */}
              <div>
                <label className="text-[#45ADFF] text-sm font-medium mb-2.5 block">Your Message</label>
                <textarea
                  placeholder="Type Your Message"
                  rows={4}
                  className="w-full bg-[#FFFFFF08] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#45ADFF]/50 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#45ADFF] text-white font-semibold text-base hover:bg-[#3a9ae8] active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-[#45ADFF]/20"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
