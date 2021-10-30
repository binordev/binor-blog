module.exports = {
  siteTitle: "Binor's blog",
  siteDescription: 'Blogs on development',
  authorName: 'Binor',
  twitterUsername: 'binordev',
  authorAvatar: 'Bi1.png', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  Yet another developer
  `,
  siteUrl: 'https://binordev.github.io/',
  // disqusSiteUrl: 'https://www.binordev.io/',
  // disqusShortname: 'maxpou',
  // Prefixes all links. For cases when deployed to binordev.io/blog/
  pathPrefix: '/blog', // Note: it must *not* have a trailing slash.
  siteCover: 'Bi1.png', // file in content/images
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/Bi1.svg',
  postsPerPage: 6,
  headerTitle: "Binor's blog",
  headerLinksIcon: 'Bi1.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
    // {
    //   label: 'Installation',
    //   url: '/how-to-install',
    // },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    // {
    //   sectionName: 'Explore',
    //   links: [
    //     {
    //       label: 'Blog',
    //       url: '/',
    //     },
    //     {
    //       label: 'About',
    //       url: '/about',
    //     },
    //     {
    //       label: 'Installation',
    //       url: '/how-to-install',
    //     },
    //   ],
    // },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/binordev/binor-blog',
          rel: 'external',
        },
        {
          label: 'Website',
          url: 'https://www.binordev.io',
          rel: 'external',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/binordev',
          rel: 'external',
        },
      ],
    },
  ],
}
