import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Hook to fetch a specific site image from Firestore
 * @param {string} docId - The document ID in 'siteImages' collection
 * @param {string} field - The field name to get (default: 'url')
 * @param {string} fallback - Fallback URL if not found
 */
export function useSiteImage(docId, field = 'url', fallback = '') {
  const [url, setUrl] = useState(fallback);

  useEffect(() => {
    let unsub;
    try {
      unsub = onSnapshot(doc(db, 'siteImages', docId), (snap) => {
        if (snap.exists() && snap.data()[field]) {
          setUrl(snap.data()[field]);
        } else {
          setUrl(fallback);
        }
      }, () => {
        // Firestore not configured — use fallback
        setUrl(fallback);
      });
    } catch {
      setUrl(fallback);
    }
    return () => unsub?.();
  }, [docId, field, fallback]);

  return url;
}

/**
 * Hook to fetch team photos array
 */
export function useTeamPhotos() {
  const [photos, setPhotos] = useState(Array(8).fill(''));

  useEffect(() => {
    let unsub;
    try {
      unsub = onSnapshot(doc(db, 'siteImages', 'team'), (snap) => {
        if (snap.exists() && snap.data().photos) {
          const p = snap.data().photos;
          setPhotos([...p, ...Array(8 - p.length).fill('')].slice(0, 8));
        }
      }, () => {});
    } catch {}
    return () => unsub?.();
  }, []);

  return photos;
}
