# Search Setup Guide

## Current Setup: Local Search

Your site currently uses **@easyops-cn/docusaurus-search-local** for search functionality. This provides instant search without requiring external services.

### Features:
- ✅ Works immediately without approval
- ✅ Searches docs and pages
- ✅ No external dependencies
- ✅ Fast local indexing
- ✅ Works offline in production build

### Configuration
The local search is configured in `docusaurus.config.ts`:

```typescript
themes: [
  [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    {
      hashed: true,
      language: ["en"],
      indexDocs: true,
      indexBlog: false,
      indexPages: true,
      docsRouteBasePath: '/docs',
      blogRouteBasePath: '/blog',
    },
  ],
],
```

---

## Alternative: Algolia DocSearch (Optional)

If you want to upgrade to Algolia DocSearch in the future, follow these steps:

### Step 1: Apply for DocSearch
1. Visit https://docsearch.algolia.com/apply/
2. Fill out the application form
3. Wait for approval (usually takes a few days)

### Step 2: Update Configuration
Once approved, you'll receive:
- Application ID
- API Key
- Index Name

Then update `docusaurus.config.ts`:

1. **Remove** the local search theme configuration
2. **Add** Algolia config to `themeConfig`:

```typescript
themeConfig: {
  // ... other config
  algolia: {
    appId: 'YOUR_APP_ID',
    apiKey: 'YOUR_SEARCH_API_KEY',
    indexName: 'wisdom-walk',
    contextualSearch: true,
    searchParameters: {},
    searchPagePath: 'search',
  },
  // ... rest of config
}
```

### Step 3: Uninstall Local Search
```bash
npm uninstall @easyops-cn/docusaurus-search-local
```

### Algolia Benefits:
- 🔍 More advanced search algorithms
- ☁️ Cloud-based (no build-time indexing)
- 📊 Search analytics
- 🎯 Better relevance ranking
- 🌐 CDN-delivered

---

## Testing Search

### Development
1. Run `npm start`
2. Click the search icon in the navbar (or press Ctrl+K / Cmd+K)
3. Type your search query

### Production Build
1. Run `npm run build`
2. Run `npm run serve`
3. Test the search functionality

---

## Troubleshooting

### Search not appearing?
- Make sure you've restarted the dev server after installing the plugin
- Check that the search icon appears in the navbar
- Try rebuilding: `npm run clear && npm start`

### No search results?
- Ensure your pages have proper content
- Check that `indexDocs` and `indexPages` are set to `true`
- Rebuild the site to regenerate the search index

### Search bar styling issues?
- You can customize search styles in `src/css/custom.css`
- See the plugin's documentation for CSS class names
