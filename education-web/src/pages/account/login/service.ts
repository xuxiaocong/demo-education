import { get } from '@/utils/request';
import store from 'store';

export const getUsername = (): string => {
    return store.get('username') || '';
}

export const setUsername = (username: string): void => {
    store.set('username', username);
}

export const getPassword = (): string => {
    return store.get('password') || '';
}

export const setPassword = (password: string): void => {
    store.set('password', password);
}

export const login = async (username: string, password: string) => {
    return get('/api/user/login', { name: username, password });
}