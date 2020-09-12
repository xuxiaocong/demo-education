import { User } from '@/pages/account/login/data';
import { getToken, getUserInfo, removeUserInfo } from '@/pages/account/login/service';
import { Effect, Reducer, history, Subscription } from 'umi';

export interface LayoutState {
    collapsed: boolean;
    showLayout: boolean;
    user?: User;
}

export interface LayoutType {
    namespace: 'layout';
    state: LayoutState;
    effects: {
        changeCollapsed: Effect,
        logout: Effect,
    };
    reducers: {
        saveState: Reducer<LayoutState>;
    };
    subscriptions: {
        setup: Subscription;
    };
}

const LayoutModel: LayoutType = {
    namespace: 'layout',
    state: {
        collapsed: false,
        user: undefined,
        showLayout: true,
    },
    effects: {
        *changeCollapsed({ payload }, { call, put, select }) {
            yield put({
                type: 'saveState',
                payload
            })
        },
        *logout({ payload }, { call, put, select }) {
            removeUserInfo();
            history.push('/account/login')
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
                //部分页面不需要layout
                if (pathname === '/account/login' || pathname === '/401' || pathname === '/404') {
                    dispatch!({
                        type: 'saveState',
                        payload: { showLayout: false }
                    })
                    return;
                }
                //没有token
                const token: string = getToken();
                if (token.length <= 0) {
                    dispatch!({
                        type: 'saveState',
                        payload: { showLayout: false }
                    })
                    history.push('/401');
                    return;
                }
                //获取身份信息
                const user: User = getUserInfo();
                dispatch!({
                    type: 'saveState',
                    payload: { showLayout: true, user }
                })

            })
        }
    }
}

export default LayoutModel;