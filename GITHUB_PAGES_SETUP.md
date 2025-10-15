# GitHub Pages Setup Checklist for Wisdom Walk

## ✅ Step-by-Step Setup Instructions

### Step 1: Verify Configuration Files ✅ DONE
- [x] `docusaurus.config.ts` has `baseUrl: '/wisdom-walk/'` 
- [x] `.github/workflows/deploy.yml` exists
- [x] Changes are committed and pushed to `main` branch

### Step 2: Enable GitHub Pages in Repository Settings ⚠️ REQUIRED

**You MUST do this manually in your browser:**

1. Go to: https://github.com/rhocela/wisdom-walk/settings/pages

2. Under **"Build and deployment"** section:
   - **Source**: Select **"GitHub Actions"** (NOT "Deploy from a branch")
   
3. Click **Save** (if there's a save button)

### Step 3: Trigger the Deployment

After enabling GitHub Pages in Step 2, you have two options:

**Option A: Make a small change and push** (Recommended)
```bash
# Make a small change to trigger deployment
echo "# Deployment trigger" >> README.md
git add README.md
git commit -m "Trigger GitHub Pages deployment"
git push origin main
```

**Option B: Manually trigger workflow**
1. Go to: https://github.com/rhocela/wisdom-walk/actions
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button (if available)

### Step 4: Monitor Deployment

1. Go to: https://github.com/rhocela/wisdom-walk/actions
2. Wait for the workflow to complete (green checkmark)
3. Usually takes 2-3 minutes

### Step 5: Verify Your Live Site

Once deployment is complete, visit:
**https://rhocela.github.io/wisdom-walk/**

---

## 🔍 Troubleshooting

### If you get 404 error:
1. ✅ Verify GitHub Pages is set to **"GitHub Actions"** source (Step 2 above)
2. ✅ Check Actions tab - workflow should have run successfully
3. ✅ Wait 1-2 minutes after deployment completes
4. ✅ Hard refresh browser (Ctrl+Shift+R or Ctrl+F5)

### If Actions workflow fails:
1. Check the Actions tab for error messages
2. Ensure repository is public (or has GitHub Pages enabled for private repos)
3. Verify `npm ci` and `npm run build` work locally

### Current Status Check:
Run these commands to verify:
```bash
# Check current branch
git branch --show-current

# Check if files are pushed
git status

# View recent commits
git log --oneline -3
```

---

## 📝 What We've Configured

1. **docusaurus.config.ts**: 
   - `url: 'https://rhocela.github.io'`
   - `baseUrl: '/wisdom-walk/'`
   - `organizationName: 'rhocela'`
   - `projectName: 'wisdom-walk'`

2. **.github/workflows/deploy.yml**: 
   - Triggers on push to `main` branch
   - Builds the site with `npm run build`
   - Deploys to GitHub Pages using GitHub Actions

---

## 🎯 Next Action Required

**YOU MUST GO TO GITHUB AND ENABLE GITHUB PAGES:**

Click this link and set Source to "GitHub Actions":
👉 https://github.com/rhocela/wisdom-walk/settings/pages

After that, the site will deploy automatically!
