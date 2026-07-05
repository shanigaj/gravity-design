import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'));
        const snap = await getDocs(q);
        setPosts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      } catch (err) {
        console.error('Error fetching blogs:', err);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <SEO title="Blog" description="Read the latest news and insights from Gravity Tech World." />
      <Navbar />

      <section className="pt-32 pb-20 bg-primary-dark min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-accent italic mb-4">Our Blog</h1>
            <p className="text-text-secondary text-sm max-w-2xl mx-auto">
              Stay updated with the latest news, tech insights, and stories from our team.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="w-10 h-10 border-4 border-[#45ADFF]/30 border-t-[#45ADFF] rounded-full animate-spin" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center text-white/40 py-20">
              No blog posts available at the moment. Check back soon!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden hover:border-[#45ADFF]/30 transition-all group flex flex-col"
                >
                  <Link to={`/blog/${post.id}`} className="block relative aspect-video overflow-hidden">
                    {post.thumbnail ? (
                      <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full bg-[#1E2A45] flex items-center justify-center">
                        <span className="text-white/20">No Image</span>
                      </div>
                    )}
                  </Link>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-[11px] text-white/40 mb-3 uppercase tracking-wider">
                      <span className="flex items-center gap-1.5"><FaCalendarAlt /> {post.createdAt?.toDate?.()?.toLocaleDateString?.()}</span>
                      <span className="flex items-center gap-1.5"><FaUser /> {post.author}</span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <h2 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-[#45ADFF] transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-white/50 text-sm line-clamp-3 mb-6 flex-1">
                      {post.content}
                    </p>
                    <Link to={`/blog/${post.id}`} className="text-[#45ADFF] text-sm font-semibold hover:underline">
                      Read More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
