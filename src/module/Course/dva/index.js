import { course } from '../../../services/api';

export default {
  namespace: 'course',

  state: {
  },

  effects: {
    *get(_, { call, put }) {
      const response = yield call(course);
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
