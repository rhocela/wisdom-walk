import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { LoginModal } from '../auth/LoginModal';
import styles from './AuthMobileMenu.module.css';

export const AuthMobileMenu: React.FC = () => {
  const { user, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (user) {
    return (
      <div className={styles.userSection}>
        <div className={styles.userInfo}>
          <img 
            src={user.photoURL || '/default-avatar.svg'} 
            alt={user.displayName || 'User'} 
            className={styles.avatar}
          />
          <span className={styles.userName}>{user.displayName || user.email}</span>
        </div>
        <button 
          className={styles.logoutButton}
          onClick={handleLogout}
        >
          🚪 Sign Out
        </button>
      </div>
    );
  }

  return (
    <>
      <button 
        className={styles.signInMenuItem}
        onClick={() => setShowLoginModal(true)}
      >
        👤 Sign In
      </button>
      
      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
};