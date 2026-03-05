import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/terminal',
      name: 'terminal',
      component: () => import('./views/Terminal.vue'),
    },
    {
      path: '/logs',
      name: 'logs',
      component: () => import('./views/Logs.vue'),
    },
    {
      path: '/config',
      name: 'config',
      component: () => import('./views/Config.vue'),
    },
  ],
})
