
import {api, DEMO} from '../api';

const state = {
    pageSize: 10,
    currentPage: 1,
    totalRecord: 0,
    pageOptions: [10, 30, 45, 60, 100],
    demoData: [],
    formItem: {
        name: '',
        email: '',
        phone: '',
        address: '',
        is_activate: '0',
        yearly_salary: '',
        birthday: '',
        description: ''
    },
    demoDetail: {
        name: '',
        email: '',
        phone: '',
        address: '',
        is_activate: '0',
        yearly_salary: '',
        birthday: '',
        description: ''
    },
    demoResult: {},
    spinShow: false
};

const getters = {
    [DEMO.RESULT]: state => {
        return state.demoResult;
    }
};

const mutations = {
    [DEMO.FETCH] (state, data) {
        state.demoData    = data.data.data;
        state.pageSize    = data.data.per_page;
        state.currentPage = data.data.current_page;
        state.totalRecord = data.data.total;
    },
    [DEMO.DETAIL] (state, data) {
        state.demoDetail = data.data;
    },
    [DEMO.STORE] (state, data) {
        state.demoResult = data.data;
    },
    [DEMO.UPDATE] (state, data) {
        state.demoResult = data.data;
    },
    [DEMO.DELETE] (state, data) {
        state.demoResult = data.data;
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
            console.error('服务器异常，稍后重试~');
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

                if(1 === response.data.status) {
                    Iview.Message.success('提交成功!');
                } else {
                    let error = response.data.error ? response.data.error : '';
                    Iview.Message.error(`提交失败! ${error}`);
                }
        }).catch(error => {
            console.error(error);
            Iview.Message.error('服务器异常，请稍后访问~');
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

            if(1 === response.data.status) {
                Iview.Message.success('提交成功!');
            } else {
                let error = response.data.error ? response.data.error : '';
                Iview.Message.error(`提交失败! ${error}`);
            }
        }).catch(error => {
            console.error(error);
            Iview.Message.error('服务器异常，请稍后访问~');
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
    getters,
    mutations,
    actions
};