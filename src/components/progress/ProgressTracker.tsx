import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import styles from './ProgressTracker.module.css';

interface ProgressTrackerProps {
  dayNumber: number;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({ dayNumber }) => {
  const { user, userProgress, updateProgress, addBookmark, removeBookmark } = useAuth();
  const [showBookmarkForm, setShowBookmarkForm] = useState(false);
  const [bookmarkNote, setBookmarkNote] = useState('');

  if (!user || !userProgress) {
    return (
      <div className={styles.guestPrompt}>
        <p>Sign in to track your progress and save bookmarks!</p>
      </div>
    );
  }

  const isCompleted = userProgress.completedDays.includes(dayNumber);
  const bookmark = userProgress.bookmarks.find(b => b.dayNumber === dayNumber);
  const isBookmarked = !!bookmark;

  const handleCompleteDay = async () => {
    await updateProgress(dayNumber);
  };

  const handleAddBookmark = async () => {
    if (showBookmarkForm) {
      await addBookmark(dayNumber, bookmarkNote.trim() || undefined);
      setBookmarkNote('');
      setShowBookmarkForm(false);
    } else {
      setShowBookmarkForm(true);
    }
  };

  const handleRemoveBookmark = async () => {
    await removeBookmark(dayNumber);
    setShowBookmarkForm(false);
    setBookmarkNote('');
  };

  return (
    <div className={styles.progressTracker}>
      <div className={styles.actions}>
        <button 
          className={`${styles.actionButton} ${isCompleted ? styles.completed : styles.incomplete}`}
          onClick={handleCompleteDay}
          disabled={isCompleted}
        >
          {isCompleted ? (
            <>
              <span className={styles.checkmark}>✓</span>
              Day Complete
            </>
          ) : (
            <>
              <span className={styles.circle}></span>
              Mark Complete
            </>
          )}
        </button>

        <button 
          className={`${styles.actionButton} ${styles.bookmark} ${isBookmarked ? styles.active : ''}`}
          onClick={isBookmarked ? handleRemoveBookmark : handleAddBookmark}
        >
          <span className={styles.bookmarkIcon}>🔖</span>
          {isBookmarked ? 'Bookmarked' : 'Bookmark'}
        </button>
      </div>

      {showBookmarkForm && (
        <div className={styles.bookmarkForm}>
          <textarea
            value={bookmarkNote}
            onChange={(e) => setBookmarkNote(e.target.value)}
            placeholder="Add a personal note about this day's reading (optional)"
            className={styles.bookmarkTextarea}
            rows={3}
          />
          <div className={styles.bookmarkFormActions}>
            <button 
              onClick={handleAddBookmark}
              className={`${styles.formButton} ${styles.save}`}
            >
              Save Bookmark
            </button>
            <button 
              onClick={() => setShowBookmarkForm(false)}
              className={`${styles.formButton} ${styles.cancel}`}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {isBookmarked && bookmark?.note && (
        <div className={styles.bookmarkNote}>
          <h4>Your Note:</h4>
          <p>{bookmark.note}</p>
          <small>
            Saved on {new Date(bookmark.timestamp).toLocaleDateString()}
          </small>
        </div>
      )}

      {isCompleted && (
        <div className={styles.completionBadge}>
          <span className={styles.badgeIcon}>🎉</span>
          <span>Great job completing Day {dayNumber}!</span>
        </div>
      )}
    </div>
  );
};