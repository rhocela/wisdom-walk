import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { useHistory } from '@docusaurus/router';
import { LoginModal } from '../auth/LoginModal';
import styles from './AuthMobileMenu.module.css';

export const AuthMobileMenu: React.FC = () => {
  const { user, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleViewProgress = () => {
    history.push('/progress');
  };

  const handleViewBookmarks = () => {
    history.push('/bookmarks');
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
        <div className={styles.menuActions}>
          <button 
            className={styles.menuItem}
            onClick={handleViewProgress}
          >
            📊 View Progress
          </button>
          <button 
            className={styles.menuItem}
            onClick={handleViewBookmarks}
          >
            🔖 My Bookmarks
          </button>
          <button 
            className={styles.logoutButton}
            onClick={handleLogout}
          >
            🚪 Sign Out
          </button>
        </div>
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