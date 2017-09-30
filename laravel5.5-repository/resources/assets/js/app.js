
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// load the router setting.
import router from './router';
// load the store.
import store from './store'
// load the iView package.
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// define mounted component.
import App from './views/App';

// Register global variables.
window.Vue   = require('vue');
window.Iview = require('iview');

// use package.
Vue.use(iView);

const app = new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
});

export { app, router };