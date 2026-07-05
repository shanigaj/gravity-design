import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { FaImage, FaUsers, FaImages, FaBlog } from 'react-icons/fa';

export default function DashboardPage() {
  const [stats, setStats] = useState({ hero: false, team: 0, gallery: 0, blog: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const heroSnap = await getDocs(collection(db, 'siteImages'));
        const gallerySnap = await getDocs(collection(db, 'gallery'));
        const blogSnap = await getDocs(collection(db, 'blogPosts'));

        let heroExists = false;
        let teamCount = 0;
        heroSnap.forEach((doc) => {
          const data = doc.data();
          if (doc.id === 'hero' && data.url) heroExists = true;
          if (doc.id === 'team' && data.photos) teamCount = data.photos.filter(p => p).length;
        });

        setStats({
          hero: heroExists,
          team: teamCount,
          gallery: gallerySnap.size,
          blog: blogSnap.size,
        });
      } catch (err) {
        console.log('Firestore not configured yet');
      }
    };
    fetchStats();
  }, []);

  const cards = [
    { label: 'Hero Image', value: stats.hero ? 'Uploaded' : 'Not set', icon: <FaImage size={24} />, color: stats.hero ? 'text-green-400' : 'text-yellow-400' },
    { label: 'Team Photos', value: `${stats.team} / 8`, icon: <FaUsers size={24} />, color: 'text-[#45ADFF]' },
    { label: 'Gallery Photos', value: stats.gallery.toString(), icon: <FaImages size={24} />, color: 'text-[#45ADFF]' },
    { label: 'Blog Posts', value: stats.blog.toString(), icon: <FaBlog size={24} />, color: 'text-[#45ADFF]' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-1 font-heading">Dashboard</h2>
      <p className="text-white/40 text-sm mb-8">Welcome back! Here's your website overview.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 bg-white/[0.03] border border-white/5 hover:border-[#45ADFF]/20 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/30">{card.icon}</span>
            </div>
            <p className={`text-2xl font-bold ${card.color} font-heading`}>{card.value}</p>
            <p className="text-white/40 text-sm mt-1">{card.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl p-6 bg-white/[0.03] border border-white/5">
        <h3 className="text-lg font-semibold text-white mb-4 font-heading">Quick Guide</h3>
        <div className="space-y-3 text-white/50 text-sm">
          <p>📌 Use the <span className="text-[#45ADFF]">sidebar</span> to navigate between sections.</p>
          <p>📌 Upload images in each section — they'll automatically appear on the live website.</p>
          <p>📌 Create <span className="text-[#45ADFF]">blog posts</span> to share news and updates.</p>
          <p>📌 Update your <span className="text-[#45ADFF]">company logo</span> in Settings.</p>
        </div>
      </div>
    </div>
  );
}
