import { useState, useEffect } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import ImageUploader from '../components/ImageUploader';

export default function TeamPhotosPage() {
  const [photos, setPhotos] = useState(Array(8).fill(''));
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let unsub;
    try {
      unsub = onSnapshot(doc(db, 'siteImages', 'team'), (snap) => {
        if (snap.exists() && snap.data().photos) {
          const p = snap.data().photos;
          setPhotos([...p, ...Array(8 - p.length).fill('')].slice(0, 8));
        }
      });
    } catch (err) { console.log('Firestore not ready'); }
    return () => unsub?.();
  }, []);

  const handleUpload = async (index, url) => {
    setPhotos(prev => {
      const updated = [...prev];
      updated[index] = url;
      // Fire and forget Firestore update to avoid stale closures blocking
      setDoc(doc(db, 'siteImages', 'team'), { photos: updated, updatedAt: new Date() }, { merge: true })
        .then(() => {
          setSaved(true);
          setTimeout(() => setSaved(false), 3000);
        })
        .catch(err => console.error('Save error:', err));
      return updated;
    });
  };

  const labels = [
    'Row 1 — Position 1 (Offset Down)',
    'Row 1 — Position 2',
    'Row 1 — Position 3',
    'Row 1 — Position 4 (Slight Offset)',
    'Row 2 — Position 1',
    'Row 2 — Position 2',
    'Row 2 — Position 3',
    'Row 2 — Position 4',
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-1 font-heading">Team Photos</h2>
      <p className="text-white/40 text-sm mb-8">Upload 8 team member photos for the staggered grid on the homepage.</p>

      {saved && (
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 mb-6 text-green-400 text-sm">
          ✅ Team photo saved successfully!
        </div>
      )}

      {/* Row 1 */}
      <h3 className="text-white/60 text-sm font-semibold mb-4 uppercase tracking-wider">Row 1 (Top)</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {photos.slice(0, 4).map((url, i) => (
          <ImageUploader
            key={i}
            storagePath={`team/member-${i + 1}`}
            currentUrl={url}
            onUploadComplete={(newUrl) => handleUpload(i, newUrl)}
            label={labels[i]}
          />
        ))}
      </div>

      {/* Row 2 */}
      <h3 className="text-white/60 text-sm font-semibold mb-4 uppercase tracking-wider">Row 2 (Bottom)</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.slice(4, 8).map((url, i) => (
          <ImageUploader
            key={i + 4}
            storagePath={`team/member-${i + 5}`}
            currentUrl={url}
            onUploadComplete={(newUrl) => handleUpload(i + 4, newUrl)}
            label={labels[i + 4]}
          />
        ))}
      </div>
    </div>
  );
}
