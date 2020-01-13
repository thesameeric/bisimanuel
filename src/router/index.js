import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      layout: 'defaultLayout',
    },
  },
  {
    path: '/music',
    name: 'music',
    component: () => import(/* webpackChunkName: "music" */ '../views/music/index.vue'),
  },
  {
    path: '/music/details',
    name: 'music details',
    component: () => import(/* webpackChunkName: "musicdetails" */ '../views/music/details.vue'),
  },
  {
    path: '/music/playlist',
    name: 'playlist',
    component: () => import(/* webpackChunkName: "musicdetails" */ '../views/music/playlist.vue'),
  },
  {
    path: '/account',
    component: () => import(/* webpackChunkName: "account index" */ '../views/profile/index.vue'),
    children: [
      {
        path: '/',
        name: 'account',
        component: () => import(/* webpackChunkName: "account" */ '../views/account/projects.vue'),
      },
      {
        path: '/account/details',
        name: 'account details',
        component: () => import(/* webpackChunkName: "details" */ '../views/account/details.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
    meta: {
      layout: 'blankLayout',
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "login" */ '../views/register.vue'),
    meta: {
      layout: 'blankLayout',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
