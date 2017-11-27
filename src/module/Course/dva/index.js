import { course, lesson } from '../../../services/api';

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
    *lesson({ payload }, { call, put }) {
      const response = yield call(lesson, payload.id);
      console.log(response);
      yield put({
        type: 'lessonSuccess',
        payload: response,
      });
    },
  },

  reducers: {
    getSuccess(state, action) {
      return Object.assign({}, state, action.payload);
    },
    lessonSuccess(state, action) {
      return Object.assign({}, state, { lesson: action.payload });
    },
  },
};
