import { get } from '@/utils/request';
import store from 'store';
import { User } from './data';

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
    return get('/user/login', { name: username, password });
}

export const saveUserInfo = (token: string, user: User): void => {
    store.set('user', user);
    store.set('token', token);
}

export const removeUserInfo = (): void => {
    store.set('user', '');
    store.set('token', '');
}

export const getToken = (): string => {
    return store.get('token') || '';
}

export const getUserInfo = (): User => {
    return store.get('user') || { name: '' };
}