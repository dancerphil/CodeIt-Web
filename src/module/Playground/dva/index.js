import { applyPatch } from 'diff';
import { code, codeDetail, codeCreate, codeCheck, vote } from '../../../services/api';

const dealWith = (str) => {
  console.log(`dealing with: ${str}`);
  const l = str.length;
  if (l === 0) {
    console.log('returns: \\r\\n');
    return '\r\n';
  }
  if (str.slice(l - 1, l) !== '\n') {
    console.log('returns: raw + \\r\\n');
    return `${str}\r\n`;
  }
  console.log('returns: raw');
  return str;
};

export default {
  namespace: 'code',

  state: {
    content: '\n',
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
      console.log('in code set');
      yield put({
        type: 'getSuccess',
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
