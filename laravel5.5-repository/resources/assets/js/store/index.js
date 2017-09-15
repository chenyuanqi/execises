import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

// modules.
import demo from './modules/demo';

const store = new VueX.Store({
    modules: {
        demo
    }
});

export default store;