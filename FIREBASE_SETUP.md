# Firebase Authentication Setup Instructions

## 🔥 **Step 1: Create Firebase Project**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" 
3. Enter project name: `wisdom-walk` (or your preferred name)
4. Disable Google Analytics (unless you want it)
5. Click "Create project"

## 🔧 **Step 2: Enable Authentication**

1. In your Firebase project, click "Authentication" in the sidebar
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable the following providers:

### **Google Provider:**
- Click "Google" 
- Toggle "Enable"
- Enter your project's public-facing name: "Wisdom Walk"
- Choose your support email
- Click "Save"

### **Facebook Provider:**
- Click "Facebook"
- Toggle "Enable" 
- You'll need to create a Facebook App:
  1. Go to [Facebook Developers](https://developers.facebook.com/)
  2. Create a new app
  3. Add Facebook Login product
  4. Copy App ID and App Secret to Firebase
- Click "Save"

## 🌐 **Step 3: Configure Web App**

1. In Firebase project overview, click the web icon "</>"
2. Enter app nickname: "wisdom-walk-web"
3. **Do NOT** check "Set up Firebase Hosting" (we're using GitHub Pages)
4. Click "Register app"
5. Copy the Firebase configuration object

## 📝 **Step 4: Update Firebase Configuration**

Replace the placeholder values in `src/lib/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com", 
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

## 🔒 **Step 5: Set Up Firestore Database**

1. In Firebase Console, click "Firestore Database"
2. Click "Create database"
3. Select "Start in test mode" (for now)
4. Choose a location close to your users
5. Click "Done"

### **Security Rules:**
After testing, update your Firestore rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    match /userProgress/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 🎯 **Step 6: Test Authentication**

1. Run your development server: `npm start`
2. Try signing in with Google
3. Check Firebase Console > Authentication > Users to see if user appears

## 🚀 **Step 7: Production Setup**

For production deployment:

1. **Update Firestore rules** to production-ready rules (shown above)
2. **Add authorized domains** in Authentication > Settings > Authorized domains
3. **Add your GitHub Pages domain**: `yourusername.github.io`

## 🎨 **Features Included:**

✅ **Google & Facebook Authentication**  
✅ **Progress Tracking** - Daily completion status  
✅ **Reading Streaks** - Consecutive day tracking  
✅ **Bookmarking** - Save favorite passages with notes  
✅ **User Profiles** - Display progress and stats  
✅ **Responsive Design** - Works on all devices  

## 🔧 **Customization Options:**

- **Change colors** in CSS module files
- **Add more auth providers** (Twitter, GitHub, etc.)
- **Extend progress tracking** (reading time, notes, etc.)
- **Add social features** (sharing, comments)

## ❓ **Troubleshooting:**

**Issue: "Firebase: Error (auth/unauthorized-domain)"**
- Add your domain to Firebase Console > Authentication > Settings > Authorized domains

**Issue: Sign-in popup blocked**
- Try `signInWithRedirect` instead of `signInWithPopup` in the auth context

**Issue: User data not saving**
- Check Firestore security rules
- Verify user is authenticated before writing data

---

## 🎉 **You're All Set!**

Your Bible study site now has:
- User authentication with Google/Facebook
- Progress tracking across all 100 days
- Personal bookmarking system
- Beautiful, responsive UI

Users can now track their journey through the entire Bible with a personalized experience!