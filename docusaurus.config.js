/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
  },
  title: 'E-vendi Docs',
  tagline: 'Documentação completa da API',
  url: 'https://developer.e-vendi.com.br',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://e-vendi.app/wp-content/uploads/2021/04/cropped-fav-8-1-32x32.png',
  organizationName: 'E-vendi',
  projectName: 'e-vendi-docs',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'E-vendi Logo',
        src:
          'https://lojadoevendi.e-vendi.site/imgs/e-vendi-white.png',
      },
      items: [],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/e-vendi/e-vendi-docs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
