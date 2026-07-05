import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, getDoc, setDoc, query, where, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import ImageUploader from '../components/ImageUploader';
import { FaTrash, FaPlus } from 'react-icons/fa';

export default function GalleryManagePage() {
  const [activeYear, setActiveYear] = useState('2022');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [years, setYears] = useState(['2022', '2023', '2024']);
  const [newYear, setNewYear] = useState('');
  const [addingYear, setAddingYear] = useState(false);

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const snap = await getDoc(doc(db, 'siteImages', 'gallerySettings'));
        if (snap.exists() && snap.data().years) {
          setYears(snap.data().years);
          if (!snap.data().years.includes(activeYear)) {
            setActiveYear(snap.data().years[0] || '2022');
          }
        }
      } catch (err) { console.log('Firestore not ready for years'); }
    };
    fetchYears();
  }, []);

  const handleAddYear = async (e) => {
    e.preventDefault();
    if (!newYear.trim() || years.includes(newYear.trim())) return;
    
    const updatedYears = [...years, newYear.trim()].sort((a, b) => b.localeCompare(a));
    try {
      await setDoc(doc(db, 'siteImages', 'gallerySettings'), { years: updatedYears }, { merge: true });
      setYears(updatedYears);
      setActiveYear(newYear.trim());
      setNewYear('');
      setAddingYear(false);
    } catch (err) {
      console.error('Error adding year:', err);
    }
  };

  const fetchPhotos = async (year) => {
    setLoading(true);
    try {
      const q = query(collection(db, 'gallery'), where('year', '==', year), orderBy('createdAt', 'desc'));
      const snap = await getDocs(q);
      setPhotos(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (err) {
      console.log('Firestore not ready');
      setPhotos([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPhotos(activeYear);
  }, [activeYear]);

  const handleAddPhoto = async (url) => {
    if (!url) return;
    try {
      await addDoc(collection(db, 'gallery'), {
        url,
        year: activeYear,
        createdAt: new Date(),
      });
      fetchPhotos(activeYear);
    } catch (err) {
      console.error('Error adding photo:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this photo?')) return;
    try {
      await deleteDoc(doc(db, 'gallery', id));
      setPhotos(photos.filter(p => p.id !== id));
    } catch (err) {
      console.error('Error deleting:', err);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-1 font-heading">Gallery</h2>
      <p className="text-white/40 text-sm mb-8">Manage event photos by year for the Gallery page.</p>

      {/* Year Tabs */}
      <div className="flex flex-wrap gap-3 mb-8 items-center">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              activeYear === year
                ? 'bg-[#45ADFF] text-white shadow-lg shadow-[#45ADFF]/30'
                : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60'
            }`}
          >
            {year}
          </button>
        ))}

        {!addingYear ? (
          <button
            onClick={() => setAddingYear(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all cursor-pointer text-sm"
          >
            <FaPlus size={12} /> Add Year
          </button>
        ) : (
          <form onSubmit={handleAddYear} className="flex items-center gap-2">
            <input
              type="text"
              value={newYear}
              onChange={(e) => setNewYear(e.target.value)}
              placeholder="e.g. 2025"
              className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-white w-24 focus:outline-none focus:border-[#45ADFF]"
              autoFocus
            />
            <button type="submit" className="text-[#45ADFF] text-sm hover:underline cursor-pointer">Save</button>
            <button type="button" onClick={() => setAddingYear(false)} className="text-white/40 text-sm hover:text-white cursor-pointer">Cancel</button>
          </form>
        )}
      </div>

      {/* Add New Photo */}
      <div className="mb-8 max-w-sm">
        <ImageUploader
          storagePath={`gallery/${activeYear}`}
          onUploadComplete={handleAddPhoto}
          label={`Add Photo to ${activeYear}`}
        />
      </div>

      {/* Photo Grid */}
      {loading ? (
        <div className="text-white/30 text-sm">Loading...</div>
      ) : photos.length === 0 ? (
        <div className="rounded-2xl p-8 bg-white/[0.02] border border-white/5 text-center">
          <p className="text-white/30 text-sm">No photos for {activeYear} yet. Upload one above!</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="group relative rounded-xl overflow-hidden border border-white/5 bg-white/[0.02]">
              <img src={photo.url} alt="Gallery" className="w-full h-36 object-cover" />
              <button
                onClick={() => handleDelete(photo.id)}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-red-500/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-red-500"
              >
                <FaTrash size={12} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
