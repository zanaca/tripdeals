module.exports = {
  title: 'Trip Deals',
  tagline: 'Ofertas incríveis para sua viagem',
  url: 'https://zanaca.github.io',
  baseUrl: '/tripdeals/',
  favicon: 'img/favicon.png',
  organizationName: 'zanaca',
  projectName: 'tripdeals',
  themeConfig: {
    navbar: {
      title: 'Trip Deals',
      logo: {
        alt: 'Trip Deals Logo',
        src: 'img/logo.svg',
      },
      links: [{
        to: 'deals',
        label: 'Ofertas',
        position: 'left'
      }, {
        to: 'https://www.hurb.com/aud/https://www.hurb.com?cmp=18055',
        label: 'Hurb',
        position: 'right'
      }],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Zanaca. Feito com Docusaurus.  Icones feitos por Freepik em www.flaticon.com`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../contents',
          routeBasePath: '',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'UA-26034544',
      },
    ],
    [
    '@docusaurus/plugin-sitemap',
    {
      cacheTime: 600 * 1000, // 600 sec - cache purge period
      changefreq: 'weekly',
      priority: 0.5,
    },
  ]],
};
