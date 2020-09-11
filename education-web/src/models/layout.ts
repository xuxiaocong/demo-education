import { Effect, Reducer, history } from 'umi';

export interface LayoutState {
    collapsed: boolean;
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
}

const LayoutModel: LayoutType = {
    namespace: 'layout',
    state: {
        collapsed: false,
    },
    effects: {
        *changeCollapsed({ payload }, { call, put, select }) {
            yield put({
                type: 'saveState',
                payload
            })
        },
        *logout({ payload }, { call, put, select }) {
            //todo:退出操作

            history.push('/account/login')
        }
    },
    reducers: {
        saveState(state, action) {
            return { ...state, ...action.payload };
        }
    },
}

export default LayoutModel;