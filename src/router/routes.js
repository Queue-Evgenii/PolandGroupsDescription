const routes = [
  {
    path: "/",
    component: () => import("src/pages/ProductListPage.vue"),
  },
  {
    path: "/:id",
    component: () => import("src/pages/ProductPage.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
