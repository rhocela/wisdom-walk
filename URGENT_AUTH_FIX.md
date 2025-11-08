# 🚨 URGENT: Fix Live Site Authentication

## **The Problem:**
Your sign-in popup closes immediately because **Firebase is not configured**. Here's how to fix it:

---

## 🔥 **Step 1: Create Firebase Project (5 minutes)**

1. **Go to [Firebase Console](https://console.firebase.google.com/)**
2. **Click "Create a project"**
3. **Enter project name:** `wisdom-walk-auth` (or any name you prefer)
4. **Disable Google Analytics** (unless you want it)
5. **Click "Create project"**

---

## 🔐 **Step 2: Add Web App (3 minutes)**

1. **In your Firebase project, click the web icon `</>`**
2. **Enter app nickname:** `wisdom-walk-web`
3. **❌ Do NOT check "Set up Firebase Hosting"** (you're using GitHub Pages)
4. **Click "Register app"**
5. **Copy the config object** (it looks like this):

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyB...",
  authDomain: "your-project.firebaseapp.com", 
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:..."
};
```

---

## ⚡ **Step 3: Update Your Code (2 minutes)**

1. **Open:** `src/lib/firebase.js` in your code
2. **Replace the placeholder config with your real config:**

```javascript
// REPLACE THIS:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",                    // ❌ Fake
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",  // ❌ Fake
  projectId: "YOUR_PROJECT_ID",              // ❌ Fake
  storageBucket: "YOUR_PROJECT_ID.appspot.com",   // ❌ Fake
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",  // ❌ Fake
  appId: "YOUR_APP_ID"                       // ❌ Fake
};

// WITH YOUR REAL CONFIG:
const firebaseConfig = {
  apiKey: "AIzaSyB...",                      // ✅ Real
  authDomain: "wisdom-walk-123.firebaseapp.com",  // ✅ Real
  projectId: "wisdom-walk-123",              // ✅ Real
  storageBucket: "wisdom-walk-123.appspot.com",   // ✅ Real
  messagingSenderId: "123456789",            // ✅ Real
  appId: "1:123456789:web:abc123"            // ✅ Real
};
```

---

## 🔒 **Step 4: Enable Authentication (5 minutes)**

1. **In Firebase Console, click "Authentication"**
2. **Click "Get started"**
3. **Go to "Sign-in method" tab**
4. **Enable Google:**
   - Click "Google"
   - Toggle "Enable" 
   - Enter project name: "Wisdom Walk"
   - Choose your support email
   - Click "Save"

5. **Enable Facebook (optional):**
   - Click "Facebook"
   - Toggle "Enable"
   - You'll need Facebook App ID/Secret (can skip for now)

---

## 🌍 **Step 5: Add Your Domain (CRITICAL!)**

1. **Still in Firebase Authentication settings**
2. **Go to "Settings" tab**
3. **Scroll to "Authorized domains"**
4. **Click "Add domain"**
5. **Add:** `rhocela.github.io` (your GitHub Pages domain)
6. **Click "Done"**

**⚠️ This is why your popup closes - unauthorized domain!**

---

## 🗄️ **Step 6: Set Up Database (3 minutes)**

1. **In Firebase Console, click "Firestore Database"**
2. **Click "Create database"**
3. **Select "Start in test mode"**
4. **Choose location closest to you**
5. **Click "Done"**

---

## 🚀 **Step 7: Deploy & Test**

1. **Commit your firebase.js changes**
2. **Push to GitHub**
3. **Wait for GitHub Pages to rebuild (2-3 minutes)**
4. **Test sign-in on your live site!**

---

## 🎯 **Expected Result:**

- ✅ Sign-in button appears in navbar
- ✅ Clicking opens beautiful login modal
- ✅ Google sign-in works smoothly
- ✅ User profile appears after login
- ✅ Progress tracking works on day pages

---

## 🐛 **Still Having Issues?**

**Check browser console (F12) for errors:**

1. **"Firebase: Error (auth/unauthorized-domain)"**
   → Add your domain in Step 5

2. **"Firebase: Error (auth/invalid-api-key)"**
   → Check your config in Step 3

3. **"Firebase: Error (auth/project-not-found)"**
   → Verify projectId in your config

4. **Popup blocked by browser**
   → Allow popups for your site

---

## ⏱️ **Total Time: 15-20 minutes**

Follow these steps in order, and your authentication will work perfectly! The system is already built - it just needs Firebase configuration.

Your users will be able to track their entire 100-day Bible study journey! 🙌