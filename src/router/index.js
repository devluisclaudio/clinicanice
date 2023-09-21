// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'sobre',
          name: 'Sobre a Norkon',
          component: () => import('@/views/sobre/Index.vue'),
        },
        {
          path: 'blog',
          name: 'Blog',
          component: () => { window.location.href = 'https://blog.norkontecnology.com' },
        },
        {
          path: 'servico',
          name: 'Serviços',
          component: () => import('@/views/servico/Index.vue'),
        },
        {
          path: 'contato',
          name: 'Contato',
          component: () => import('@/views/contato/Index.vue'),
        },
      ],
    },

  ],
})

export default router
