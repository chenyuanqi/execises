
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import router from './router';
import iView from 'iview';

window.Vue = require('vue');

Vue.use(iView);

const app = new Vue({
    router
}).$mount('#app');