import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Bubble Engine ドキュメント',
  tagline: 'WebゲームエンジンBubble Engineの公式ドキュメント',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://fogrexon.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/bubble-engine-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fogrexon', // Usually your GitHub org/user name.
  projectName: 'bubble-engine-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Bubble Engine Docs',
      logo: {
        alt: 'Bubble Engine Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/Fogrexon/bubble-engine',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
        },
        {
          type: 'docsVersionDropdown',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Engine',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Fogrexon/bubble-engine',
            },
            {
              label: 'Author\'s Twitter',
              href: 'https://twitter.com/FagLexOn',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Document GitHub',
              href: 'https://github.com/Fogrexon/bubble-engine-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fogrexon. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
