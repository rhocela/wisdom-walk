import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Wisdom Walk',
  tagline: 'Reading the Word ✨ with purpose',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://rhocela.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/wisdom-walk/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rhocela', // Usually your GitHub org/user name.
  projectName: 'wisdom-walk', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/rhocela/wisdom-walk/tree/main/',
        },
        blog: {
          blogTitle: 'Parallels',
          blogDescription: 'Discovering patterns and connections throughout Scripture',
          blogSidebarTitle: 'All Parallels',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/rhocela/wisdom-walk/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'gods-heart',
        path: 'gods-heart',
        routeBasePath: 'gods-heart',
        sidebarPath: './sidebars-gods-heart.ts',
        editUrl: 'https://github.com/rhocela/wisdom-walk/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'science-scripture',
        path: 'science-scripture',
        routeBasePath: 'science-scripture',
        editUrl: 'https://github.com/rhocela/wisdom-walk/tree/main/',
        blogSidebarTitle: 'Recent Articles',
        blogSidebarCount: 'ALL',
        showReadingTime: true,
        feedOptions: {
          type: ['rss', 'atom'],
          title: 'Science & Scripture',
          description: 'Exploring the beautiful alignment between scientific discovery and biblical truth',
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'prophecy-fulfilled',
        path: 'prophecy-fulfilled',
        routeBasePath: 'prophecy-fulfilled',
        sidebarPath: './sidebars-prophecy-fulfilled.ts',
        editUrl: 'https://github.com/rhocela/wisdom-walk/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'divine-comedy',
        path: 'divine-comedy',
        routeBasePath: 'divine-comedy',
        editUrl: 'https://github.com/rhocela/wisdom-walk/tree/main/',
        blogSidebarTitle: 'Recent Stories',
        blogSidebarCount: 'ALL',
        showReadingTime: true,
        feedOptions: {
          type: ['rss', 'atom'],
          title: 'Divine Comedy',
          description: 'Joyful stories and insights that celebrate faith and life',
        },
      },
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: ['/docs', '/gods-heart', '/prophecy-fulfilled'],
        blogRouteBasePath: ['/blog', '/science-scripture', '/divine-comedy'],
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Wisdom Walk',
      logo: {
        alt: 'Wisdom Walk Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'The Bible Bridge',
        },
        {to: '/blog', label: 'Parallels', position: 'left'},
        {
          to: '/gods-heart',
          label: "God's Heart",
          position: 'left',
          activeBaseRegex: `/gods-heart/`,
        },
        {
          to: '/science-scripture',
          label: 'Science & Scripture',
          position: 'left',
          activeBaseRegex: `/science-scripture/`,
        },
        {
          to: '/prophecy-fulfilled',
          label: 'Prophecy Fulfilled',
          position: 'left',
          activeBaseRegex: `/prophecy-fulfilled/`,
        },
        {
          to: '/divine-comedy',
          label: 'Divine Comedy',
          position: 'left',
          activeBaseRegex: `/divine-comedy/`,
        },
        {
          href: 'https://github.com/rhocela/wisdom-walk',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Study',
      //     items: [
      //       {
      //         label: 'Bible Study Guide',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'GitHub Discussions',
      //         href: 'https://github.com/rhocela/wisdom-walk/discussions',
      //       },
      //       {
      //         label: 'Issues',
      //         href: 'https://github.com/rhocela/wisdom-walk/issues',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/rhocela/wisdom-walk',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Wisdom Walk.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
