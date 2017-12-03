import { code, codeCreate, codeCheck } from '../../../services/api';

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
    *save({ payload }, { call, put }) {
      try {
        const response = yield call(codeCreate, payload);
        yield put({
          type: 'getSuccess',
          payload: { codeId: response.op.$id },
        });
      } catch (e) {
        console.log(e); // eslint-disable-line
      }
    },
    *run({ payload }, { call, put }) {
      const response = yield call(codeCheck, payload);
      yield put({
        type: 'getSuccess',
        payload: { data: response.data },
      });
    },
  },

  reducers: {
    getSuccess(state, action) {
      return Object.assign({}, state, action.payload);
    },
  },
};
