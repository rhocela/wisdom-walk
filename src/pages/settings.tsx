import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { useAuth } from '../components/auth/AuthContext';
import styles from './settings.module.css';

export default function SettingsPage() {
  const { user, userProgress } = useAuth();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    readingReminders: true,
    darkMode: false,
    fontSize: 'medium',
    readingPace: 'standard',
    autoBookmark: false,
    shareProgress: true
  });
  
  const [saveStatus, setSaveStatus] = useState('');

  if (!user) {
    return (
      <Layout title="Settings" description="Manage your Bible study preferences">
        <div className={styles.container}>
          <div className={styles.signInPrompt}>
            <h1>⚙️ Settings</h1>
            <p>Sign in to manage your Bible study preferences and customize your reading experience.</p>
          </div>
        </div>
      </Layout>
    );
  }

  const handleSettingChange = (setting: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleSaveSettings = async () => {
    setSaveStatus('saving');
    try {
      // TODO: Implement actual settings save to Firebase
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus(''), 3000);
    } catch (error) {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus(''), 3000);
    }
  };

  const handleResetProgress = async () => {
    if (window.confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
      if (window.confirm('This will delete all your completed days, bookmarks, and streak data. Are you absolutely sure?')) {
        // TODO: Implement progress reset
        alert('Progress reset functionality will be implemented soon.');
      }
    }
  };

  const handleExportData = async () => {
    try {
      const userData = {
        user: {
          name: user.displayName,
          email: user.email,
          joinDate: new Date().toISOString()
        },
        progress: userProgress,
        settings: settings,
        exportDate: new Date().toISOString()
      };
      
      const dataStr = JSON.stringify(userData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `wisdom-walk-data-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      alert('Error exporting data. Please try again.');
    }
  };

  return (
    <Layout title="Settings" description="Manage your Bible study preferences">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>⚙️ Settings</h1>
          <p>Customize your Bible study experience, {user.displayName}.</p>
        </div>

        <div className={styles.settingsGrid}>
          
          {/* Reading Preferences */}
          <div className={styles.settingsSection}>
            <h2>📖 Reading Preferences</h2>
            
            <div className={styles.setting}>
              <label className={styles.settingLabel}>
                Reading Pace
                <select 
                  value={settings.readingPace} 
                  onChange={(e) => handleSettingChange('readingPace', e.target.value)}
                  className={styles.settingSelect}
                >
                  <option value="relaxed">Relaxed (flexible deadlines)</option>
                  <option value="standard">Standard (100 days)</option>
                  <option value="accelerated">Accelerated (50 days)</option>
                </select>
              </label>
            </div>

            <div className={styles.setting}>
              <label className={styles.settingLabel}>
                Font Size
                <select 
                  value={settings.fontSize} 
                  onChange={(e) => handleSettingChange('fontSize', e.target.value)}
                  className={styles.settingSelect}
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="extra-large">Extra Large</option>
                </select>
              </label>
            </div>

            <div className={styles.setting}>
              <label className={styles.settingCheckbox}>
                <input
                  type="checkbox"
                  checked={settings.autoBookmark}
                  onChange={(e) => handleSettingChange('autoBookmark', e.target.checked)}
                />
                <span className={styles.checkboxLabel}>
                  Auto-bookmark completed days
                </span>
              </label>
            </div>
          </div>

          {/* Notifications */}
          <div className={styles.settingsSection}>
            <h2>🔔 Notifications</h2>
            
            <div className={styles.setting}>
              <label className={styles.settingCheckbox}>
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                />
                <span className={styles.checkboxLabel}>
                  Email notifications for updates
                </span>
              </label>
            </div>

            <div className={styles.setting}>
              <label className={styles.settingCheckbox}>
                <input
                  type="checkbox"
                  checked={settings.readingReminders}
                  onChange={(e) => handleSettingChange('readingReminders', e.target.checked)}
                />
                <span className={styles.checkboxLabel}>
                  Daily reading reminders
                </span>
              </label>
            </div>
          </div>

          {/* Privacy & Sharing */}
          <div className={styles.settingsSection}>
            <h2>🔒 Privacy & Sharing</h2>
            
            <div className={styles.setting}>
              <label className={styles.settingCheckbox}>
                <input
                  type="checkbox"
                  checked={settings.shareProgress}
                  onChange={(e) => handleSettingChange('shareProgress', e.target.checked)}
                />
                <span className={styles.checkboxLabel}>
                  Allow progress sharing with study groups
                </span>
              </label>
            </div>
          </div>

          {/* Account Actions */}
          <div className={styles.settingsSection}>
            <h2>👤 Account & Data</h2>
            
            <div className={styles.setting}>
              <button 
                onClick={handleExportData}
                className={styles.actionButton}
              >
                📁 Export My Data
              </button>
              <p className={styles.settingDescription}>
                Download all your progress, bookmarks, and settings as a JSON file.
              </p>
            </div>

            <div className={styles.setting}>
              <button 
                onClick={handleResetProgress}
                className={`${styles.actionButton} ${styles.dangerButton}`}
              >
                🗑️ Reset All Progress
              </button>
              <p className={styles.settingDescription}>
                Permanently delete all your reading progress and start over.
              </p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className={styles.saveSection}>
          <button 
            onClick={handleSaveSettings}
            className={styles.saveButton}
            disabled={saveStatus === 'saving'}
          >
            {saveStatus === 'saving' ? '💾 Saving...' : 
             saveStatus === 'saved' ? '✅ Saved!' : 
             saveStatus === 'error' ? '❌ Error' : 
             '💾 Save Settings'}
          </button>
        </div>

        {/* App Info */}
        <div className={styles.appInfo}>
          <h3>About Wisdom Walk</h3>
          <p>Version 1.0.0 | Built with love for Bible study enthusiasts</p>
          <p>© 2025 Wisdom Walk. All rights reserved.</p>
        </div>
      </div>
    </Layout>
  );
}