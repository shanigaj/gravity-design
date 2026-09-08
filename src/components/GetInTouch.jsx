import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const contactInfo = [
  {
    icon: FaPhoneAlt,
    label: 'CALL US',
    value: '+91 90540 74748',
    href: 'tel:+919054074748',
  },
  {
    icon: FaEnvelope,
    label: 'EMAIL US',
    value: 'info@gravitytechworld.com',
    href: 'mailto:info@gravitytechworld.com',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'LOCATION',
    value: '207 / 208 Shreenathji Icon, VIP Circle,\nUttran, Surat, Gujarat - 394105',
    href: 'https://maps.google.com/?q=Shreenathji+Icon+VIP+Circle+Uttran+Surat',
  },
];

const socials = [
  { icon: FaInstagram, href: 'https://www.instagram.com/gravity_tech_world', label: 'Instagram' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/gravity-tech-world-a2979a245', label: 'LinkedIn' },
  { icon: FaFacebookF, href: 'https://www.facebook.com/share/1EbSkhb69M/', label: 'Facebook' },
  { icon: FaXTwitter, href: 'https://x.com/GT_World_', label: 'X' },
];

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
        status: 'new',
      });

      // Send email notification (best-effort — message is already saved to Firebase)
      try {
        await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, source: 'Home Page - Get In Touch' }),
        });
      } catch (emailErr) {
        console.warn('Email notification failed (message still saved):', emailErr);
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

  const inputClass =
    'w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#45ADFF]/70 focus:bg-white/[0.08] focus:ring-2 focus:ring-[#45ADFF]/15 transition-all';

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-primary-dark overflow-hidden"
      style={{ fontFamily: "'Figtree', sans-serif" }}
    >
      {/* ── Decorative background ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle grid + glow orbs for depth */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(69,173,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(69,173,255,0.05) 1px, transparent 1px)',
            backgroundSize: '54px 54px',
            maskImage: 'radial-gradient(ellipse 75% 60% at 50% 40%, #000 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 60% at 50% 40%, #000 40%, transparent 100%)',
          }}
        />
        <div className="absolute -top-20 right-[10%] w-[380px] h-[380px] rounded-full bg-[#45ADFF]/12 blur-[120px]" />
        <div className="absolute -bottom-32 -right-16 w-[440px] h-[440px] rounded-full bg-[#296899]/20 blur-[130px]" />

        {/* "Contact" outlined vertical watermark — right (desktop) */}
        <span
          className="hidden lg:block absolute right-0 md:right-2 top-1/2 -translate-y-1/2 font-medium leading-none select-none"
          style={{ fontSize: 'clamp(78px, 11vw, 180px)', color: 'transparent', WebkitTextStroke: '1.5px #FFFFFF', opacity: 0.5, writingMode: 'vertical-rl' }}
        >
          Contact
        </span>
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-8 lg:px-16 2xl:px-32">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#45ADFF]/25 bg-[#45ADFF]/10 text-[#45ADFF] text-xs font-semibold uppercase tracking-[0.18em]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#45ADFF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#45ADFF]" />
            </span>
            Contact Us
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#45ADFF] leading-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-white/60 text-base md:text-lg">Let Us Know How We Can Help</p>
        </motion.div>

        {/* ── Unified contact console ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto rounded-[32px] p-[1px] bg-gradient-to-br from-[#45ADFF]/45 via-white/10 to-transparent shadow-2xl shadow-black/40"
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] rounded-[31px] overflow-hidden"
            style={{
              background: 'rgba(11,18,36,0.72)',
              backdropFilter: 'blur(45px)',
              WebkitBackdropFilter: 'blur(45px)',
            }}
          >
            {/* Left rail — info timeline */}
            <div
              className="relative p-7 sm:p-9 md:p-11 border-b lg:border-b-0 lg:border-r border-white/[0.08]"
              style={{ background: 'linear-gradient(160deg, rgba(69,173,255,0.14) 0%, rgba(41,104,153,0.05) 55%, transparent 100%)' }}
            >
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-1">Let's talk</h3>
              <p className="text-white/50 text-sm mb-9">We usually reply within a few hours.</p>

              {/* Timeline of contact nodes */}
              <div className="relative">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  const isLast = i === contactInfo.length - 1;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.label === 'LOCATION' ? '_blank' : undefined}
                      rel={item.label === 'LOCATION' ? 'noopener noreferrer' : undefined}
                      className="group relative flex gap-5 pb-9 last:pb-0"
                    >
                      {/* connecting line */}
                      {!isLast && (
                        <span className="absolute left-[27px] top-14 bottom-1 w-px bg-gradient-to-b from-[#45ADFF]/50 to-[#45ADFF]/5" />
                      )}
                      {/* node */}
                      <span className="relative z-10 flex-shrink-0 grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#45ADFF] to-[#296899] text-white shadow-lg shadow-[#45ADFF]/25 group-hover:scale-105 transition-transform">
                        <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
                        <Icon size={18} />
                      </span>
                      <div className="min-w-0 pt-1">
                        <p className="text-[#45ADFF] text-xs font-semibold uppercase tracking-[0.16em] mb-1.5">
                          {item.label}
                        </p>
                        <p className="text-white text-sm md:text-base font-medium leading-relaxed whitespace-pre-line break-words group-hover:text-[#45ADFF] transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Socials */}
              <div className="mt-9 pt-7 border-t border-white/[0.08]">
                <p className="text-white/45 text-xs uppercase tracking-[0.16em] mb-3">Follow Us</p>
                <div className="flex items-center gap-3">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="grid place-items-center w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] text-white/70 hover:text-white hover:border-[#45ADFF]/50 hover:bg-[#45ADFF]/10 transition-all"
                      >
                        <Icon size={15} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="p-7 sm:p-9 md:p-11">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[#45ADFF] text-sm font-medium mb-2 block">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter Full Name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-[#45ADFF] text-sm font-medium mb-2 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter Your Email"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#45ADFF] text-sm font-medium mb-2 block">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your Subject"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-[#45ADFF] text-sm font-medium mb-2 block">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Type Your Message"
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-[#45ADFF] to-[#2E8BD6] text-white font-semibold text-base hover:shadow-xl hover:shadow-[#45ADFF]/25 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                  {!isSubmitting && (
                    <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  )}
                </button>

                {statusMessage.text && (
                  <div
                    className={`mt-2 p-3 rounded-xl text-sm text-center font-medium ${
                      statusMessage.type === 'success'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {statusMessage.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
