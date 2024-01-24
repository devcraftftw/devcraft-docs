import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DevCraft',
  tagline: '🤯 го в блог (gl / hf)',
  favicon: 'img/favicon.ico',

  url: 'https://blog.devcraft.app',
  baseUrl: '/',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          blogTitle: 'Блог!',
          blogDescription: 'Блог на различную тематику прямиком от ребят из DevCraft',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'Все статьи',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DevCraft',
      logo: {
        alt: 'DevCraft Logo',
        src: 'img/logo-dark.png',
        srcDark: 'img/logo-root.png'
      },
      items: [
        {to: '/blog', label: 'Блог', position: 'left'},
        {
          href: 'https://github.com/slayoffer/devcraft-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Комьюнити',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/devCraft_app',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DevCraft.app Corporation | All rights reserved | Даже и не сомневайся в этом`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
