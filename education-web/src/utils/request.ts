import { request, history } from 'umi';
import { message } from 'antd';

/**
 * 统一错误处理
 */
const errorHandler = (error: any) => {
    const { data, response, request } = error;
    if (response.status === 401) {
        history.push('/401');
    } else if (response.status >= 500 && response.status < 600) {
        message.error(`[${response.status}]:${data.message}`)
        console.debug('------------请求错误------------');
        console.debug('request', request);
        console.debug('response', response);
        console.debug('------------end------------');
    } else {
        message.warning(`[${response.status}]:${data.message}`)
    }
}

export const get = async (path: string, params: any) => {
    return request(path, {
        params,
        errorHandler,
        prefix: process.env.REQUEST_BASE_URL,
    })
}

export const post = async (path: string, data: any) => {
    return request(path, {
        method: 'POST',
        data,
        errorHandler,
        prefix: process.env.REQUEST_BASE_URL,
    })
}

export const del = async (path: string, params: any) => {
    return request(path, {
        method: 'DELETE',
        params,
        errorHandler,
        prefix: process.env.REQUEST_BASE_URL,
    });
}

export const put = async (path: string, data: any) => {
    return request(path, {
        method: 'PUT',
        data,
        errorHandler,
        prefix: process.env.REQUEST_BASE_URL,
    })
}

export const patch = async (path: string, data: any) => {
    return request(path, {
        method: 'PATCH',
        data,
        errorHandler,
        prefix: process.env.REQUEST_BASE_URL,
    })
}
