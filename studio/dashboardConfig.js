export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-studio-ihqbaean',
                  apiId: '0f233327-2622-4ba4-bf97-706bc815655a'
                },
                {
                  buildHookId: '60d7c507622494dad1f09669',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-web-bi9dgkfs',
                  apiId: '5e795ea2-1893-4383-91c5-41f0735ae780'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stephenstuder/sanity-nuxt-events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-web-bi9dgkfs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
