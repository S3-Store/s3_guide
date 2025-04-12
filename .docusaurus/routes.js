import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/fthobe',
    component: ComponentCreator('/blog/authors/fthobe', '766'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/community',
    component: ComponentCreator('/blog/tags/community', '694'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '917'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'b61'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'df9'),
            routes: [
              {
                path: '/docs/category/petstore-api-1.0.0',
                component: ComponentCreator('/docs/category/petstore-api-1.0.0', 'dbf'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/category/petstore-versioned-api',
                component: ComponentCreator('/docs/category/petstore-versioned-api', 'a90'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '13e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/add-pet',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/add-pet', '0a2'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/create-user',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/create-user', 'ea5'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/create-users-with-array-input',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/create-users-with-array-input', '3f6'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/create-users-with-list-input',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/create-users-with-list-input', '64d'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/delete-order',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/delete-order', 'b52'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/delete-pet',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/delete-pet', '2ee'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/delete-user',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/delete-user', '388'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/find-pets-by-status',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/find-pets-by-status', '05e'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/find-pets-by-tags',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/find-pets-by-tags', '589'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/get-inventory',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/get-inventory', 'c29'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/get-order-by-id',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/get-order-by-id', 'bb9'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/get-pet-by-id',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/get-pet-by-id', '561'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/get-user-by-name',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/get-user-by-name', '887'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/login-user',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/login-user', '3bb'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/logout-user',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/logout-user', '7f7'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/new-pet',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/new-pet', '3c0'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/pet',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/pet', '4b6'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/place-order',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/place-order', 'd93'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/store',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/store', 'f59'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/subscribe-to-the-store-events',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/subscribe-to-the-store-events', '2dd'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/swagger-petstore-yaml',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/swagger-petstore-yaml', '84b'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/update-pet',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/update-pet', '641'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/update-pet-with-form',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/update-pet-with-form', 'ce0'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/update-user',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/update-user', 'dc5'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/upload-file',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/upload-file', '5f8'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/1.0.0/user',
                component: ComponentCreator('/docs/petstore_versioned/1.0.0/user', '17e'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/docs/petstore_versioned/add-pet',
                component: ComponentCreator('/docs/petstore_versioned/add-pet', '856'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/create-user',
                component: ComponentCreator('/docs/petstore_versioned/create-user', 'ccc'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/create-users-with-array-input',
                component: ComponentCreator('/docs/petstore_versioned/create-users-with-array-input', '925'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/create-users-with-list-input',
                component: ComponentCreator('/docs/petstore_versioned/create-users-with-list-input', 'c03'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/delete-order',
                component: ComponentCreator('/docs/petstore_versioned/delete-order', 'c9c'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/delete-pet',
                component: ComponentCreator('/docs/petstore_versioned/delete-pet', '0b1'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/delete-user',
                component: ComponentCreator('/docs/petstore_versioned/delete-user', 'a08'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/find-pets-by-status',
                component: ComponentCreator('/docs/petstore_versioned/find-pets-by-status', 'b12'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/find-pets-by-tags',
                component: ComponentCreator('/docs/petstore_versioned/find-pets-by-tags', 'e16'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/get-inventory',
                component: ComponentCreator('/docs/petstore_versioned/get-inventory', '9df'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/get-order-by-id',
                component: ComponentCreator('/docs/petstore_versioned/get-order-by-id', 'ba8'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/get-pet-by-id',
                component: ComponentCreator('/docs/petstore_versioned/get-pet-by-id', '33e'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/get-user-by-name',
                component: ComponentCreator('/docs/petstore_versioned/get-user-by-name', '356'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/login-user',
                component: ComponentCreator('/docs/petstore_versioned/login-user', '272'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/logout-user',
                component: ComponentCreator('/docs/petstore_versioned/logout-user', 'bf4'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/new-pet',
                component: ComponentCreator('/docs/petstore_versioned/new-pet', 'ced'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/pet',
                component: ComponentCreator('/docs/petstore_versioned/pet', '96d'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/place-order',
                component: ComponentCreator('/docs/petstore_versioned/place-order', 'edc'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/schemas/cat',
                component: ComponentCreator('/docs/petstore_versioned/schemas/cat', 'a2f'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/store',
                component: ComponentCreator('/docs/petstore_versioned/store', 'e02'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/subscribe-to-the-store-events',
                component: ComponentCreator('/docs/petstore_versioned/subscribe-to-the-store-events', '2ff'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/swagger-petstore-yaml',
                component: ComponentCreator('/docs/petstore_versioned/swagger-petstore-yaml', '3cf'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/update-pet',
                component: ComponentCreator('/docs/petstore_versioned/update-pet', 'f44'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/update-pet-with-form',
                component: ComponentCreator('/docs/petstore_versioned/update-pet-with-form', '5ad'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/update-user',
                component: ComponentCreator('/docs/petstore_versioned/update-user', '9e9'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/upload-file',
                component: ComponentCreator('/docs/petstore_versioned/upload-file', 'ebe'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/petstore_versioned/user',
                component: ComponentCreator('/docs/petstore_versioned/user', 'c78'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '197'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '12f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'aef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '788'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'd32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'e4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'aa8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '387'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '421'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
