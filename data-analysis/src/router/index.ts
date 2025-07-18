import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/data-analysis',
    name: 'data-analysis',
    component: () => import('../views/DataAnalysis.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;