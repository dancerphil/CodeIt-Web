import { login } from '../../../services/api';

export default {
  namespace: 'userx',

  state: {
    tags: [],
  },

  effects: {
    *login({ payload }, { call, put }) {
      try {
        const response = yield call(login, payload);
        yield put({
          type: 'router/set',
          payload: 'analysis',
        });
        yield put({
          type: 'loginSuccess',
          payload: response.list,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },

  reducers: {
    loginSuccess(state, action) {
      return {
        ...state,
        tags: action.payload,
      };
    },
  },
};
