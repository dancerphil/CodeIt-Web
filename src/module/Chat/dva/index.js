import { createPatch } from 'diff';
import { room } from '../../../services/api';
import dealWith from '../../../utils/dealWith';

export default {
  namespace: 'chat',

  state: {
  },

  effects: {
    *get({ payload }, { call, put }) {
      const response = yield call(room);
      const { socket } = payload;

      yield put({
        type: 'init',
        payload: Object.assign(response, { socket }),
      });
    },
    *create({ payload }, { put }) {
      try {
        yield put({
          type: 'socketJoin',
          payload: payload.title,
        });
        yield put({
          type: 'router/set',
          payload: 'chat/playground',
        });
      } catch (e) {
        console.log(e); // eslint-disable-line
      }
    },
    *value({ payload }, { put }) {
      console.log('in value');
      yield put({
        type: 'socketValue',
        payload,
      });
    },
  },

  reducers: {
    init(state, action) {
      return Object.assign({}, state, action.payload);
    },
    socketJoin(state, action) {
      const { socket } = state;
      if (socket) {
        console.log(`socket.emit('join', action.payload: ${action.payload})`);
        socket.emit('join', action.payload);
      } else {
        console.log('no socket');
      }
    },
    socketValue(state, action) {
      console.log('in socketValue', action.payload);
      const { value, content } = action.payload;
      const dvalue = dealWith(value);
      const { socket } = state;
      if (socket) {
        console.log(`createPatch('code', text, newValue)): ${createPatch('code', content, dvalue)}`);
        socket.emit('code', createPatch('code', content, dvalue));
      } else {
        console.log('no socket');
      }
    },
  },
};
