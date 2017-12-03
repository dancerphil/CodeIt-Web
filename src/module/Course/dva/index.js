import { course, lesson, content } from '../../../services/api';

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
      yield put({
        type: 'lessonSuccess',
        payload: response,
      });
    },
    *content({ payload }, { call, put }) {
      const { item } = payload;
      console.log('get content of ', item);
      const response = yield call(content, { _id: item._id.$id });
      yield put({
        type: 'contentSuccess',
        payload: response,
      });
      yield put({
        type: 'router/set',
        payload: `course/${item.cid.name}/detail`,
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
    contentSuccess(state, action) {
      return Object.assign({}, state, { content: action.payload });
    },
  },
};
