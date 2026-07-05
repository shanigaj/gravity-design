import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { FaCalendarAlt, FaUser, FaArrowLeft } from 'react-icons/fa';

export default function BlogDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const snap = await getDoc(doc(db, 'blogPosts', id));
        if (snap.exists()) {
          setPost({ id: snap.id, ...snap.data() });
        }
      } catch (err) {
        console.error('Error fetching post:', err);
      }
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-primary-dark flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-[#45ADFF]/30 border-t-[#45ADFF] rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-primary-dark flex flex-col justify-center items-center">
        <h1 className="text-2xl text-white mb-4">Post not found</h1>
        <Link to="/blog" className="text-[#45ADFF] hover:underline">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <SEO title={post.title} description={post.content.substring(0, 150)} />
      <Navbar />

      <section className="pt-32 pb-20 bg-primary-dark min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-[#45ADFF] text-sm hover:underline mb-8">
              <FaArrowLeft size={12} /> Back to Blog
            </Link>

            <h1 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-white/40 mb-10 border-b border-white/10 pb-6">
              <span className="flex items-center gap-2"><FaCalendarAlt /> {post.createdAt?.toDate?.()?.toLocaleDateString?.(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="flex items-center gap-2"><FaUser /> {post.author}</span>
            </div>

            {post.thumbnail && (
              <img src={post.thumbnail} alt={post.title} className="w-full rounded-2xl mb-12 shadow-2xl shadow-black/50" />
            )}

            <div className="prose prose-invert prose-lg max-w-none text-white/80 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
