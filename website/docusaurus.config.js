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
      links: [
        {
          to: 'https://us.hurb.com/aud/https://us.hurb.com?cmp=18055',
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
    ],
  ],
};
