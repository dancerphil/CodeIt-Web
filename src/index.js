import dva from 'dva';
import 'moment/locale/zh-cn';
import login from './module/Login/dva';
import course from './module/Course/dva';
import code from './module/Playground/dva';
import models from './models/index';
import './polyfill';
import './g2';
// import { browserHistory } from 'dva/router';
import './index.less';

// 1. Initialize
const app = dva({
  // history: browserHistory,
});

// 2. Plugins
// app.use({});

// 3. Model move to router
models.forEach((m) => {
  app.model(m);
});
app.model(login);
app.model(course);
app.model(code);

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
