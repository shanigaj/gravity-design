import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection, getDocs, doc, getDoc, query, where, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function GalleryPage() {
  const [years, setYears] = useState(['2022', '2023', '2024']);
  const [activeYear, setActiveYear] = useState('2022');
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const snap = await getDoc(doc(db, 'siteImages', 'gallerySettings'));
        if (snap.exists() && snap.data().years) {
          const fetchedYears = snap.data().years;
          setYears(fetchedYears);
          if (!fetchedYears.includes(activeYear)) {
            setActiveYear(fetchedYears[0] || '2022');
          }
        }
      } catch (err) { console.log('Firestore not ready for years'); }
    };
    fetchYears();
  }, []);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const q = query(collection(db, 'gallery'), where('year', '==', activeYear));
        const snap = await getDocs(q);
        
        // Sort in JavaScript to avoid Firestore index requirement
        const docs = snap.docs.map(d => d.data());
        docs.sort((a, b) => b.createdAt?.toMillis() - a.createdAt?.toMillis());
        
        const urls = docs.map(d => d.url);
        setPhotos(urls.length > 0 ? urls : []);
      } catch (err) {
        console.error('Fetch error:', err);
        setPhotos([]);
      }
    };
    fetchPhotos();
  }, [activeYear]);

  // Duplicate photos for infinite marquee effect (need enough to fill screen)
  const marqueePhotos = photos.length > 0 
    ? [...photos, ...photos, ...photos] 
    : [...Array(10)];

  return (
    <>
      <SEO title="Gallery" description="Explore events, celebrations and memories at Gravity Tech World." />
      <Navbar />

      <section className="pt-28 pb-20 bg-primary-dark min-h-screen">
        <div className="w-full mx-auto px-4">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold font-heading text-accent italic text-center mb-8"
          >
            Event & Celebration
          </motion.h1>

          {/* Year Filter Tabs */}
          <div className="flex justify-center gap-3 mb-12">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeYear === year
                    ? 'bg-blue-btn text-white shadow-lg shadow-blue-btn/30'
                    : 'bg-transparent border border-text-secondary/30 text-text-secondary hover:border-accent hover:text-accent'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Photo Carousel */}
          <motion.div
            key={activeYear}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden space-y-6"
          >
            {/* Top Row - Sliding Right */}
            <div className="flex overflow-hidden">
              <div 
                className="flex animate-marquee-reverse whitespace-nowrap items-center hover:[animation-play-state:paused]"
                style={{ animationDuration: `${marqueePhotos.length * 1.5}s` }}
              >
                {marqueePhotos.map((item, i) => (
                  <div
                    key={`top-${i}`}
                    className="w-[240px] md:w-[300px] h-[180px] md:h-[220px] mx-3 flex-shrink-0 rounded-[20px] bg-[#2A344A] border border-transparent overflow-hidden group cursor-pointer hover:border-accent transition-all duration-300 shadow-lg"
                  >
                    {photos.length > 0 && typeof item === 'string' ? (
                      <img src={item} alt={`Gallery ${activeYear}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center group-hover:from-accent/10 group-hover:to-primary-light transition-all duration-300">
                        <span className="text-text-muted/30 text-sm group-hover:text-accent/50 transition-colors">Photo</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row - Sliding Left */}
            <div className="flex overflow-hidden">
              <div 
                className="flex animate-marquee whitespace-nowrap items-center hover:[animation-play-state:paused]"
                style={{ animationDuration: `${marqueePhotos.length * 1.5}s` }}
              >
                {marqueePhotos.map((item, i) => (
                  <div
                    key={`bottom-${i}`}
                    className="w-[240px] md:w-[300px] h-[180px] md:h-[220px] mx-3 flex-shrink-0 rounded-[20px] bg-[#2A344A] border border-transparent overflow-hidden group cursor-pointer hover:border-accent transition-all duration-300 shadow-lg"
                  >
                    {photos.length > 0 && typeof item === 'string' ? (
                      <img src={item} alt={`Gallery ${activeYear}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center group-hover:from-accent/10 group-hover:to-primary-light transition-all duration-300">
                        <span className="text-text-muted/30 text-sm group-hover:text-accent/50 transition-colors">Photo</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
