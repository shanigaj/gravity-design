import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CareerPage from './pages/CareerPage';
import CareerDetailPage from './pages/CareerDetailPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className="min-h-screen bg-primary-dark">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/career/:slug" element={<CareerDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<HomePage />} />
          <Route path="/team" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
