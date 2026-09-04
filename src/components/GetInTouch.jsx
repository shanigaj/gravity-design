import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export default function GetInTouch() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: '', text: '' });

    try {
      // Save to Firebase
      await addDoc(collection(db, 'contactMessages'), {
        ...formData,
        source: 'Home Page - Get In Touch',
        createdAt: serverTimestamp(),
        status: 'new'
      });

      // Send Email via local/production backend
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Home Page - Get In Touch'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email via backend');
      }

      setStatusMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error saving message:', error);
      setStatusMessage({ type: 'error', text: 'Oops! Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatusMessage({ type: '', text: '' }), 5000);
    }
  };
  return (
    <section className="relative py-20 bg-primary-dark overflow-hidden" style={{ fontFamily: "'Figtree', sans-serif" }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Left lens shape (Figma Vector 1) - radial gradient eye */}
        <svg
          className="absolute left-[-11%] top-[38%] -translate-y-1/2 w-[560px] h-[490px] md:w-[720px] md:h-[620px] pointer-events-none"
          viewBox="0 0 640 400" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="gitLens1" cx="50%" cy="50%" r="62%">
              <stop offset="0%" stopColor="#45ADFF" />
              <stop offset="100%" stopColor="#296899" />
            </radialGradient>
          </defs>
          <path d="M8 190 C 150 25, 470 25, 612 190 C 470 355, 150 355, 8 190 Z" fill="url(#gitLens1)" opacity="0.3" />
        </svg>

        {/* Right lens shape (Figma Vector 2) - rotated radial gradient */}
        <svg
          className="absolute right-[-7%] top-[-12%] w-[380px] h-[330px] md:w-[500px] md:h-[440px] pointer-events-none"
          viewBox="0 0 640 400" fill="none" xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'rotate(-126deg)' }}
        >
          <defs>
            <radialGradient id="gitLens2" cx="50%" cy="50%" r="62%">
              <stop offset="0%" stopColor="#45ADFF" />
              <stop offset="100%" stopColor="#296899" />
            </radialGradient>
          </defs>
          <path d="M8 190 C 150 25, 470 25, 612 190 C 470 355, 150 355, 8 190 Z" fill="url(#gitLens2)" opacity="0.3" />
        </svg>

        {/* "US" outlined watermark - bottom left (Figma: 1.5px #FFF stroke, 50%) */}
        <span
          className="absolute left-2 md:left-8 bottom-2 md:bottom-6 font-medium leading-none select-none"
          style={{ fontSize: 'clamp(80px, 12vw, 180px)', color: 'transparent', WebkitTextStroke: '1.5px #FFFFFF', opacity: 0.5 }}
        >
          US
        </span>

        {/* "Contact" outlined vertical watermark - right (Figma: 1.5px #FFF stroke, 60%) */}
        <span
          className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 font-medium leading-none select-none"
          style={{ fontSize: 'clamp(78px, 11vw, 180px)', color: 'transparent', WebkitTextStroke: '1.5px #FFFFFF', opacity: 0.6, writingMode: 'vertical-rl' }}
        >
          Contact
        </span>

        {/* Plus decorations (Figma) */}
        <span className="absolute right-[6%] top-[9%] text-[#45ADFF]/30 text-5xl md:text-6xl font-thin select-none leading-none">+</span>
        <span className="absolute right-[9%] top-[44%] text-[#45ADFF]/20 text-3xl md:text-4xl font-thin select-none leading-none">+</span>
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-8 lg:px-16 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_8fr] gap-10 lg:gap-12 items-start">
          
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <h2 className="text-[40px] sm:text-5xl lg:text-[54px] xl:text-[66px] 2xl:text-[80px] font-bold text-[#45ADFF] leading-[1.02] mb-3 whitespace-nowrap">
              Get In Touch
            </h2>
            <p className="text-white/70 text-lg sm:text-xl md:text-2xl mb-14">Let Us Know How We Can Help</p>

            {/* Contact Details */}
            <div className="space-y-10">
              {/* Call Us */}
              <div>
                <p className="text-[#45ADFF] text-lg md:text-xl font-semibold uppercase tracking-[0.08em] mb-2.5 flex items-center gap-3">
                  <FaPhoneAlt size={22} /> <span>CALL US</span>
                </p>
                <p className="text-white text-lg md:text-xl font-semibold">+91 90540 74748</p>
              </div>

              {/* Email Us */}
              <div>
                <p className="text-[#45ADFF] text-lg md:text-xl font-semibold uppercase tracking-[0.08em] mb-2.5 flex items-center gap-3">
                  <FaEnvelope size={22} /> <span>EMAIL US</span>
                </p>
                <p className="text-white text-lg md:text-xl font-semibold">info@gravitytechworld.com</p>
              </div>

              {/* Location */}
              <div>
                <p className="text-[#45ADFF] text-lg md:text-xl font-semibold uppercase tracking-[0.08em] mb-2.5 flex items-center gap-3">
                  <FaMapMarkerAlt size={22} /> <span>LOCATION</span>
                </p>
                <p className="text-white text-lg md:text-xl font-semibold leading-relaxed">
                  207 / 208 Shreenathji Icon, VIP Circle,<br />
                  Uttran, Surat, Gujarat - 394105
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form in Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[40px] md:rounded-[50px] p-6 sm:p-8 md:p-12 border border-white/[0.07]"
            style={{
              background: 'rgba(69,173,255,0.15)',
              backdropFilter: 'blur(45px)',
              WebkitBackdropFilter: 'blur(45px)',
            }}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <label className="text-[#45ADFF] text-lg font-medium mb-2.5 block">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter Full Name"
                  className="w-full bg-white/[0.06] border border-white/10 rounded-[10px] px-5 py-4 text-white text-base placeholder:text-white/35 focus:outline-none focus:border-[#45ADFF]/60 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-[#45ADFF] text-lg font-medium mb-2.5 block">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Email"
                  className="w-full bg-white/[0.06] border border-white/10 rounded-[10px] px-5 py-4 text-white text-base placeholder:text-white/35 focus:outline-none focus:border-[#45ADFF]/60 transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-[#45ADFF] text-lg font-medium mb-2.5 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Subject"
                  className="w-full bg-white/[0.06] border border-white/10 rounded-[10px] px-5 py-4 text-white text-base placeholder:text-white/35 focus:outline-none focus:border-[#45ADFF]/60 transition-colors"
                />
              </div>

              {/* Your Message */}
              <div>
                <label className="text-[#45ADFF] text-lg font-medium mb-2.5 block">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Type Your Message"
                  rows={4}
                  className="w-full bg-white/[0.06] border border-white/10 rounded-[10px] px-5 py-4 text-white text-base placeholder:text-white/35 focus:outline-none focus:border-[#45ADFF]/60 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-[10px] bg-[#5CB8FF] text-white font-semibold text-lg hover:bg-[#45ADFF] active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-[#5CB8FF]/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>

              {statusMessage.text && (
                <div className={`mt-4 p-3 rounded-xl text-sm text-center font-medium ${statusMessage.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {statusMessage.text}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
