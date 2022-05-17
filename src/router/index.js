import { createRouter, createWebHistory } from "vue-router";

// Import Components
import Feed from "../pages/Feed.vue";
import Signup from "../pages/Signup.vue";
import Login from "../pages/Login.vue";
import Profile from "../pages/Profile.vue";
import Home from "../pages/Home.vue";
const routes = [
  { path: "/", redirect: "/feed" },
  { path: "/feed", name: "feed-page", component: Feed },
  { path: "/home", naem: "home", component: Home },
  { path: "/signup", component: Signup },
  { path: "/login", component: Login },
  { path: "/profile", component: Profile },
];

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

export default router;
