import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home/Home.vue';

Vue.use(Router);

export default new Router({
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
        import(/* webpackChunkName: 'links' */ './views/links/Links.vue')
    },
    {
      path: '/wiki/edit/:page',
      name: 'wiki-edit',
      component: () =>
        import(/* webpackChunkName: 'links' */ './views/wiki/Edit.vue')
    },
    {
      path: '/wiki/read/:page',
      name: 'wiki-read',
      component: () =>
        import(/* webpackChunkName: 'read' */ './views/wiki/Read.vue')
    },
    {
      path: '/wiki/toc',
      name: 'wiki-toc',
      component: () =>
        import(/* webpackChunkName: 'toc' */ './views/wiki/Toc.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () =>
        import(/* webpackChunkName: 'todo' */ './views/todo/Todo.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () =>
        import(/* webpackChunkName: 'contact' */ './views/contact/ContactList.vue')
    },
    {
      path: '/contact/:name',
      name: 'contact-card',
      component: () =>
        import(/* webpackChunkName: 'contact-card' */ './views/contact/ContactCard.vue')
    },
    {
      path: '/contact/edit/:name',
      name: 'contact-card-edit',
      component: () =>
        import(/* webpackChunkName: 'contact-card-edit' */ './views/contact/ContactEdit.vue')
    }
  ]
});
