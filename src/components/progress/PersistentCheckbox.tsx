import React, { useState, useEffect } from 'react';
import { useAuth } from '../auth/AuthContext';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import styles from './PersistentCheckbox.module.css';

interface PersistentCheckboxProps {
  id: string;
  children: React.ReactNode;
  dayNumber?: number;
}

interface CheckboxState {
  [key: string]: boolean;
}

const PersistentCheckbox: React.FC<PersistentCheckboxProps> = ({ 
  id, 
  children, 
  dayNumber 
}) => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  // Load checkbox state on mount
  useEffect(() => {
    loadCheckboxState();
  }, [user, id]);

  const loadCheckboxState = async () => {
    console.log(`Loading checkbox ${id} for user:`, user?.uid || 'anonymous');
    
    if (!user) {
      // Fallback to localStorage for non-authenticated users
      const saved = localStorage.getItem(`checkbox-${id}`);
      if (saved !== null) {
        const savedValue = JSON.parse(saved);
        setChecked(savedValue);
        console.log(`Checkbox ${id} loaded from localStorage:`, savedValue);
      } else {
        console.log(`No saved state found in localStorage for checkbox ${id}`);
      }
      return;
    }

    try {
      const checkboxDoc = await getDoc(doc(db, 'userCheckboxes', user.uid));
      if (checkboxDoc.exists()) {
        const checkboxStates = checkboxDoc.data() as CheckboxState;
        const savedValue = checkboxStates[id] || false;
        setChecked(savedValue);
        console.log(`✅ Checkbox ${id} loaded from Firestore:`, savedValue);
      } else {
        // Check if there's a localStorage value to migrate
        const localSaved = localStorage.getItem(`checkbox-${id}`);
        if (localSaved !== null) {
          const localValue = JSON.parse(localSaved);
          setChecked(localValue);
          // Migrate to Firestore
          await saveCheckboxState(localValue);
          console.log(`Checkbox ${id} migrated from localStorage to Firestore:`, localValue);
        } else {
          console.log(`No Firestore document found for user ${user.uid}, starting fresh`);
          setChecked(false);
        }
      }
    } catch (error) {
      console.error(`❌ Error loading checkbox ${id} from Firestore:`, error);
      // Fallback to localStorage
      const saved = localStorage.getItem(`checkbox-${id}`);
      if (saved !== null) {
        const savedValue = JSON.parse(saved);
        setChecked(savedValue);
        console.log(`Checkbox ${id} loaded from localStorage (fallback):`, savedValue);
      }
    }
  };

  const saveCheckboxState = async (newChecked: boolean) => {
    if (!user) {
      // Fallback to localStorage for non-authenticated users
      localStorage.setItem(`checkbox-${id}`, JSON.stringify(newChecked));
      console.log(`Checkbox ${id} saved to localStorage:`, newChecked);
      return;
    }

    try {
      setLoading(true);
      console.log(`Attempting to save checkbox ${id}:`, newChecked, 'for user:', user.uid);
      
      const checkboxDocRef = doc(db, 'userCheckboxes', user.uid);
      
      // Get current checkbox states
      const checkboxDoc = await getDoc(checkboxDocRef);
      const currentStates = checkboxDoc.exists() ? checkboxDoc.data() as CheckboxState : {};
      
      // Update the specific checkbox
      const updatedStates = {
        ...currentStates,
        [id]: newChecked,
        lastUpdated: new Date().toISOString()
      };

      // Save to Firestore using setDoc with merge option
      await setDoc(checkboxDocRef, updatedStates, { merge: true });
      
      console.log(`✅ Checkbox ${id} successfully saved to Firestore:`, newChecked);
      
    } catch (error) {
      console.error(`❌ Error saving checkbox ${id} to Firestore:`, error);
      console.log('Falling back to localStorage...');
      // Fallback to localStorage
      localStorage.setItem(`checkbox-${id}`, JSON.stringify(newChecked));
      console.log(`Checkbox ${id} saved to localStorage as fallback:`, newChecked);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setChecked(newChecked);
    await saveCheckboxState(newChecked);
  };

  return (
    <label className={styles.persistentCheckbox}>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={handleChange}
        disabled={loading}
      />
      <span className={styles.checkboxContent}>
        {children}
      </span>
      {loading && <span className={styles.checkboxLoading}>💾</span>}
    </label>
  );
};

export default PersistentCheckbox;