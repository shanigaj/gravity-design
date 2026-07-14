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

      // Send Email via local backend
      const response = await fetch('http://localhost:5000/api/send-email', {
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
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <label className="text-[#45ADFF] text-sm font-medium mb-2.5 block">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter Full Name"
                  className="w-full bg-[#FFFFFF08] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#45ADFF]/50 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-[#45ADFF] text-sm font-medium mb-2.5 block">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Email"
                  className="w-full bg-[#FFFFFF08] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#45ADFF]/50 transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-[#45ADFF] text-sm font-medium mb-2.5 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Subject"
                  className="w-full bg-[#FFFFFF08] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#45ADFF]/50 transition-colors"
                />
              </div>

              {/* Your Message */}
              <div>
                <label className="text-[#45ADFF] text-sm font-medium mb-2.5 block">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Type Your Message"
                  rows={4}
                  className="w-full bg-[#FFFFFF08] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#45ADFF]/50 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#45ADFF] text-white font-semibold text-base hover:bg-[#3a9ae8] active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-[#45ADFF]/20 disabled:opacity-70 disabled:cursor-not-allowed"
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
