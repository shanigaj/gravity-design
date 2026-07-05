import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import {
  FaHome, FaImage, FaUsers, FaChartBar, FaImages,
  FaInfoCircle, FaBlog, FaCog, FaSignOutAlt, FaTachometerAlt
} from 'react-icons/fa';

const menuItems = [
  { label: 'Dashboard', icon: <FaTachometerAlt size={18} />, path: '/admin' },
  { type: 'divider', label: 'Home Page' },
  { label: 'Hero Image', icon: <FaImage size={18} />, path: '/admin/hero-image' },
  { label: 'Team Photos', icon: <FaUsers size={18} />, path: '/admin/team-photos' },
  { label: 'Stats Background', icon: <FaChartBar size={18} />, path: '/admin/stats-bg' },
  { type: 'divider', label: 'About Page' },
  { label: 'About Images', icon: <FaInfoCircle size={18} />, path: '/admin/about-images' },
  { type: 'divider', label: 'Media' },
  { label: 'Gallery', icon: <FaImages size={18} />, path: '/admin/gallery' },
  { label: 'Blog Posts', icon: <FaBlog size={18} />, path: '/admin/blog' },
  { type: 'divider', label: 'General' },
  { label: 'Settings', icon: <FaCog size={18} />, path: '/admin/settings' },
];

export default function AdminSidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin/login');
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[260px] bg-[#0D1529] border-r border-white/5 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="px-6 py-6 border-b border-white/5">
          <img src="/images/company-logo.png" alt="Gravity Tech World" className="h-10 w-auto" />
          <p className="text-white/30 text-[10px] mt-1 uppercase tracking-widest">Admin Panel</p>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {menuItems.map((item, i) => {
            if (item.type === 'divider') {
              return (
                <p key={i} className="text-white/25 text-[10px] uppercase tracking-[0.15em] font-semibold px-3 mt-6 mb-2">
                  {item.label}
                </p>
              );
            }
            return (
              <NavLink
                key={i}
                to={item.path}
                end={item.path === '/admin'}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 mb-1 ${
                    isActive
                      ? 'bg-[#45ADFF]/15 text-[#45ADFF] shadow-sm'
                      : 'text-white/50 hover:bg-white/5 hover:text-white/80'
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-red-400/70 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 w-full cursor-pointer"
          >
            <FaSignOutAlt size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
