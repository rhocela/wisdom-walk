import React from 'react';
import styles from './FirebaseDebug.module.css';

export const FirebaseDebug: React.FC = () => {
  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  // Check if Firebase is configured
  const isConfigured = process.env.REACT_APP_FIREBASE_API_KEY || 
    window.location.hostname === 'localhost';

  return (
    <div className={styles.debugPanel}>
      <h4>🔧 Firebase Debug Info</h4>
      
      <div className={styles.status}>
        <span className={styles.label}>Environment:</span>
        <span className={styles.value}>{process.env.NODE_ENV}</span>
      </div>
      
      <div className={styles.status}>
        <span className={styles.label}>Domain:</span>
        <span className={styles.value}>{window.location.hostname}</span>
      </div>
      
      <div className={styles.status}>
        <span className={styles.label}>Firebase Config:</span>
        <span className={`${styles.value} ${isConfigured ? styles.success : styles.error}`}>
          {isConfigured ? '✅ Detected' : '❌ Missing'}
        </span>
      </div>
      
      {!isConfigured && (
        <div className={styles.instructions}>
          <p><strong>🚨 Firebase Not Configured!</strong></p>
          <p>1. Go to <a href="https://console.firebase.google.com/" target="_blank" rel="noopener">Firebase Console</a></p>
          <p>2. Create project & enable Authentication</p>
          <p>3. Add web app & copy config to firebase.js</p>
          <p>4. Add domain to authorized domains</p>
        </div>
      )}
    </div>
  );
};