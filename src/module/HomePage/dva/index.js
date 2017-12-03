import { adminUser } from '../../../services/api';

export default {
  namespace: 'home',

  state: {
  },

  effects: {
    *init(_, { call, put }) {
      // const [userResponse, bulletinResponse, codeResponse] = yield [call(adminUser, { $limit: 0 }), call(bulletin, { $limit: 0 }), yield call(code, { $limit: 0 })];
      // console.log(userResponse, bulletinResponse, codeResponse);
      const userResponse = yield call(adminUser, { $limit: 0 });
      console.log(userResponse);
      yield put({
        type: 'getSuccess',
        payload: { user: userResponse },
      });
    },
  },

  reducers: {
    getSuccess(state, action) {
      return Object.assign({}, state, action.payload);
    },
  },
};
