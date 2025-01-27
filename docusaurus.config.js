module.exports = {
  title: "MetaGame Wiki",
  tagline: "Build the future you want to live in.",
  url: "https://wiki.metagame.wtf",
  baseUrl: "/",
  favicon: "img/mg-icon.png",
  organizationName: "MetaFam",
  projectName: "metagame-wiki",
  // customFields: {
  //   GA_TAG: process.env.GA_TAG,
  // },
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    gtag: {
      trackingID: 'G-9SQ6R9576M',
      anonymizeIP: true, // We don't need to know folks IPs
    },
    image: "img/wiki-cover.png",
    // headerLinks: [{ page: 'help', label: 'Help' }],
    navbar: {
      title: "MetaGame Wiki",
      logo: {
        alt: "MetaGame Logo",
        src: "img/mg-crystal.png",
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://wiki.metagame.wtf/admin/#/?",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
  plugins: [
    require.resolve("docusaurus-lunr-search"),
    require.resolve("docusaurus-plugin-sass"),
    "docusaurus2-dotenv",
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/', // string
            from: ['/docs/home/'], // string | string[]
          },
        ],
      },
    ],
  ],
};
