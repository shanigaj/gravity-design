import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CareerPage from './pages/CareerPage';
import CareerDetailPage from './pages/CareerDetailPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ScrollToTop from './components/ScrollToTop';

// Admin
import AdminLogin from './admin/AdminLogin';
import AdminLayout from './admin/AdminLayout';
import ProtectedRoute from './admin/components/ProtectedRoute';
import DashboardPage from './admin/pages/DashboardPage';
import HeroImagePage from './admin/pages/HeroImagePage';
import TeamPhotosPage from './admin/pages/TeamPhotosPage';
import StatsBackgroundPage from './admin/pages/StatsBackgroundPage';
import GalleryManagePage from './admin/pages/GalleryManagePage';
import AboutImagesPage from './admin/pages/AboutImagesPage';
import BlogManagePage from './admin/pages/BlogManagePage';
import SettingsPage from './admin/pages/SettingsPage';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className="min-h-screen bg-primary-dark">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/career/:slug" element={<CareerDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/team" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="hero-image" element={<HeroImagePage />} />
            <Route path="team-photos" element={<TeamPhotosPage />} />
            <Route path="stats-bg" element={<StatsBackgroundPage />} />
            <Route path="gallery" element={<GalleryManagePage />} />
            <Route path="about-images" element={<AboutImagesPage />} />
            <Route path="blog" element={<BlogManagePage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
