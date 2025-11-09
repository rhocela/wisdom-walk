import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { LoginModal } from '../auth/LoginModal';
import { UserProfile } from '../auth/UserProfile';
import styles from './AuthNavbar.module.css';

export const AuthNavbar: React.FC = () => {
  const { user } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className={styles.authNavbar}>
      {user ? (
        <UserProfile />
      ) : (
        <button 
          className={styles.signInButton}
          onClick={() => setShowLoginModal(true)}
          title="Sign In"
        >
          <span className={styles.signInIcon}>👤</span>
          <span className={styles.signInText}>Sign In</span>
        </button>
      )}
      
      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
};