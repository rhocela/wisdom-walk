import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../auth/AuthContext';
import styles from './SmartBookmark.module.css';

interface SmartBookmarkProps {
  dayNumber: number;
  title: string;
}

export const SmartBookmark: React.FC<SmartBookmarkProps> = ({ dayNumber, title }) => {
  const { user, userProgress, addBookmark, removeBookmark } = useAuth();
  const [showNoteForm, setShowNoteForm] = useState(false);
  const [bookmarkNote, setBookmarkNote] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const bookmarkRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  // Check if bookmarked
  const bookmark = userProgress?.bookmarks?.find(b => b.dayNumber === dayNumber);
  const isBookmarked = !!bookmark;

  // Scroll detection for sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      // Find the title element (h1) to determine when it's scrolled past
      const titleElement = document.querySelector('h1');
      if (!titleElement) return;

      const titleRect = titleElement.getBoundingClientRect();
      const isScrolledPastTitle = titleRect.bottom <= 100; // When title is scrolled past navbar
      const shouldFloat = window.scrollY > 400; // Start floating after more scroll

      setIsSticky(isScrolledPastTitle && !shouldFloat);
      setIsFloating(shouldFloat);
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Guest user prompt
  if (!user) {
    return (
      <div className={`${styles.smartBookmark} ${styles.guestMode}`} ref={bookmarkRef}>
        <div className={styles.guestPrompt}>
          <span className={styles.bookmarkIcon}>🔖</span>
          <span className={styles.signInHint}>Sign in to bookmark</span>
        </div>
      </div>
    );
  }

  const handleBookmarkToggle = async () => {
    if (isBookmarked) {
      await removeBookmark(dayNumber);
      setShowNoteForm(false);
      setBookmarkNote('');
    } else {
      if (showNoteForm && bookmarkNote.trim()) {
        setLoading(true);
        await addBookmark(dayNumber, bookmarkNote.trim());
        setShowNoteForm(false);
        setBookmarkNote('');
        setLoading(false);
      } else {
        setShowNoteForm(true);
      }
    }
  };

  const handleQuickBookmark = async () => {
    setLoading(true);
    await addBookmark(dayNumber);
    setLoading(false);
  };

  const handleSaveWithNote = async () => {
    if (bookmarkNote.trim()) {
      setLoading(true);
      await addBookmark(dayNumber, bookmarkNote.trim());
      setShowNoteForm(false);
      setBookmarkNote('');
      setLoading(false);
    }
  };

  return (
    <>
      {/* Main bookmark component */}
      <div 
        className={`${styles.smartBookmark} ${isSticky ? styles.sticky : ''} ${isFloating ? styles.floating : ''}`}
        ref={bookmarkRef}
      >
        <div className={styles.bookmarkContainer}>
          <button
            className={`${styles.bookmarkButton} ${isBookmarked ? styles.bookmarked : ''}`}
            onClick={handleBookmarkToggle}
            disabled={loading}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark this study'}
          >
            <span className={styles.bookmarkIcon}>
              {loading ? '⏳' : isBookmarked ? '🔖' : '📖'}
            </span>
            <span className={styles.bookmarkLabel}>
              {isBookmarked ? 'Bookmarked' : 'Bookmark'}
            </span>
          </button>

          {/* Quick bookmark button when form is open */}
          {showNoteForm && (
            <button
              className={`${styles.quickBookmark}`}
              onClick={handleQuickBookmark}
              disabled={loading}
              title="Bookmark without note"
            >
              <span>Quick save</span>
            </button>
          )}
        </div>

        {/* Note form */}
        {showNoteForm && (
          <div className={styles.noteForm}>
            <textarea
              value={bookmarkNote}
              onChange={(e) => setBookmarkNote(e.target.value)}
              placeholder={`What stood out to you in ${title}?`}
              className={styles.noteTextarea}
              rows={3}
              autoFocus
            />
            <div className={styles.noteActions}>
              <button
                onClick={handleSaveWithNote}
                className={`${styles.noteAction} ${styles.save}`}
                disabled={!bookmarkNote.trim() || loading}
              >
                💾 Save
              </button>
              <button
                onClick={() => {
                  setShowNoteForm(false);
                  setBookmarkNote('');
                }}
                className={`${styles.noteAction} ${styles.cancel}`}
              >
                ✕ Cancel
              </button>
            </div>
          </div>
        )}

        {/* Display saved note */}
        {isBookmarked && bookmark?.note && !showNoteForm && (
          <div className={styles.savedNote}>
            <div className={styles.noteHeader}>Your note:</div>
            <div className={styles.noteContent}>{bookmark.note}</div>
            <div className={styles.noteTimestamp}>
              Saved {new Date(bookmark.timestamp).toLocaleDateString()}
            </div>
          </div>
        )}
      </div>
    </>
  );
};