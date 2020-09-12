import { Effect, Reducer, Subscription, history } from 'umi';
import { getUsername, getPassword, setUsername, setPassword, login, saveUserInfo } from './service';

export interface LoginState {
    username: string;
    password: string;
    remember: boolean;
}

export interface LoginType {
    namespace: 'login';
    state: LoginState;
    effects: {
        loginRequest: Effect;
    };
    reducers: {
        saveState: Reducer<LoginState>;
    };
    subscriptions: {
        setup: Subscription;
    }
}

const LoginModel: LoginType = {
    namespace: 'login',
    state: {
        username: '',
        password: '',
        remember: true,
    },
    effects: {
        *loginRequest({ payload }, { call, put, select }) {
            const res = yield login(payload.username, payload.password);
            if (res) {
                setUsername(payload.username);
                setPassword(payload.remember ? payload.password : '');
                saveUserInfo(res.token, res.user);
                history.push('/')
            }
        }
    },
    reducers: {
        saveState(state, action) {
            return { ...state, ...action.payload };
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/account/login') {
                    dispatch!({
                        type: 'saveState',
                        payload: {
                            username: getUsername(),
                            password: getPassword(),
                        }
                    })
                }
            })
        }
    }
}

export default LoginModel;