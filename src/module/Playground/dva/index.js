import { code, saveCode } from '../../../services/api';

export default {
  namespace: 'code',

  state: {
  },

  effects: {
    *get(_, { call, put }) {
      const response = yield call(code);
      yield put({
        type: 'getSuccess',
        payload: response,
      });
    },
    *save({ payload }, { call }) {
      try {
        yield call(saveCode, payload);
      } catch (e) {
        console.log(e);
      }
    },
  },

  reducers: {
    getSuccess(state, action) {
      return Object.assign({}, state, action.payload);
    },
  },
};
