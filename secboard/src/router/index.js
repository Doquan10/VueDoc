import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/views/Home")
  },
  {
    name: "About",
    path: "/About",
    component: () => import("@/views/About")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
