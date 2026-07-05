import { useState, useEffect } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import ImageUploader from '../components/ImageUploader';

export default function StatsBackgroundPage() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let unsub;
    try {
      unsub = onSnapshot(doc(db, 'siteImages', 'statsBg'), (snap) => {
        if (snap.exists()) setCurrentUrl(snap.data().url || '');
      });
    } catch (err) { console.log('Firestore not ready'); }
    return () => unsub?.();
  }, []);

  const handleUpload = async (url) => {
    setCurrentUrl(url);
    try {
      await setDoc(doc(db, 'siteImages', 'statsBg'), { url, updatedAt: new Date() }, { merge: true });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) { console.error('Save error:', err); }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-1 font-heading">Stats Background</h2>
      <p className="text-white/40 text-sm mb-8">Upload the parallax background image for the statistics section.</p>

      {saved && (
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 mb-6 text-green-400 text-sm">
          ✅ Stats background saved!
        </div>
      )}

      <div className="max-w-lg">
        <ImageUploader
          storagePath="stats"
          currentUrl={currentUrl}
          onUploadComplete={handleUpload}
          label="Background Image"
        />
      </div>

      <div className="mt-6 rounded-2xl p-4 bg-white/[0.03] border border-white/5 max-w-lg">
        <p className="text-white/30 text-xs">
          💡 Recommended: Wide landscape photo (1920×600px+). Team working photos work great here.
        </p>
      </div>
    </div>
  );
}
