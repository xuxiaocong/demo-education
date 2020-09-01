import store from 'store';

export default class AccessStore {
    static setUsername = (username: string) => {
        store.set('access-username', username);
    }
    static getUsername = (): string => {    
        return store.get('access-username') || '';
    }

    static setPassword = (password: string) => {
        store.set('access-password', password);
    }
    static getPassword = (): string => {
        return store.get('access-password');
    }
}