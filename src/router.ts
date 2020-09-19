import { createRouter, createWebHistory } from 'vue-router';
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/pets/lost',
      name: 'lost',
      component: () => import('./pages/Lost.vue')
    },
    {
      path: '/pets/found',
      name: 'found',
      component: () => import('./pages/Found.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./pages/Profile.vue')
    }
  ]
});
