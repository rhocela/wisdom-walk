import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useHistory } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './UserProfile.module.css';

export const UserProfile: React.FC = () => {
  const { user, userProgress, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const history = useHistory();
  const progressUrl = useBaseUrl('/progress');
  const bookmarksUrl = useBaseUrl('/bookmarks');

  if (!user || !userProgress) return null;

  const handleLogout = async () => {
    try {
      await logout();
      setShowDropdown(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleViewProgress = () => {
    setShowDropdown(false);
    history.push(progressUrl);
  };

  const handleViewBookmarks = () => {
    setShowDropdown(false);
    history.push(bookmarksUrl);
  };

  const handleSettings = () => {
    setShowDropdown(false);
    // TODO: Implement settings page
    console.log('Settings clicked - not implemented yet');
  };

  const completionPercentage = Math.round((userProgress.completedDays.length / 100) * 100);

  return (
    <div className={styles.userProfile}>
      <button 
        className={styles.profileButton}
        onClick={() => setShowDropdown(!showDropdown)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
      >
        <img 
          src={user.photoURL || '/default-avatar.svg'} 
          alt={user.displayName || 'User'} 
          className={styles.avatar}
        />
        <span className={styles.userName}>{user.displayName}</span>
        <svg className={styles.chevron} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {showDropdown && (
        <div className={styles.dropdown}>
          <div className={styles.progressStats}>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Progress</span>
              <span className={styles.statValue}>{completionPercentage}%</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Day</span>
              <span className={styles.statValue}>{userProgress.currentDay}/100</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Streak</span>
              <span className={styles.statValue}>{userProgress.readingStreak} 🔥</span>
            </div>
          </div>
          
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${completionPercentage}%` }}
            />
          </div>

          <div className={styles.dropdownActions}>
            <button className={styles.dropdownItem} onClick={handleViewProgress}>
              📊 View Progress
            </button>
            <button className={styles.dropdownItem} onClick={handleViewBookmarks}>
              🔖 My Bookmarks
            </button>
            <button className={styles.dropdownItem} onClick={handleSettings}>
              ⚙️ Settings
            </button>
            <hr className={styles.divider} />
            <button 
              className={`${styles.dropdownItem} ${styles.logoutItem}`}
              onClick={handleLogout}
            >
              🚪 Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};