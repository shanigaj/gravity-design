import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleNetwork from './ParticleNetwork';

export default function SplashScreen({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => onComplete(), 800);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-dark"
        >
          <ParticleNetwork />

          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold font-heading text-accent tracking-wide"
            >
              GRAVITY TECH WORLD
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-4 text-lg text-text-secondary tracking-widest"
            >
              One Tap To Unlock Your Life
            </motion.p>

            {/* Loading bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              transition={{ duration: 2.5, delay: 0.5, ease: 'easeInOut' }}
              className="h-[2px] bg-accent mx-auto mt-8 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
