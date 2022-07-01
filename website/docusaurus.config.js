module.exports = {
  title: 'Trip Deals',
  tagline: 'Best deals for your leisure',
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
      items: [
        {
          to: 'deals',
          label: 'Deals',
          position: 'left',
        },
        {
          to: 'https://www.hurb.com/aud/https://www.hurb.com/br?cmp=18055',
          label: 'Hurb',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Zanaca. Built with Docusaurus.  Icons by Freepik @ www.flaticon.com`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../contents',
          routeBasePath: '.',
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
  ],
};
