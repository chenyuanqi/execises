
import {api, DEMO} from '../api';

const state = {
    pageSize: 10,
    currentPage: 1,
    totalRecord: 0,
    pageOptions: [10, 30, 45, 60, 100],
    demoData: [],
    demoDetail: [],
    demoResult: [],
    spinShow: false
};

const mutations = {
    [DEMO.FETCH] (state, data) {
        state.demoData    = data.data.data;
        state.pageSize    = data.data.per_page;
        state.currentPage = data.data.current_page;
        state.totalRecord = data.data.total;
    },
    [DEMO.DETAIL] (state, data) {
        state.demoDetail.push(data);
    },
    [DEMO.STORE] (state, data) {
        state.demoResult.push(data);
    },
    [DEMO.UPDATE] (state, data) {
        state.demoResult.push(data);
    },
    [DEMO.DELETE] (state, data) {
        state.demoResult.push(data);
    },
    [DEMO.TOGGLE_SPIN] (state) {
        state.spinShow = !state.spinShow;
    }
};

const actions = {
    /**
     * Getting demos.
     *
     * @param commit
     * @param payload
     */
    [DEMO.FETCH] ({ commit }, payload) {
        api('/api/v1/demo', payload)
        .then(response => {
            commit({
                type: DEMO.FETCH,
                data: response.data
            });
        }).catch(error => {
            console.error(error);
        });
    },

    /**
     * Getting demo by id.
     *
     * @param commit
     * @param payload
     */
    [DEMO.DETAIL] ({ commit }, payload) {
        api(`/api/v1/demo/${payload.id}`)
        .then(response => {
            commit({
                type: DEMO.DETAIL,
                data: response.data
            });
        }).catch(error => {
            console.error(error);
        });
    },

    /**
     * Store demo.
     *
     * @param commit
     * @param payload
     */
    [DEMO.STORE] ({ commit }, payload) {
        api(`/api/v1/demo`, payload, 'POST')
        .then(response => {
                commit({
                    type: DEMO.STORE,
                    data: response.data
                });
        }).catch(error => {
            console.error(error);
        });
    },

    /**
     * Update demo by id.
     *
     * @param commit
     * @param payload
     */
    [DEMO.UPDATE] ({ commit }, payload) {
        api(`/api/v1/demo/${payload.id}`, payload, 'PUT')
        .then(response => {
            commit({
                type: DEMO.UPDATE,
                data: response.data
            });
        }).catch(error => {
            console.error(error);
        });
    },

    /**
     * Delete demo by id.
     *
     * @param commit
     * @param payload
     */
    [DEMO.DELETE] ({ commit }, payload) {
        api(`/api/v1/demo/${payload.id}`, {}, 'DELETE')
        .then(response => {
            commit({
                type: DEMO.DELETE,
                data: response.data
            });
        }).catch(error => {
            console.error(error);
        });
    },
};

export default {
    state,
    mutations,
    actions
};