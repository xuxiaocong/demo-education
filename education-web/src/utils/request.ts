import { request, history } from 'umi';
import { message } from 'antd';

/**
 * 统一错误处理
 */
const errorHandler = (error: any) => {
    const { data, response, request } = error;
    if (response.status === 401) {
        history.push('/401');
        console.log('zheli')
    }else if (response.status >= 500 && response.status < 600) {
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
        errorHandler
    })
}

export const post = async (path: string, data: any) => {
    return request(path, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(data),
        errorHandler
    })
}

export const del = async (path: string, params: any) => {
    return request(path, {
        method: 'DELETE',
        params,
        errorHandler
    });
}

//todo:添加其他Restfun api