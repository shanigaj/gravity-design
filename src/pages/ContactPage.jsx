import { useState } from 'react';
import { motion } from 'framer-motion';
import ParticleNetwork from '../components/ParticleNetwork';
import Navbar from '../components/Navbar';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
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
        source: 'Contact Page',
        createdAt: serverTimestamp(),
        status: 'new'
      });

      // Send Email via local/production backend
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Contact Page'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email via backend');
      }

      setStatusMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error saving message:', error);
      setStatusMessage({ type: 'error', text: 'Oops! Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatusMessage({ type: '', text: '' }), 5000);
    }
  };

  return (
    <>
      <SEO title="Contact" description="Get in touch with Gravity Tech World. We'd love to hear about your project." />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-primary-dark">
        <ParticleNetwork />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold font-heading text-white mb-4"
          >
            Contact <span className="text-accent">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            Have A Project In Mind? Let's Talk About It.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 2xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-heading text-accent mb-6">Get In Touch</h2>
              <div className="w-16 h-[3px] bg-accent mb-8" />

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="icon-circle w-12 h-12 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Our Office</h3>
                    <p className="text-text-secondary text-sm">Surat, Gujarat, India - 395006</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="icon-circle w-12 h-12 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-text-secondary text-sm">+91 12345 67890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="icon-circle w-12 h-12 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-text-secondary text-sm">info@gravitytechworld.com</p>
                  </div>
                </div>
              </div>


            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white font-heading mb-6">Send Us A Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text" name="name" placeholder="Your Name" value={formData.name}
                    onChange={handleChange} required
                    className="bg-primary-dark/60 border border-card-border rounded-lg px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                  <input
                    type="email" name="email" placeholder="Your Email" value={formData.email}
                    onChange={handleChange} required
                    className="bg-primary-dark/60 border border-card-border rounded-lg px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input
                    type="tel" name="phone" placeholder="Phone Number" value={formData.phone}
                    onChange={handleChange}
                    className="bg-primary-dark/60 border border-card-border rounded-lg px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                  <input
                    type="text" name="subject" placeholder="Subject" value={formData.subject}
                    onChange={handleChange} required
                    className="bg-primary-dark/60 border border-card-border rounded-lg px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <textarea
                  name="message" rows="5" placeholder="Your Message" value={formData.message}
                  onChange={handleChange} required
                  className="w-full bg-primary-dark/60 border border-card-border rounded-lg px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent transition-colors resize-none mb-6"
                />

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-btn text-white py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-btn/30 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send size={18} /> {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {statusMessage.text && (
                  <div className={`mt-4 p-3 rounded-lg text-sm text-center font-medium ${statusMessage.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {statusMessage.text}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
