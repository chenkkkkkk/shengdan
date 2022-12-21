import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'
import fengMian from "../views/feng_mian.vue";
import shiPing from "../components/shi_ping.vue";
// import xiangCe from "";
const routes = [
  {
    //路由默认路径
    path: "/",
    name: "myFengMian",
    component: fengMian,
  },
  {
    path: "/shiPing",
    name: "myShiPing",
    component: shiPing,
  },
  {
    path: "/xiangCe",
    name: "myXiangCe",
    component: () => import("@/views/xiang_ce.vue"),
  },
];
// {
//   path: '/',
//   name: 'home',
//   component: HomeView
// },
// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
// }

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
