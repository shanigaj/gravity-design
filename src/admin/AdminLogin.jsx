import { useState } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (err) {
      setError('Invalid email or password');
    }
    setLoading(false);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch (err) {
      setError('Failed to send reset email. Check your email address.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0B1224] flex items-center justify-center px-4">
      <style>{`
        .admin-login-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(69,173,255,0.15);
          backdrop-filter: blur(20px);
        }
        .admin-input {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .admin-input:focus {
          border-color: #45ADFF;
          outline: none;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="/images/company-logo.png" alt="Gravity Tech World" className="h-12 w-auto" />
        </div>

        <div className="admin-login-card rounded-[24px] p-8">
          <h1 className="text-2xl font-bold text-white text-center mb-1 font-heading">
            {showForgot ? 'Reset Password' : 'Admin Login'}
          </h1>
          <p className="text-white/40 text-sm text-center mb-8">
            {showForgot ? 'Enter your email to receive a reset link' : 'Sign in to manage your website'}
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 mb-6 text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          {resetSent && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 mb-6 text-green-400 text-sm text-center">
              Password reset email sent! Check your inbox.
            </div>
          )}

          {!showForgot ? (
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="text-[#45ADFF] text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@gravitytechworld.com"
                  required
                  className="admin-input w-full rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/25 transition-colors"
                />
              </div>

              <div>
                <label className="text-[#45ADFF] text-sm font-medium mb-2 block">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="admin-input w-full rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/25 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-[#45ADFF] text-white font-semibold text-base hover:bg-[#3a9ae8] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>

              <button
                type="button"
                onClick={() => { setShowForgot(true); setError(''); setResetSent(false); }}
                className="w-full text-[#45ADFF]/60 text-sm hover:text-[#45ADFF] transition-colors cursor-pointer"
              >
                Forgot Password?
              </button>
            </form>
          ) : (
            <form onSubmit={handleForgotPassword} className="space-y-5">
              <div>
                <label className="text-[#45ADFF] text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@gravitytechworld.com"
                  required
                  className="admin-input w-full rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/25 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-[#45ADFF] text-white font-semibold text-base hover:bg-[#3a9ae8] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>

              <button
                type="button"
                onClick={() => { setShowForgot(false); setError(''); setResetSent(false); }}
                className="w-full text-[#45ADFF]/60 text-sm hover:text-[#45ADFF] transition-colors cursor-pointer"
              >
                ← Back to Login
              </button>
            </form>
          )}
        </div>

        <p className="text-white/20 text-xs text-center mt-6">
          © Gravity Tech World — Admin Panel
        </p>
      </motion.div>
    </div>
  );
}
