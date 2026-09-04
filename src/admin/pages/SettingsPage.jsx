import { useState, useEffect } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth';
import { db, auth } from '../../firebase';
import ImageUploader from '../components/ImageUploader';

export default function SettingsPage() {
  const [logoUrl, setLogoUrl] = useState('');
  const [saved, setSaved] = useState(false);

  // Password change state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pwLoading, setPwLoading] = useState(false);
  const [pwError, setPwError] = useState('');
  const [pwSuccess, setPwSuccess] = useState(false);

  useEffect(() => {
    let unsub;
    try {
      unsub = onSnapshot(doc(db, 'siteImages', 'settings'), (snap) => {
        if (snap.exists()) setLogoUrl(snap.data().logoUrl || '');
      });
    } catch { console.log('Firestore not ready'); }
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

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPwError('');
    setPwSuccess(false);

    if (newPassword.length < 6) {
      setPwError('New password must be at least 6 characters.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setPwError('New password and confirm password do not match.');
      return;
    }

    const user = auth.currentUser;
    if (!user || !user.email) {
      setPwError('You are not signed in. Please log in again.');
      return;
    }

    setPwLoading(true);
    try {
      // Re-authenticate first (Firebase requires a recent login to change the password)
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);

      // Now update the password
      await updatePassword(user, newPassword);

      setPwSuccess(true);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => setPwSuccess(false), 4000);
    } catch (err) {
      if (err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setPwError('Current password is incorrect.');
      } else if (err.code === 'auth/weak-password') {
        setPwError('New password is too weak. Use at least 6 characters.');
      } else if (err.code === 'auth/too-many-requests') {
        setPwError('Too many attempts. Please try again later.');
      } else {
        setPwError('Could not change password. Please try again.');
      }
    }
    setPwLoading(false);
  };

  const inputClass =
    'w-full rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/25 transition-colors bg-white/[0.03] border border-white/10 focus:border-[#45ADFF] focus:outline-none';

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

      {/* Change Password */}
      <div className="max-w-lg mt-12 pt-10 border-t border-white/10">
        <h3 className="text-lg font-bold text-white mb-1 font-heading">Change Password</h3>
        <p className="text-white/40 text-sm mb-6">
          Update your admin login password. You'll need your current password to confirm.
        </p>

        {pwError && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 mb-5 text-red-400 text-sm">
            {pwError}
          </div>
        )}
        {pwSuccess && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 mb-5 text-green-400 text-sm">
            ✅ Password changed successfully!
          </div>
        )}

        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="text-[#45ADFF] text-sm font-medium mb-2 block">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              required
              autoComplete="current-password"
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-[#45ADFF] text-sm font-medium mb-2 block">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password (min 6 characters)"
              required
              autoComplete="new-password"
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-[#45ADFF] text-sm font-medium mb-2 block">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter new password"
              required
              autoComplete="new-password"
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            disabled={pwLoading}
            className="w-full py-3.5 rounded-xl bg-[#45ADFF] text-white font-semibold text-sm hover:bg-[#3a9ae8] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {pwLoading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>
    </div>
  );
}
