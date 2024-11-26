const routes = [
  {
    path: '/:id',
    component: () => import('src/pages/ProductPage.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
