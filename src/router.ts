import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: () =>
        import(/* webpackChunkName: 'contact' */ '@/components/contact/ContactList.vue')
    },
    {
      path: '/links',
      name: 'links',
      component: () =>
        import(/* webpackChunkName: 'wiki' */ '@/components/links/Links.vue')
    },
    {
      path: '/wiki/edit/:page',
      name: 'wiki-edit',
      component: () =>
        import(/* webpackChunkName: 'wiki' */ '@/components/wiki/Edit.vue')
    },
    {
      path: '/wiki/read/:page',
      name: 'wiki-read',
      component: () =>
        import(/* webpackChunkName: 'wiki' */ '@/components/wiki/Read.vue')
    },
    {
      path: '/wiki/toc',
      name: 'wiki-toc',
      component: () =>
        import(/* webpackChunkName: 'wiki' */ '@/components/wiki/Toc.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () =>
        import(/* webpackChunkName: 'todo' */ '@/components/todo/TodoList.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () =>
        import(/* webpackChunkName: 'work' */ '@/components/work/Work.vue')
    },
    {
      path: '/work1/:id',
      name: 'work',
      component: () =>
        import(/* webpackChunkName: 'work' */ '@/components/work/WorkItem.vue')
    }

  ]
});

export default router;
