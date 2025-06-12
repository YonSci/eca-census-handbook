// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'E-Census Handbook',
  tagline: 'Documentation for E-Census Handbook',
  favicon: 'img/uneca1.ico',

  // Set the production url of your site here
  url: 'https://yonsci.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/eca-census-handbook/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'YonSci', // Usually your GitHub org/user name.
  projectName: 'eca-census-handbook', // Usually your repo name.
  deploymentBranch: 'gh-pages', // The branch that GitHub pages will deploy from.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/YonSci/eca-census-handbook/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'E-Census Handbook',
        logo: {
          alt: 'My Site Logo',
          src: 'img/uneca1.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'experienceslessons2020Sidebar',
            position: 'left',
            label: 'Experiences and lessons',
          },
          {
            type: 'docSidebar',
            sidebarId: 'casestudiesSidebar',
            position: 'left',
            label: 'Case Studies',
          },
          {
            type: 'docSidebar',
            sidebarId: 'recommendationsSidebar',
            position: 'left',
            label: 'Recommendations',
          },
          {
            type: 'docSidebar',
            sidebarId: 'resourcesSidebar',
            position: 'left',
            label: 'Resources',
          },
          {
            type: 'docSidebar',
            sidebarId: 'checklistSidebar',
            position: 'left',
            label: 'checklist',
          },
          {
            href: 'https://github.com/YonSci/eca-census-handbook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      algolia: {
      apiKey: "7b70333c5747e48f62c728cd3215a3d4", 
      indexName: "ecensus_index",
      appId: "3KS0CR1XE2",  
      contextualSearch: true,
      searchPagePath: false,
      },

    }),
};

export default config;