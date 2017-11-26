import BasicLayout from '../layouts/BasicLayout';
import UserLayout from '../layouts/UserLayout';
import BlankLayout from '../layouts/BlankLayout';

import Analysis from '../module/HomePage/view/index';
import Monitor from '../module/Course/view/index';
import Workplace from '../module/Playgroud/preview/index';
import Playgroud from '../module/Playgroud/view/index';

import Login from '../module/Login/view/index';
import Register from '../routes/User/Register';
import RegisterResult from '../routes/User/RegisterResult';

const data = [{
  component: BasicLayout,
  layout: 'BasicLayout',
  name: '首页', // for breadcrumb
  path: '',
  children: [{
    name: '分析页',
    path: 'analysis',
    icon: 'dashboard',
    component: Analysis,
    show: true,
  }, {
    name: '监控页',
    path: 'monitor',
    icon: 'form',
    component: Monitor,
    show: true,
  }, {
    name: '工作台',
    path: 'workplace',
    icon: 'table',
    component: Workplace,
    show: true,
  }, {
    name: 'playground',
    path: 'workplace/playground',
    component: Playgroud,
  }],
}, {
  component: UserLayout,
  layout: 'UserLayout',
  children: [{
    name: '帐户',
    icon: 'user',
    path: 'user',
    children: [{
      name: '登录',
      path: 'login',
      component: Login,
    }, {
      name: '注册',
      path: 'register',
      component: Register,
    }, {
      name: '注册结果',
      path: 'register-result',
      component: RegisterResult,
    }],
  }],
}, {
  component: BlankLayout,
  layout: 'BlankLayout',
  children: {
    name: '使用文档',
    path: 'http://pro.ant.design/docs/getting-started',
    target: '_blank',
    icon: 'book',
  },
}];

export function getNavData() {
  return data;
}

export default data;
