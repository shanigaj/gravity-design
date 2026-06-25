import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Phone, Mail, MapPin } from 'lucide-react';

const perks = [
  { title: '5 Days A Week', desc: 'Enjoy A Rejuvenating Weekend Off To Support Work Life Balance And Mindful Well-being.' },
  { title: 'Flexible Timings', desc: 'Flexible Work Timing Increases Productivity And Feel Care. Look & Have To Cut.' },
  { title: 'Healthy Environment', desc: 'Enhance Job Efficiency And Decreases Sick Leave By Creating A Healthy.' },
  { title: 'Training', desc: 'Be Focused And Clear In What We Do When Understanding And Making Contributions.' },
  { title: 'Festival Celebration', desc: 'Celebrating The Festivals And The Exciting Days At The Happiest For The Company.' },
  { title: 'Growth Opportunity', desc: 'It Motivates Workers To Stick To The Workers And Perform An High As Their Potential.' },
];

const jobOpenings = [
  { title: 'Web Developer', positions: '1 Position', slug: 'web-developer' },
  { title: 'Digital Marketing Executive', positions: '1 Position', slug: 'digital-marketing' },
];

export default function CareerPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <SEO title="Career" description="Join Gravity Tech World - Explore career opportunities in web and app development." />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary-dark text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-accent text-sm uppercase tracking-widest mb-3"
        >
          CAREER
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold font-heading text-white mb-4 max-w-2xl mx-auto"
        >
          Step Into The Gravity Family And Build Your Future!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-sm max-w-3xl mx-auto leading-relaxed"
        >
          Becoming a part of gravity tech world could be the life-changing step you've been looking for, bringing endless opportunities and rewards along the way. At gravity tech world, we are more than just a workspace—it's a home away from home where we collaborate as a team to achieve a shared vision, working continuously with the latest technologies while prioritizing our greatest asset – our employees. Discover the joy of the 'Feel Good Factor' and embrace the value of 'Work-life balance' when you work with us.
        </motion.p>
      </section>

      {/* Perks */}
      <section className="py-16 bg-primary">
        <div className="w-full mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-heading text-accent text-center mb-12"
          >
            Perk Of Joining Gravity Tech World
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-bold text-accent mb-2 font-heading">{perk.title}</h3>
                <p className="text-text-secondary text-sm">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Job Openings */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-heading text-white text-center mb-10"
          >
            Latest Job Openings
          </motion.h2>

          <div className="space-y-4">
            {jobOpenings.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">{job.title}</h3>
                  <p className="text-text-secondary text-sm">{job.positions}</p>
                </div>
                <Link
                  to={`/career/${job.slug}`}
                  className="bg-blue-btn text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-btn/30 transition-all"
                >
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="py-20 bg-primary">
        <div className="w-full mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 2xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold font-heading text-accent mb-2">Get In Touch</h2>
              <p className="text-text-secondary mb-10">Let Us Know How We Can Help</p>

              <div className="space-y-8">
                <div>
                  <p className="text-accent text-sm font-semibold mb-1 flex items-center gap-2"><Phone size={16} /> CALL US</p>
                  <p className="text-white text-lg">+91 90540 74748</p>
                </div>
                <div>
                  <p className="text-accent text-sm font-semibold mb-1 flex items-center gap-2"><Mail size={16} /> EMAIL US</p>
                  <p className="text-white text-lg">info@gravitytechworld.com</p>
                </div>
                <div>
                  <p className="text-accent text-sm font-semibold mb-1 flex items-center gap-2"><MapPin size={16} /> LOCATION</p>
                  <p className="text-white">207 / 208 Shreenathji Icon, VIP Circle,<br />Uttran, Surat, Gujarat - 394105</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div>
                <label className="text-accent text-sm font-medium mb-1 block">Full Name</label>
                <input type="text" name="name" placeholder="Enter Full Name" value={formData.name} onChange={handleChange} required
                  className="w-full bg-primary-dark/60 border border-card-border rounded-lg px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label className="text-accent text-sm font-medium mb-1 block">Email</label>
                <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required
                  className="w-full bg-primary-dark/60 border border-card-border rounded-lg px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label className="text-accent text-sm font-medium mb-1 block">Subject</label>
                <input type="text" name="subject" placeholder="Enter Your Subject..." value={formData.subject} onChange={handleChange} required
                  className="w-full bg-primary-dark/60 border border-card-border rounded-lg px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label className="text-accent text-sm font-medium mb-1 block">Your Message</label>
                <textarea name="message" rows="4" placeholder="Type Your Message" value={formData.message} onChange={handleChange} required
                  className="w-full bg-primary-dark/60 border border-card-border rounded-lg px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full bg-blue-btn text-white py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-btn/30 transition-all cursor-pointer">
                Submit
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
