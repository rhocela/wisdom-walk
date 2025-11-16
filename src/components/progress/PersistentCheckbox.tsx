import React, { useState, useEffect } from 'react';
import { useAuth } from '../auth/AuthContext';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import './PersistentCheckbox.module.css';

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
    if (!user) {
      // Fallback to localStorage for non-authenticated users
      const saved = localStorage.getItem(`checkbox-${id}`);
      if (saved !== null) {
        setChecked(JSON.parse(saved));
      }
      return;
    }

    try {
      const checkboxDoc = await getDoc(doc(db, 'userCheckboxes', user.uid));
      if (checkboxDoc.exists()) {
        const checkboxStates = checkboxDoc.data() as CheckboxState;
        setChecked(checkboxStates[id] || false);
      }
    } catch (error) {
      console.error('Error loading checkbox state:', error);
      // Fallback to localStorage
      const saved = localStorage.getItem(`checkbox-${id}`);
      if (saved !== null) {
        setChecked(JSON.parse(saved));
      }
    }
  };

  const saveCheckboxState = async (newChecked: boolean) => {
    if (!user) {
      // Fallback to localStorage for non-authenticated users
      localStorage.setItem(`checkbox-${id}`, JSON.stringify(newChecked));
      return;
    }

    try {
      setLoading(true);
      const checkboxDocRef = doc(db, 'userCheckboxes', user.uid);
      
      // Get current checkbox states
      const checkboxDoc = await getDoc(checkboxDocRef);
      const currentStates = checkboxDoc.exists() ? checkboxDoc.data() as CheckboxState : {};
      
      // Update the specific checkbox
      const updatedStates = {
        ...currentStates,
        [id]: newChecked
      };

      // Save to Firestore
      await updateDoc(checkboxDocRef, updatedStates);
      
    } catch (error) {
      console.error('Error saving checkbox state:', error);
      // Fallback to localStorage
      localStorage.setItem(`checkbox-${id}`, JSON.stringify(newChecked));
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
    <label className="persistent-checkbox">
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={handleChange}
        disabled={loading}
      />
      <span className="checkbox-content">
        {children}
      </span>
      {loading && <span className="checkbox-loading">💾</span>}
    </label>
  );
};

export default PersistentCheckbox;