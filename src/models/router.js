import { routerRedux } from 'dva/router';

export default {
  namespace: 'router',

  state: {
    status: undefined,
  },

  effects: {
    *set({ payload }, { put }) {
      yield put(routerRedux.push(`/${payload}`));
    },
  },

  reducers: {
  },
};
