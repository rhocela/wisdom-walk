// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBONgcG-YQX-5-t51mUac84uhDa_gg0ReU",
  authDomain: "wisdom-walk.firebaseapp.com",
  projectId: "wisdom-walk",
  storageBucket: "wisdom-walk.firebasestorage.app",
  messagingSenderId: "971618650541",
  appId: "1:971618650541:web:af3f247363d530cd343924",
  measurementId: "G-M07KTC35JZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Set up authentication providers
export const googleProvider = new GoogleAuthProvider();

// Configure Google provider
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export default app;