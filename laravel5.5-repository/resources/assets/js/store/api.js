
const HOST = 'production' !== process.env.NODE_ENV ? 'http://repository.vikey.ttigame.com' : 'http://localhost:8080';

/**
 * execute data by url.
 *
 * @param url
 * @param params
 * @param method
 */
export function api(url, params = {}, method = 'GET') {
    return axios({
        method: method,
        baseURL: HOST,
        url: url,
        params: params
    });
}

export const COMMON = {
    ACTIVE_NAME: 'common/active_name'
};

export const DEMO = {
    FETCH:       'demo/fetch',
    DETAIL:      'demo/detail',
    STORE:       'demo/store',
    UPDATE:      'demo/update',
    DELETE:      'demo/delete',
    RESULT:      'demo/result',
    TOGGLE_SPIN: 'demo/toggle_spin'
};