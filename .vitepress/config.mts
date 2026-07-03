import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Lingoready App',
  description: 'Documentation & status for the Lingoready mobile app',
  base: '/lingoready-app-docs/',
  srcExclude: ['node_modules'],
  themeConfig: {
    nav: [
      { text: 'Docs', link: '/docs/01-overview' },
      { text: 'Status', link: '/STATUS' },
      { text: 'Roadmap', link: '/ROADMAP' },
      { text: 'Changelog', link: '/CHANGELOG' },
      { text: 'API Docs', link: 'https://jadapema.github.io/lingoready-api-docs/' },
    ],
    sidebar: [
      {
        text: 'Product',
        items: [
          { text: 'Overview', link: '/docs/01-overview' },
          { text: 'Sessions & Practice Modes', link: '/docs/04-sessions' },
          { text: 'Screens', link: '/docs/03-screens' },
        ],
      },
      {
        text: 'Engineering',
        items: [
          { text: 'Architecture', link: '/docs/02-architecture' },
          { text: 'Setup', link: '/docs/05-setup' },
          { text: 'Build & Release', link: '/docs/06-build-release' },
          { text: 'Analytics Events', link: '/docs/07-analytics-events' },
          { text: 'Troubleshooting', link: '/docs/08-troubleshooting' },
        ],
      },
      {
        text: 'Project',
        items: [
          { text: 'Status', link: '/STATUS' },
          { text: 'Roadmap', link: '/ROADMAP' },
          { text: 'Changelog', link: '/CHANGELOG' },
        ],
      },
      {
        text: 'Legal',
        items: [
          { text: 'Terms of Service', link: '/legal/terms' },
          { text: 'Privacy Policy', link: '/legal/privacy' },
          { text: 'Open-source licenses', link: '/legal/licenses' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Jadapema/lingoready-app' }],
    search: { provider: 'local' },
    footer: { message: 'Lingoready — AI voice coach for workplace English' },
  },
});
