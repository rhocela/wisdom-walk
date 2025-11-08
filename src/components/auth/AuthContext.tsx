import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut,
  User 
} from 'firebase/auth';
import { 
  doc, 
  setDoc, 
  getDoc,
  updateDoc,
  serverTimestamp 
} from 'firebase/firestore';
import { auth, db, googleProvider, facebookProvider } from '../../lib/firebase';

interface UserProgress {
  currentDay: number;
  completedDays: number[];
  readingStreak: number;
  lastReadDate: string | null;
  totalReadingTime: number;
  bookmarks: {
    dayNumber: number;
    note?: string;
    timestamp: string;
  }[];
}

interface AuthContextType {
  user: User | null;
  userProgress: UserProgress | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  logout: () => Promise<void>;
  updateProgress: (dayNumber: number) => Promise<void>;
  addBookmark: (dayNumber: number, note?: string) => Promise<void>;
  removeBookmark: (dayNumber: number) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const defaultProgress: UserProgress = {
  currentDay: 1,
  completedDays: [],
  readingStreak: 0,
  lastReadDate: null,
  totalReadingTime: 0,
  bookmarks: []
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      
      if (user) {
        // Load user progress from Firestore
        await loadUserProgress(user.uid);
      } else {
        setUserProgress(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loadUserProgress = async (userId: string) => {
    try {
      const progressDoc = await getDoc(doc(db, 'userProgress', userId));
      
      if (progressDoc.exists()) {
        setUserProgress(progressDoc.data() as UserProgress);
      } else {
        // Create default progress for new user
        await setDoc(doc(db, 'userProgress', userId), {
          ...defaultProgress,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
        setUserProgress(defaultProgress);
      }
    } catch (error) {
      console.error('Error loading user progress:', error);
      setUserProgress(defaultProgress);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      
      // Create or update user profile
      await setDoc(doc(db, 'users', result.user.uid), {
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
        provider: 'google',
        lastSignIn: serverTimestamp()
      }, { merge: true });
      
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  };

  const signInWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      
      // Create or update user profile
      await setDoc(doc(db, 'users', result.user.uid), {
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
        provider: 'facebook',
        lastSignIn: serverTimestamp()
      }, { merge: true });
      
    } catch (error) {
      console.error('Error signing in with Facebook:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const updateProgress = async (dayNumber: number) => {
    if (!user || !userProgress) return;

    try {
      const today = new Date().toISOString().split('T')[0];
      const completedDays = [...userProgress.completedDays];
      
      // Add day if not already completed
      if (!completedDays.includes(dayNumber)) {
        completedDays.push(dayNumber);
      }

      // Calculate reading streak
      let newStreak = userProgress.readingStreak;
      if (userProgress.lastReadDate) {
        const lastRead = new Date(userProgress.lastReadDate);
        const todayDate = new Date(today);
        const daysDiff = Math.floor((todayDate.getTime() - lastRead.getTime()) / (1000 * 60 * 60 * 24));
        
        if (daysDiff === 1) {
          newStreak += 1;
        } else if (daysDiff > 1) {
          newStreak = 1;
        }
      } else {
        newStreak = 1;
      }

      const updatedProgress: UserProgress = {
        ...userProgress,
        currentDay: Math.max(userProgress.currentDay, dayNumber + 1),
        completedDays,
        readingStreak: newStreak,
        lastReadDate: today,
        totalReadingTime: userProgress.totalReadingTime + 15 // Assume 15 min per day
      };

      // Update Firestore
      await updateDoc(doc(db, 'userProgress', user.uid), {
        ...updatedProgress,
        updatedAt: serverTimestamp()
      });

      setUserProgress(updatedProgress);
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  const addBookmark = async (dayNumber: number, note?: string) => {
    if (!user || !userProgress) return;

    try {
      const newBookmark = {
        dayNumber,
        note,
        timestamp: new Date().toISOString()
      };

      const updatedBookmarks = [
        ...userProgress.bookmarks.filter(b => b.dayNumber !== dayNumber),
        newBookmark
      ];

      const updatedProgress = {
        ...userProgress,
        bookmarks: updatedBookmarks
      };

      await updateDoc(doc(db, 'userProgress', user.uid), {
        bookmarks: updatedBookmarks,
        updatedAt: serverTimestamp()
      });

      setUserProgress(updatedProgress);
    } catch (error) {
      console.error('Error adding bookmark:', error);
    }
  };

  const removeBookmark = async (dayNumber: number) => {
    if (!user || !userProgress) return;

    try {
      const updatedBookmarks = userProgress.bookmarks.filter(
        b => b.dayNumber !== dayNumber
      );

      const updatedProgress = {
        ...userProgress,
        bookmarks: updatedBookmarks
      };

      await updateDoc(doc(db, 'userProgress', user.uid), {
        bookmarks: updatedBookmarks,
        updatedAt: serverTimestamp()
      });

      setUserProgress(updatedProgress);
    } catch (error) {
      console.error('Error removing bookmark:', error);
    }
  };

  const value = {
    user,
    userProgress,
    loading,
    signInWithGoogle,
    signInWithFacebook,
    logout,
    updateProgress,
    addBookmark,
    removeBookmark
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};