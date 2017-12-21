import { bulletin, bulletinCreate, bulletinDetail, bulletinVote } from '../../../services/api';

export default {
  namespace: 'bulletin',

  state: {
  },

  effects: {
    *get(_, { call, put }) {
      const response = yield call(bulletin);
      yield put({
        type: 'getSuccess',
        payload: response,
      });
    },
    *create({ payload }, { call, put }) {
      try {
        yield call(bulletinCreate, payload);
        yield put({
          type: 'get',
        });
      } catch (e) {
        console.log(e); // eslint-disable-line
      }
    },
    *detail({ payload }, { call, put }) {
      const response = yield call(bulletinDetail, payload);
      yield put({
        type: 'getSuccess',
        payload: { content: response },
      });
      yield put({
        type: 'router/set',
        payload: 'bulletin/detail',
      });
    },
    *vote({ payload }, { call, put }) {
      try {
        yield call(bulletinVote, payload);
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
  },
};
