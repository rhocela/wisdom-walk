import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { useAuth } from '../components/auth/AuthContext';
import styles from './bookmarks.module.css';

export default function BookmarksPage() {
  const { user, userProgress, removeBookmark } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  if (!user) {
    return (
      <Layout title="My Bookmarks" description="View your saved bookmarks">
        <div className={styles.container}>
          <div className={styles.signInPrompt}>
            <h1>🔖 My Bookmarks</h1>
            <p>Sign in to view your saved bookmarks and personal notes from your Bible study journey.</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!userProgress) {
    return (
      <Layout title="My Bookmarks" description="View your saved bookmarks">
        <div className={styles.container}>
          <div className={styles.loading}>
            <h1>🔖 My Bookmarks</h1>
            <p>Loading your bookmarks...</p>
          </div>
        </div>
      </Layout>
    );
  }

  const bookmarks = userProgress.bookmarks || [];
  
  // Filter bookmarks based on search term
  const filteredBookmarks = bookmarks.filter(bookmark => 
    bookmark.note?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bookmark.dayNumber.toString().includes(searchTerm)
  ).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  const handleRemoveBookmark = async (dayNumber: number) => {
    if (window.confirm('Are you sure you want to remove this bookmark?')) {
      await removeBookmark(dayNumber);
    }
  };

  const getDayTitle = (dayNumber: number) => {
    // Generate appropriate titles based on day number and parts
    const partTitles = {
      1: "Foundations of Faith",
      2: "Walking with God", 
      3: "God's Promises",
      4: "Wisdom and Understanding",
      5: "Love and Redemption",
      6: "Hope and Perseverance",
      7: "Service and Discipleship",
      8: "Prayer and Communion",
      9: "Growth and Transformation",
      10: "Victory and Completion"
    };
    
    const part = Math.ceil(dayNumber / 10);
    return partTitles[part] || "Bible Study";
  };

  return (
    <Layout title="My Bookmarks" description="View your saved bookmarks">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>🔖 My Bookmarks</h1>
          <p>Your personal collection of meaningful moments from the 100-day Bible study.</p>
        </div>

        {bookmarks.length > 0 && (
          <div className={styles.searchSection}>
            <input
              type="text"
              placeholder="Search your bookmarks and notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <div className={styles.searchIcon}>🔍</div>
          </div>
        )}

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{bookmarks.length}</span>
            <span className={styles.statLabel}>Total Bookmarks</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{bookmarks.filter(b => b.note).length}</span>
            <span className={styles.statLabel}>With Notes</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>
              {searchTerm ? filteredBookmarks.length : bookmarks.length}
            </span>
            <span className={styles.statLabel}>
              {searchTerm ? 'Found' : 'Showing'}
            </span>
          </div>
        </div>

        {bookmarks.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>📖</div>
            <h2>No Bookmarks Yet</h2>
            <p>
              Start bookmarking meaningful passages as you progress through your Bible study.
              You can add bookmarks from any day's reading page.
            </p>
            <Link to="/docs/intro" className={styles.startReading}>
              Start Reading
            </Link>
          </div>
        ) : filteredBookmarks.length === 0 ? (
          <div className={styles.noResults}>
            <div className={styles.emptyIcon}>🔍</div>
            <h2>No bookmarks found</h2>
            <p>Try adjusting your search term to find what you're looking for.</p>
            <button 
              onClick={() => setSearchTerm('')}
              className={styles.clearSearch}
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className={styles.bookmarksList}>
            {filteredBookmarks.map((bookmark) => (
              <div key={`${bookmark.dayNumber}-${bookmark.timestamp}`} className={styles.bookmarkCard}>
                <div className={styles.bookmarkHeader}>
                  <div className={styles.bookmarkTitle}>
                    <h3>
                      <Link to={`/docs/part-${Math.ceil(bookmark.dayNumber / 8)}/day-${bookmark.dayNumber}`}>
                        Day {bookmark.dayNumber}: {getDayTitle(bookmark.dayNumber)}
                      </Link>
                    </h3>
                    <span className={styles.bookmarkDate}>
                      {new Date(bookmark.timestamp).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <button
                    onClick={() => handleRemoveBookmark(bookmark.dayNumber)}
                    className={styles.removeButton}
                    title="Remove bookmark"
                  >
                    ×
                  </button>
                </div>

                {bookmark.note && (
                  <div className={styles.bookmarkNote}>
                    <h4>Your Note:</h4>
                    <p>{bookmark.note}</p>
                  </div>
                )}

                <div className={styles.bookmarkFooter}>
                  <Link 
                    to={`/docs/part-${Math.ceil(bookmark.dayNumber / 8)}/day-${bookmark.dayNumber}`}
                    className={styles.readAgain}
                  >
                    📖 Read Again
                  </Link>
                  <span className={styles.bookmarkIcon}>🔖</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {bookmarks.length > 0 && (
          <div className={styles.encouragement}>
            <p>
              💡 <strong>Tip:</strong> Your bookmarks are automatically saved as you progress. 
              You can always add personal notes to remember what touched your heart during each reading.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}