import { login, profile, register } from '../../../services/api';

export default {
  namespace: 'user',

  state: {
  },

  effects: {
    *login({ payload }, { call, put }) {
      try {
        yield call(login, payload);
        const profileResponse = yield call(profile);
        yield put({
          type: 'loginSuccess',
          payload: profileResponse,
        });
        yield put({
          type: 'router/set',
          payload: 'home',
        });
      } catch (e) {
        console.log(e); // eslint-disable-line
      }
    },
    *register({ payload }, { call, put }) {
      try {
        yield call(register, payload);
        const { username, password } = payload;
        yield call(login, { username, password });
        const profileResponse = yield call(profile);
        yield put({
          type: 'loginSuccess',
          payload: profileResponse,
        });
        yield put({
          type: 'router/set',
          payload: 'user/register-result',
        });
      } catch (e) {
        console.log(e); // eslint-disable-line
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
