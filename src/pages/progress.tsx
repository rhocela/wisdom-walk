import React from 'react';
import Layout from '@theme/Layout';
import { useAuth } from '../components/auth/AuthContext';
import styles from './progress.module.css';

export default function ProgressPage() {
  const { user, userProgress } = useAuth();

  if (!user) {
    return (
      <Layout title="Progress" description="Track your reading progress">
        <div className={styles.container}>
          <div className={styles.signInPrompt}>
            <h1>📊 Your Progress</h1>
            <p>Sign in to view your reading progress and track your journey through the 100-day Bible study.</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!userProgress) {
    return (
      <Layout title="Progress" description="Track your reading progress">
        <div className={styles.container}>
          <div className={styles.loading}>
            <h1>📊 Your Progress</h1>
            <p>Loading your progress...</p>
          </div>
        </div>
      </Layout>
    );
  }

  const completionPercentage = Math.round((userProgress.completedDays.length / 100) * 100);
  const completedDays = userProgress.completedDays.sort((a, b) => a - b);
  
  // Group completed days by parts (every 8 days roughly)
  const parts = Array.from({ length: 10 }, (_, i) => i + 1);
  const getDaysInPart = (part: number) => {
    const startDay = (part - 1) * 10 + 1;
    const endDay = part === 10 ? 100 : part * 10;
    return Array.from({ length: endDay - startDay + 1 }, (_, i) => startDay + i);
  };

  const getPartCompletion = (part: number) => {
    const daysInPart = getDaysInPart(part);
    const completedInPart = daysInPart.filter(day => completedDays.includes(day)).length;
    return Math.round((completedInPart / daysInPart.length) * 100);
  };

  return (
    <Layout title="Progress" description="Track your reading progress">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>📊 Your Progress</h1>
          <p>Welcome back, {user.displayName}! Here's your journey through the 100-day Bible study.</p>
        </div>

        <div className={styles.overview}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>{completionPercentage}%</div>
            <div className={styles.statLabel}>Complete</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>{userProgress.currentDay}</div>
            <div className={styles.statLabel}>Current Day</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>{userProgress.readingStreak}</div>
            <div className={styles.statLabel}>Day Streak 🔥</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>{completedDays.length}</div>
            <div className={styles.statLabel}>Days Complete</div>
          </div>
        </div>

        <div className={styles.progressBar}>
          <div className={styles.progressLabel}>
            Overall Progress: {completedDays.length}/100 days
          </div>
          <div className={styles.progressTrack}>
            <div 
              className={styles.progressFill}
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        <div className={styles.partsGrid}>
          <h2>Progress by Part</h2>
          {parts.map(part => {
            const partCompletion = getPartCompletion(part);
            const daysInPart = getDaysInPart(part);
            const completedInPart = daysInPart.filter(day => completedDays.includes(day)).length;
            
            return (
              <div key={part} className={styles.partCard}>
                <div className={styles.partHeader}>
                  <h3>Part {part}</h3>
                  <span className={styles.partProgress}>{partCompletion}%</span>
                </div>
                <div className={styles.partProgressBar}>
                  <div 
                    className={styles.partProgressFill}
                    style={{ width: `${partCompletion}%` }}
                  />
                </div>
                <div className={styles.partStats}>
                  <span>{completedInPart}/{daysInPart.length} days</span>
                  <span>Days {daysInPart[0]}-{daysInPart[daysInPart.length - 1]}</span>
                </div>
              </div>
            );
          })}
        </div>

        {completedDays.length > 0 && (
          <div className={styles.recentProgress}>
            <h2>Recent Progress</h2>
            <div className={styles.recentDays}>
              {completedDays.slice(-10).reverse().map(day => (
                <div key={day} className={styles.recentDay}>
                  <span className={styles.dayNumber}>Day {day}</span>
                  <span className={styles.checkmark}>✓</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.encouragement}>
          {completionPercentage === 100 ? (
            <div className={styles.celebration}>
              🎉 Congratulations! You've completed the entire 100-day journey! 🎉
            </div>
          ) : completionPercentage >= 75 ? (
            <p>You're in the final stretch! Keep up the excellent work!</p>
          ) : completionPercentage >= 50 ? (
            <p>Halfway there! Your dedication is inspiring!</p>
          ) : completionPercentage >= 25 ? (
            <p>Great progress! You're building a wonderful habit!</p>
          ) : (
            <p>Every journey begins with a single step. Keep going!</p>
          )}
        </div>
      </div>
    </Layout>
  );
}