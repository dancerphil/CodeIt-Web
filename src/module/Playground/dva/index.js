import { code } from '../../../services/api';

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
  },

  reducers: {
    getSuccess(state, action) {
      return Object.assign({}, state, action.payload);
    },
  },
};
