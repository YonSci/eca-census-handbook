// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

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
          // editUrl:
          //   'https://github.com/YonSci/eca-census-handbook/tree/main/',
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
        // title: 'E-Census Handbook', // Commented out or remove
        // logo: { // Commented out or remove
        //   alt: 'My Site LogE-Census Handbook Logo',
        //   src: 'img/uneca1.png',
        // },
        items: [], // Set items to an empty array to effectively hide the default navbar content
      },

      algolia: {
      apiKey: "6852f8e55563301cb8d05f4ef18260b1", 
      indexName: "yonsciio",
      appId: "0HXGAP1E79",
      contextualSearch: false, // Ensure this is explicitly false
      searchPagePath: false,   // Keep this for modal search results
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        { name: 'keywords', content: 'census, digital census, Africa, E-Census Handbook, UNECA, UNFPA, ONS-UK' },
        { property: 'og:title', content: 'E-Census Handbook' },
        { property: 'og:description', content: 'Digital Population and Housing Census Handbook for Africa' },
        { property: 'og:image', content: 'https://yonsci.github.io/eca-census-handbook/img/docusaurus-social-card.jpg' },
      ],
      
      customCss: [require.resolve('./src/css/custom.css')],


    }),
};

export default config;