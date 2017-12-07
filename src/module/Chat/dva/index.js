import { room } from '../../../services/api';

export default {
  namespace: 'chat',

  state: {
  },

  effects: {
    *get(_, { call, put }) {
      const response = yield call(room);
      yield put({
        type: 'getSuccess',
        payload: response,
      });
    },
    *create(_, { put }) {
      try {
        yield put({
          type: 'router/set',
          payload: 'chat/playground',
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
  },
};
