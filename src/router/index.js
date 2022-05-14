import { createRouter, createWebHistory } from "vue-router";

// Import Components
import Home from "../pages/Home.vue";
import Login from "../pages/Auth.vue";
import Profile from "../pages/Profile.vue";
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "home-page", component: Home },
  { path: "/login", component: Login },
  { path: "/profile", component: Profile },
];

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

export default router;
