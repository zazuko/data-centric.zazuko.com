// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Data-Centric Revolution @ Zazuko',
  tagline: 'We enable each and everyone to get better access to information',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://data-centric.zazuko.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zazuko/data-centric.zazuko.com/tree/main/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        title: 'Data-Centric',
        logo: {
          alt: 'Zazuko Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'aboutSidebar',
            position: 'left',
            label: 'Intro',
          },
          {
            type: 'docSidebar',
            sidebarId: 'rdfjsSidebar',
            position: 'left',
            label: 'RDF/JS',
          },
          {
            type: 'docSidebar',
            sidebarId: 'workflowsSidebar',
            position: 'left',
            label: 'Workflows',
          },
          {
            href: 'https://github.com/zazuko',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get started',
                to: '/docs/about',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'RDF Commnity Discussions',
                href: 'https://github.com/rdf-community/discussions/discussions',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/zazukocom',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/zazuko',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zazuko GmbH. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['turtle'],
      },
    }),
};

module.exports = config;
