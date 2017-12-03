import { code, codeDetail, codeCreate, codeCheck } from '../../../services/api';

export default {
  namespace: 'code',

  state: {
    content: 'print(\'init\')\r\n',
    type: 'python',
  },

  effects: {
    *get(_, { call, put }) {
      const response = yield call(code);
      yield put({
        type: 'getSuccess',
        payload: response,
      });
    },
    *set({ payload }, { put }) {
      yield put({
        type: 'getSuccess',
        payload,
      });
    },
    *detail({ payload }, { call, put }) {
      const response = yield call(codeDetail, payload);
      yield put({
        type: 'getSuccess',
        payload: response.data,
      });
      yield put({
        type: 'router/set',
        payload: 'code/playground',
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
