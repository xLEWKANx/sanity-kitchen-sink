export default {
  widgets: [
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
                  buildHookId: '60620ce7e1939600d4af18ee',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qgropbkq',
                  apiId: '6fe75b5d-ce05-4c30-b03d-998b8d8bc90e'
                },
                {
                  buildHookId: '60620ce7c00dfb00db0a92ae',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9oap3u9p',
                  apiId: 'a19fa725-9c79-47c5-a271-dcb3a97d38c9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xLEWKANx/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9oap3u9p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
