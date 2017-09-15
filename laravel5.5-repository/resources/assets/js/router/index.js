import Vue from 'vue';
import VueRouter from 'vue-router';

// components.
import App from '../views/App';
import Layout from '../views/layout/Common';
import Home from '../views/layout/Home';
import NotFound from '../views/layout/404';

// routes.
import demoRouter from './demo';

Vue.use(VueRouter);

// routes group.
const baseRoutes = [
    {path: '', component: Layout, meta: {breadcrumb: '首页'}, children: [
        {path: '', name: 'home', component: Home, meta: {breadcrumb: '首页数据'}}
    ]},
    {path: 'page', component: Layout, meta: {breadcrumb: '公共页'}, children: [
        {path: '404', name: '404', component: NotFound, meta: {breadcrumb: '没有数据'}}
     ]},
];

const childrenRoutes = [
    demoRouter
];

const extraRoutes = [];

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: App,
            children: [ ...baseRoutes, ...childrenRoutes ],
        },
        ...extraRoutes
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});

export default router;