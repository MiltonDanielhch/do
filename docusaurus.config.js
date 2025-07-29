import { themes as prismThemes } from 'prism-react-renderer';

export default {
  title: 'GADBENI DOCS',
  tagline: 'Sistema interno de documentación de sistemas GADBENI',
  favicon: 'img/icon.png',
  url: 'https://docs.gadbeni.gob.bo',
  baseUrl: '/',
  organizationName: 'gadbeni',
  projectName: 'documentacion',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js', 
          routeBasePath: '/',
          editUrl: 'https://github.com/tu-usuario/tu-repositorio/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    mermaid: {
      options: {
        securityLevel: 'loose',
        theme: {
          light: 'neutral',
          dark: 'dark',
        },
        flowchart: { curve: 'basis' },
        sequence: { showSequenceNumbers: true },
      },
    },
    navbar: {
      title: 'GADBENI DOCS',
      logo: {
        alt: 'Logo GADBENI',
        src: 'img/icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {
          href: 'https://github.com/gadbeni',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Gobierno Autónomo Departamental del Beni.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'bash', 'json'],
    },
     search: {
      indexDocs: true,
      indexBlog: true,
      indexPages: true,
      language: "es",
      style: undefined,
    },
  },
};