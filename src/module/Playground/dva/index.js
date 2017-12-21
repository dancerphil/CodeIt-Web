import { applyPatch } from 'diff';
import { code, codeDetail, codeCreate, codeCheck, vote } from '../../../services/api';
import dealWith from '../../../utils/dealWith';

export default {
  namespace: 'code',

  state: {
    content: '\n',
    type: 'python',
  },

  effects: {
    *get(_, { call, put }) {
      const response = yield call(code);
      console.log(response);
      yield put({
        type: 'getSuccess',
        payload: response,
      });
    },
    *set({ payload }, { put }) {
      console.log('in code set');
      yield put({
        type: 'setContent',
        payload,
      });
    },
    *dispatch({ payload }, { put }) {
      console.log('in code dispatch');
      yield put({
        type: 'dispatchSuccess',
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
    *vote({ payload }, { call, put }) {
      try {
        yield call(vote, payload);
        yield put({
          type: 'get',
        });
      } catch (e) {
        console.log(e); // eslint-disable-line
      }
    },
  },

  reducers: {
    getSuccess(state, action) {
      return Object.assign({}, state, action.payload);
    },
    setContent(state, action) {
      let { content } = action.payload;
      content = dealWith(content);
      return Object.assign({}, state, { content });
    },
    dispatchSuccess(state, action) {
      console.log('dispatch', state, action.payload);
      const { msg } = action.payload;
      const content = dealWith(applyPatch(state.content, msg));
      return Object.assign({}, state, { content });
    },
  },
};
