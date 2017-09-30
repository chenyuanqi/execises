
import { COMMON } from '../api';

const state = {
    activeName: 'home',
    accordion:  false
};

const mutations = {
    [COMMON.ACTIVE_NAME] (state, data) {
        state.activeName = data.name;
    }
};

const actions = {
};

export default {
    state,
    mutations,
    actions
};