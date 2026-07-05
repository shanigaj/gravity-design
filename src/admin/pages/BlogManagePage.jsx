import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';
import ImageUploader from '../components/ImageUploader';
import { FaTrash, FaEdit, FaPlus, FaTimes, FaSave } from 'react-icons/fa';

export default function BlogManagePage() {
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(null); // null = list, 'new' = create, id = editing
  const [form, setForm] = useState({ title: '', content: '', thumbnail: '', author: 'Gravity Tech World' });
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'));
      const snap = await getDocs(q);
      setPosts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (err) {
      console.log('Firestore not ready');
    }
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleSave = async () => {
    if (!form.title.trim() || !form.content.trim()) {
      alert('Title and content are required');
      return;
    }
    setLoading(true);
    try {
      if (editing === 'new') {
        await addDoc(collection(db, 'blogPosts'), {
          ...form,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      } else {
        await updateDoc(doc(db, 'blogPosts', editing), {
          ...form,
          updatedAt: new Date(),
        });
      }
      setEditing(null);
      setForm({ title: '', content: '', thumbnail: '', author: 'Gravity Tech World' });
      fetchPosts();
    } catch (err) {
      console.error('Save error:', err);
    }
    setLoading(false);
  };

  const handleEdit = (post) => {
    setForm({ title: post.title, content: post.content, thumbnail: post.thumbnail || '', author: post.author || 'Gravity Tech World' });
    setEditing(post.id);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this blog post?')) return;
    try {
      await deleteDoc(doc(db, 'blogPosts', id));
      setPosts(posts.filter(p => p.id !== id));
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  // Editor View
  if (editing) {
    return (
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white font-heading">
              {editing === 'new' ? 'New Blog Post' : 'Edit Blog Post'}
            </h2>
          </div>
          <button
            onClick={() => { setEditing(null); setForm({ title: '', content: '', thumbnail: '', author: 'Gravity Tech World' }); }}
            className="text-white/40 hover:text-white transition-colors cursor-pointer"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="space-y-6 max-w-3xl">
          <div>
            <label className="text-[#45ADFF] text-sm font-medium mb-2 block">Title</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Blog post title..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#45ADFF]/50 transition-colors"
            />
          </div>

          <div>
            <label className="text-[#45ADFF] text-sm font-medium mb-2 block">Author</label>
            <input
              type="text"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              placeholder="Author name"
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#45ADFF]/50 transition-colors"
            />
          </div>

          <ImageUploader
            storagePath="blog"
            currentUrl={form.thumbnail}
            onUploadComplete={(url) => setForm({ ...form, thumbnail: url })}
            label="Thumbnail Image"
          />

          <div>
            <label className="text-[#45ADFF] text-sm font-medium mb-2 block">Content</label>
            <textarea
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              placeholder="Write your blog post content here..."
              rows={12}
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#45ADFF]/50 transition-colors resize-none leading-relaxed"
            />
          </div>

          <button
            onClick={handleSave}
            disabled={loading}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-[#45ADFF] text-white font-semibold hover:bg-[#3a9ae8] transition-all cursor-pointer disabled:opacity-50"
          >
            <FaSave size={16} />
            {loading ? 'Saving...' : 'Save Post'}
          </button>
        </div>
      </div>
    );
  }

  // List View
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white font-heading">Blog Posts</h2>
          <p className="text-white/40 text-sm mt-1">Create and manage blog posts.</p>
        </div>
        <button
          onClick={() => setEditing('new')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#45ADFF] text-white text-sm font-semibold hover:bg-[#3a9ae8] transition-all cursor-pointer"
        >
          <FaPlus size={14} />
          New Post
        </button>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-2xl p-8 bg-white/[0.02] border border-white/5 text-center">
          <p className="text-white/30 text-sm">No blog posts yet. Create your first one!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post.id} className="rounded-xl p-4 bg-white/[0.03] border border-white/5 flex items-center gap-4 hover:border-[#45ADFF]/20 transition-colors">
              {post.thumbnail && (
                <img src={post.thumbnail} alt="" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium text-sm truncate">{post.title}</h3>
                <p className="text-white/30 text-xs mt-1 truncate">{post.content?.substring(0, 100)}...</p>
                <p className="text-white/20 text-[10px] mt-1">
                  By {post.author} • {post.createdAt?.toDate?.()?.toLocaleDateString?.() || 'Draft'}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button onClick={() => handleEdit(post)} className="w-8 h-8 rounded-lg bg-[#45ADFF]/10 text-[#45ADFF] flex items-center justify-center hover:bg-[#45ADFF]/20 transition-colors cursor-pointer">
                  <FaEdit size={14} />
                </button>
                <button onClick={() => handleDelete(post.id)} className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition-colors cursor-pointer">
                  <FaTrash size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
