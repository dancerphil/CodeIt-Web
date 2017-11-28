import { login, profile } from '../../../services/api';

export default {
  namespace: 'user',

  state: {
  },

  effects: {
    *login({ payload }, { call, put }) {
      try {
        const loginResponse = yield call(login, payload);
        console.log(loginResponse);
        yield put({
          type: 'router/set',
          payload: 'home',
        });
        const profileResponse = yield call(profile);
        yield put({
          type: 'loginSuccess',
          payload: profileResponse,
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
        ...action.payload,
      };
    },
  },
};
