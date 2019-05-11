const config = {
  siteTitle: 'Ihwan ID',
  siteTitleShort: 'Ihwan ID',
  siteTitleAlt: 'Ihwan ID',
  siteLogo: '/logos/logo-48.png',
  siteUrl: 'https://www.ihwan.id',
  repo: 'https://github.com/ihwanid/ihwan.id',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Ihwan ID is full-stack software developer specializing in modern JavaScript who breaks down complex concepts in an accessible and intuitive way.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-125079658-2',
  disqusShortname: 'ihwanid',
  postDefaultCategoryID: 'Tech',
  userName: 'ihwan',
  userEmail: 'mynameisihwan@gmail.com',
  userTwitter: 'ihwan_id',
  userLocation: 'Majalengka, ID',
  userAvatar: 'https://api.adorable.io/avatars/150/test.png',
  userDescription:
    'I build open source projects and write the missing instruction manuals of the web.',
  menuLinks: [
    {
      name: 'Me',
      link: '/me/',
    },
    {
      name: 'Artikel',
      link: '/blog/',
    },
    {
      name: 'Kontak',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config