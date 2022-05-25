import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js";
// Import Components
import Feed from "../pages/Feed.vue";
import Signup from "../pages/Signup.vue";
import Login from "../pages/Login.vue";
import Profile from "../pages/Profile.vue";
import Home from "../pages/Home.vue";

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/feed",
    name: "feed-page",
    component: Feed,
    meta: { requiresAuth: true },
  },
  { path: "/home", naem: "home", component: Home },
  { path: "/signup", component: Signup, meta: { requiresUnAuth: true } },
  {
    path: "/login",
    component: Login,
    meta: { requiresUnAuth: true },
  },
  { path: "/profile", component: Profile },
];

const router = new createRouter({
  routes: routes,
  history: createWebHistory(),
});

router.beforeEach((to, _, next) => {
  let userIsLogged = store.getters.isAuthenticated;

  if (to.meta.requiresAuth && !userIsLogged) {
    next("/login");
  } else if (to.meta.requiresUnAuth && userIsLogged) {
    next("/feed");
  } else {
    next();
  }
});
export default router;
