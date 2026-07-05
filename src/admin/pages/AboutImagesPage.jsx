import { useState, useEffect } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import ImageUploader from '../components/ImageUploader';

export default function AboutImagesPage() {
  const [heroUrl, setHeroUrl] = useState('');
  const [journeyUrl, setJourneyUrl] = useState('');
  const [saved, setSaved] = useState('');

  useEffect(() => {
    let unsub;
    try {
      unsub = onSnapshot(doc(db, 'siteImages', 'about'), (snap) => {
        if (snap.exists()) {
          setHeroUrl(snap.data().heroUrl || '');
          setJourneyUrl(snap.data().journeyUrl || '');
        }
      });
    } catch (err) { console.log('Firestore not ready'); }
    return () => unsub?.();
  }, []);

  const save = async (field, url) => {
    try {
      if (field === 'heroUrl') setHeroUrl(url);
      else setJourneyUrl(url);
      
      await setDoc(doc(db, 'siteImages', 'about'), { [field]: url, updatedAt: new Date() }, { merge: true });
      
      setSaved(field);
      setTimeout(() => setSaved(''), 3000);
    } catch (err) { console.error('Save error:', err); }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-1 font-heading">About Page Images</h2>
      <p className="text-white/40 text-sm mb-8">Manage images for the About Us page.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hero Background */}
        <div>
          {saved === 'heroUrl' && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 mb-4 text-green-400 text-sm">
              ✅ Saved!
            </div>
          )}
          <ImageUploader
            storagePath="about/hero"
            currentUrl={heroUrl}
            onUploadComplete={(url) => save('heroUrl', url)}
            label="Hero Background Image"
          />
          <p className="text-white/20 text-xs mt-2">Team photo background at the top of About page.</p>
        </div>

        {/* Journey Center */}
        <div>
          {saved === 'journeyUrl' && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 mb-4 text-green-400 text-sm">
              ✅ Saved!
            </div>
          )}
          <ImageUploader
            storagePath="about/journey"
            currentUrl={journeyUrl}
            onUploadComplete={(url) => save('journeyUrl', url)}
            label="Journey Center Image"
          />
          <p className="text-white/20 text-xs mt-2">Logo/graphic in the center of the Our Journey timeline.</p>
        </div>
      </div>
    </div>
  );
}
