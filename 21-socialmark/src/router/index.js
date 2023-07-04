import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/Home")
  },
  {
    name: "LoginPage",
    path: "/login",
    component: () => import("@/views/Login")
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: () => import("@/views/Register")
  },
  {
    name: "NewBookmarkPage",
    path: "/new",
    component: () => import("@/views/NewBookmark")
  }
  
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});



export default router;