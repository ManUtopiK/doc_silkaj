module.exports = {
  theme: 'yuu',
  plugins: [['vuepress-plugin-code-copy', {
    color: '#3eaf7c',
    backgroundColor: '#3eaf7c'
  }]],
  locales: {
    '/': {
      lang: 'English',
      title: 'Silkaj',
      description: 'Powerfull and lightweight CLI for Duniter'
    },
    '/fr/': {
      lang: 'Français',
      title: 'Silkaj',
      description: 'CLI performant et léger pour Duniter'
    }
  },
  themeConfig: {
    yuu: {
      defaultDarkTheme: true,
      disableThemeIgnore: true
		},
    smoothScroll: true,
    locales: {
      '/': {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          {
            text: 'Help',
            ariaLabel: 'Help Menu',
            items: [
                { text: 'Technical forum', link: 'https://forum.duniter.org/c/Clients/silkaj/' },
                { text: 'XMPP chat room', link: 'https://chat.duniter.org/' }
            ]
        },
          { text: 'GitLab', link: 'https://git.duniter.org/clients/python/silkaj' }
        ]
      },
      '/fr/': {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Guide', link: '/fr/guide/' },
          {
            text: 'Aide',
            ariaLabel: 'Menu d\'aide',
            items: [
                { text: 'Forum technique', link: 'https://forum.duniter.org/c/Clients/silkaj/' },
                { text: 'Salon XMPP', link: 'https://chat.duniter.org/' }
            ]
          },
          { text: 'GitLab', link: 'https://git.duniter.org/clients/python/silkaj' }
        ]
      }
    }
  }
}