import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

// modules.
import demo from './modules/demo';
import common from './modules/common';

const store = new VueX.Store({
    modules: {
    	common,
        demo
    }
});

export default store;