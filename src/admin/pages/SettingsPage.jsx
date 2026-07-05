import { useState, useEffect } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import ImageUploader from '../components/ImageUploader';

export default function SettingsPage() {
  const [logoUrl, setLogoUrl] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let unsub;
    try {
      unsub = onSnapshot(doc(db, 'siteImages', 'settings'), (snap) => {
        if (snap.exists()) setLogoUrl(snap.data().logoUrl || '');
      });
    } catch (err) { console.log('Firestore not ready'); }
    return () => unsub?.();
  }, []);

  const handleUpload = async (url) => {
    setLogoUrl(url);
    try {
      await setDoc(doc(db, 'siteImages', 'settings'), { logoUrl: url, updatedAt: new Date() }, { merge: true });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) { console.error('Save error:', err); }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-1 font-heading">Settings</h2>
      <p className="text-white/40 text-sm mb-8">Manage general website settings.</p>

      {saved && (
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 mb-6 text-green-400 text-sm">
          ✅ Logo saved successfully!
        </div>
      )}

      <div className="max-w-lg">
        <ImageUploader
          storagePath="settings"
          currentUrl={logoUrl}
          onUploadComplete={handleUpload}
          label="Company Logo"
        />
        <p className="text-white/20 text-xs mt-2">
          💡 PNG with transparent background recommended. Will appear in Navbar and Footer.
        </p>
      </div>
    </div>
  );
}
