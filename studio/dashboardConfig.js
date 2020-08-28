export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f491432187cf9d5e2112d50',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-tp1izt6v',
                  apiId: 'b7caa252-950b-4900-85e5-980476ed938c'
                },
                {
                  buildHookId: '5f49143331bda8a1a7eca358',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-cgn7646m',
                  apiId: '801f8f4b-c082-4f6e-93f1-5f271d85b940'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vinamelody/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-cgn7646m.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
