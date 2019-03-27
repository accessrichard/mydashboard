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
        import(/* webpackChunkName: 'todo' */ '@/components/todo/Todo.vue')
    },
    {
      path: '/contact/:name?/:view?',
      name: 'contact',
      component: () =>
        import(/* webpackChunkName: 'contact' */ '@/components/contact/Contact.vue')
    }
    // ,
    // {
    //   path: '/contact/:name',
    //   name: 'contact-view',
    //   component: () =>
    //     import(/* webpackChunkName: 'contact' */ '@/components/contact/ContactCard.vue')
    // },
    // {
    //   path: '/contact/edit/:name',
    //   name: 'contact-edit',
    //   component: () =>
    //     import(/* webpackChunkName: 'contact' */ '@/components/contact/ContactEdit.vue')
    // }
  ]
});

export default router;
