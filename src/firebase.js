// Firebase Configuration
// IMPORTANT: Replace these values with your Firebase project credentials
// Go to: https://console.firebase.google.com → Your Project → Project Settings → General → Your apps → Web app
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyABNkyXq0N0YnlZXZVAeLyBhLbzHGAlz_U",
  authDomain: "gravity-design-1c3dc.firebaseapp.com",
  projectId: "gravity-design-1c3dc",
  storageBucket: "gravity-design-1c3dc.firebasestorage.app",
  messagingSenderId: "720156998436",
  appId: "1:720156998436:web:af9b69d2f40f495a1c91b1",
  measurementId: "G-TY7LBVC7PT"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
