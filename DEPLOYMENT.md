# GitHub Pages Deployment Guide

## ✅ Configuration Complete

Your Wisdom Walk site is now configured for GitHub Pages deployment at:
**https://rhocela.github.io/wisdom-walk/**

## 📋 Next Steps to Deploy

### 1. Push your changes to GitHub

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

**Note:** Make sure you're pushing to the `main` branch, or update the workflow file to match your default branch name.

### 2. Enable GitHub Pages in your repository

1. Go to your GitHub repository: https://github.com/rhocela/wisdom-walk
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   
That's it! The workflow will automatically build and deploy your site.

### 3. Wait for deployment

- After pushing to `main`, go to the **Actions** tab in your repository
- You'll see the deployment workflow running
- Once complete (usually 2-3 minutes), your site will be live at:
  **https://rhocela.github.io/wisdom-walk/**

## 🔧 What Was Changed

1. **docusaurus.config.ts**: Updated `baseUrl` from `/` to `/wisdom-walk/`
2. **Created `.github/workflows/deploy.yml`**: GitHub Actions workflow for automatic deployment

## 🚀 Future Deployments

Every time you push to the `main` branch, the site will automatically rebuild and redeploy. No manual steps needed!

## 🔍 Troubleshooting

If deployment fails:
1. Check the Actions tab for error messages
2. Ensure your repository is public (or you have GitHub Pages enabled for private repos)
3. Verify the workflow has the correct permissions in your repository settings
4. Make sure all dependencies install correctly (`npm ci` succeeds)

## 📝 Local Testing

To test how the site will look with the `/wisdom-walk/` base URL:

```bash
npm run build
npm run serve
```

Visit: http://localhost:3000/wisdom-walk/
