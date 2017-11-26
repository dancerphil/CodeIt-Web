import { routerRedux } from 'dva/router';

export default {
  namespace: 'router',

  state: {
    status: undefined,
  },

  effects: {
    *set({ payload }, { put }) {
      console.log(payload, routerRedux);
      yield put(routerRedux.push(`/${payload}`));
    },
  },

  reducers: {
  },
};
