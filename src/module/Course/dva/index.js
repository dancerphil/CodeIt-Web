import { course } from '../../../services/api';

export default {
  namespace: 'course',

  state: {
    tags: [],
  },

  effects: {
    *get(_, { call, put }) {
      const response = yield call(course);
      yield put({
        type: 'getSuccess',
        payload: response.list,
      });
    },
  },

  reducers: {
    getSuccess(state, action) {
      return {
        ...state,
        tags: action.payload,
      };
    },
  },
};
