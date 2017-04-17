import Vue from 'vue';
import Router from 'vue-router';
import Book from '@/pages/book/Book';
import Profile from '@/pages/profile/Profile';
import Settings from '@/pages/profile/settings/Settings';
import Account from '@/pages/profile/settings/account/Account';
import List from '@/pages/profile/settings/list/List';
import Misc from '@/pages/profile/settings/misc/Misc';
import Notifications from '@/pages/profile/settings/notifications/Notifications';
import ProfileSettings from '@/pages/profile/settings/profile/Profile';
import Styles from '@/pages/profile/settings/styles/Styles';
import Clubs from '@/pages/profile/clubs/Clubs';
import Catalog from '@/pages/catalog/Catalog';
import Home from '@/pages/home/Home';

Vue.use(Router);

const page404 = { template: '<div>404</div>' };

export default new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: Home,
  //   },
  // ],
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/books',
      name: 'books',
      component: Catalog,
      meta: { title: 'Books' },
      children: [
      ],
    },
    {
      path: '/books/:id',
      name: 'book',
      component: Book,
      meta: { title: 'Book' },
    },
    {
      path: '/u/:slug',
      component: Profile,
      name: 'profile',
      meta: { title: 'Profile' },
    },
    {
      path: '/u/:slug/settings',
      component: Settings,
      children: [
        { path: '', component: Account, meta: { title: 'account' } },
        { path: 'account', component: Account, meta: { title: 'account' } },
        { path: 'list', component: List, meta: { title: 'list' } },
        { path: 'misc', component: Misc, meta: { title: 'misc' } },
        { path: 'notifications', component: Notifications, meta: { title: 'notifications' } },
        { path: 'profile', component: ProfileSettings, meta: { title: 'profile' } },
        { path: 'styles', component: Styles, meta: { title: 'styles' } },
        { path: '*', component: page404 },
      ],
    },
    {
      path: '/u/:slug/list',
      component: page404,
      name: 'profile list',
      meta: { title: 'Profile list' },
    },
    {
      path: '/u/:slug/friends',
      component: page404,
      name: 'friends list',
      meta: { title: 'Friends list' },
    },
    {
      path: '/u/:slug/clubs',
      component: Clubs,
      name: 'clubs list',
      meta: { title: 'Clubs list' },
    },
    {
      path: '/u/:slug/favourites',
      component: page404,
      name: 'favourites list',
      meta: { title: 'Favourites list' },
    },
    {
      path: '/u/:slug/dialogs',
      component: page404,
      name: 'dialogs',
      meta: { title: 'Dialogs' },
      children: [
        { path: ':slug', component: page404 },
      ],
    },
    {
      path: '/u/:slug/messages',
      component: page404,
      name: 'messages',
      meta: { title: 'Messages' },
      children: [
        { path: 'news', component: page404 },
        { path: 'notifications', component: page404 },
      ],
    },
    {
      path: '/u/:slug/activity',
      component: page404,
      name: 'activity',
      meta: { title: 'Activity' },
      children: [
        { path: 'comments', component: page404 },
        { path: 'reviews', component: page404 },
        { path: 'versions', component: page404 },
      ],
    },
  ],
});
