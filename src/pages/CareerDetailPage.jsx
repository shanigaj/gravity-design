import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const jobDetails = {
  'web-developer': {
    title: 'Web Developer',
    intro: 'We Are Looking For A Skilled And Innovative Web Developer To Join Our Team. The Ideal Candidate Will Design, Develop, And Maintain Dynamic, User-Friendly Websites And Web Applications That Align With Our Business Goals. This Role Involves Collaboration With Cross-Functional Teams To Deliver Cutting-Edge Solutions And Improve The Digital Experience For Our Users.',
    responsibilities: [
      'Design, Develop, And Maintain High-Quality Websites And Web Applications.',
      'Collaborate With Product Managers, And Other Developers To Implement Website Features And Functionalities.',
      'Write Clean, Efficient, And Well-Documented Code Using Technologies Such As HTML5, CSS3, JavaScript, And Modern Frameworks Like React Or Angular.',
      'Ensure Websites And Applications Are Responsive, Optimized For Performance, And Cross-Browser Compatible.',
      'Debug And Resolve Technical Issues Across Different Platforms And Devices.',
      'Integrate RESTful APIs And Third-Party Services Into Web Applications.',
      'Stay Updated On Emerging Technologies, Trends, And Best Practices In Web Development.',
      'Optimize Websites For SEO And Implement Analytics Tools For Performance Tracking.',
    ],
    requirements: [
      'Proficiency In Front-End Technologies Like HTML5, CSS3, JavaScript (ES6+), And Frameworks Such As React, Angular, Or Vue.js.',
      'Knowledge Of Back-End Development Using Node.js, PHP, Python (Django/Flask), Or Other Server-Side Technologies.',
      'Experience With Database Systems (MySQL, PostgreSQL, MongoDB).',
      'Familiarity With Version Control Systems (Git, GitHub/Bitbucket).',
      'Understanding Of Responsive Design Principles And Tools Like Bootstrap Or Tailwind CSS.',
      'Knowledge Of Web Hosting And Deployment Processes.',
    ],
    experience: '2–5 Years Of Professional Web Development Experience.',
    portfolio: 'A Strong Portfolio Showcasing Your Web Development Projects.',
    benefits: [
      'Competitive Salary And Performance Bonuses.',
      'Flexible Working Hours.',
      'Opportunities For Professional Development And Training.',
      'A Dynamic And Inclusive Workplace Culture.',
    ],
  },
  'digital-marketing': {
    title: 'Digital Marketing Executive',
    intro: 'We Are Seeking A Creative And Analytical Digital Marketing Executive To Join Our Dynamic Team. The Ideal Candidate Will Plan And Execute Digital Marketing Campaigns, Improve Online Brand Visibility, And Contribute To The Company\'s Overall Growth. This Role Requires Expertise In Managing Various Digital Platforms, Analyzing Performance Metrics, And Optimizing Strategies To Meet Business Objectives.',
    responsibilities: [
      'Plan, Develop, And Execute Digital Marketing Campaigns, Including SEO, SEM, Social Media, Email Marketing, And Content Marketing.',
      'Manage And Maintain The Company\'s Website, Ensuring It Is Optimized For Performance, SEO, And User Experience.',
      'Develop Engaging Content For Social Media Platforms And Manage Online Communities To Build Brand Awareness And Customer Engagement.',
      'Create, Monitor, And Analyze Paid Advertising Campaigns On Platforms Such As Google Ads, Facebook, Instagram, And LinkedIn.',
      'Conduct Keyword Research And Implement On-Page And Off-Page SEO Strategies To Enhance Website Rankings.',
      'Collaborate With The Content, Design, And Product Teams To Create Marketing Assets That Align With Business Goals.',
      'Monitor Competitors\' Digital Strategies And Provide Actionable Insights.',
    ],
    requirements: [
      'Proficiency In Digital Marketing Tools Such As Google Ads, Facebook Business Manager, And Email Marketing Platforms.',
      'Solid Understanding Of SEO, SEM, And Content Marketing.',
      'Experience With Database Systems (MySQL, PostgreSQL, MongoDB).',
      'Hands-On Experience With Web Analytics Tools Like Google Analytics And SEMrush.',
      'Familiarity With Social Media Platforms And Their Advertising Capabilities.',
      'Basic Graphic Design Skills (Using Canva Or Adobe Suite) And Video Editing Knowledge Is A Plus.',
    ],
    experience: '2–4 Years Of Experience In Digital Marketing Or Related Fields.',
    portfolio: 'Proven Track Record Of Running Successful Digital Marketing Campaigns.',
    benefits: [
      'Competitive Salary And Performance Bonuses.',
      'Opportunities For Professional Development And Training.',
      'Flexible Working Hours And Remote Work Options.',
      'A Collaborative And Innovative Workplace Culture.',
    ],
  },
};

export default function CareerDetailPage() {
  const { slug } = useParams();
  const job = jobDetails[slug];
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', experience: 'Fresher', occupation: '', cv: null });

  if (!job) return <div className="min-h-screen bg-primary-dark flex items-center justify-center text-white">Job Not Found</div>;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully!');
  };

  return (
    <>
      <SEO title={job.title} description={`Apply for ${job.title} position at Gravity Tech World.`} />
      <Navbar />

      <section className="pt-28 pb-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 2xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Job Description */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold font-heading text-accent italic mb-6">{job.title}</h1>
              <p className="text-text-secondary text-sm leading-relaxed mb-8">{job.intro}</p>

              <h3 className="text-lg font-bold text-white mb-3">Key Responsibilities:</h3>
              <ul className="list-disc list-inside text-text-secondary text-sm space-y-2 mb-8">
                {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
              </ul>

              <h3 className="text-lg font-bold text-white mb-3">Requirements:</h3>
              <ul className="list-disc list-inside text-text-secondary text-sm space-y-2 mb-8">
                {job.requirements.map((r, i) => <li key={i}>{r}</li>)}
              </ul>

              <h3 className="text-lg font-bold text-white mb-2">Experience:</h3>
              <ul className="list-disc list-inside text-text-secondary text-sm space-y-1 mb-6">
                <li>{job.experience}</li>
                <li>{job.portfolio}</li>
              </ul>

              <h3 className="text-lg font-bold text-white mb-2">Benefits:</h3>
              <ul className="list-disc list-inside text-text-secondary text-sm space-y-1">
                {job.benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </motion.div>

            {/* Apply Now Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="glass-card p-8 sticky top-28">
                <h2 className="text-2xl font-bold font-heading text-accent mb-6">Apply Now</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-accent text-sm font-medium mb-1 block">Full Name</label>
                    <input type="text" name="name" placeholder="Enter Full Name" value={formData.name} onChange={handleChange} required
                      className="w-full bg-primary-dark/60 border border-card-border rounded-lg px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="text-accent text-sm font-medium mb-1 block">Email Address</label>
                    <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required
                      className="w-full bg-primary-dark/60 border border-card-border rounded-lg px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="text-accent text-sm font-medium mb-1 block">Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter Your Phone Number" value={formData.phone} onChange={handleChange}
                      className="w-full bg-primary-dark/60 border border-card-border rounded-lg px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="text-accent text-sm font-medium mb-1 block">Total Experience</label>
                    <select name="experience" value={formData.experience} onChange={handleChange}
                      className="w-full bg-primary-dark/60 border border-card-border rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                      <option value="Fresher">Fresher</option>
                      <option value="1-2 Years">1-2 Years</option>
                      <option value="2-4 Years">2-4 Years</option>
                      <option value="4+ Years">4+ Years</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-accent text-sm font-medium mb-1 block">Current Occupation</label>
                    <input type="text" name="occupation" placeholder="Enter Your Current Designation" value={formData.occupation} onChange={handleChange}
                      className="w-full bg-primary-dark/60 border border-card-border rounded-lg px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="text-accent text-sm font-medium mb-1 block">Upload CV</label>
                    <input type="file" accept=".pdf,.doc,.docx"
                      className="w-full bg-primary-dark/60 border border-card-border rounded-lg px-4 py-3 text-text-muted text-sm file:mr-4 file:bg-blue-btn file:text-white file:border-0 file:rounded-md file:px-3 file:py-1 file:text-xs file:cursor-pointer" />
                  </div>
                  <button type="submit" className="w-full bg-blue-btn text-white py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-btn/30 transition-all cursor-pointer text-lg mt-2">
                    Send
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
