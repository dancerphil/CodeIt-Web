import BasicLayout from '../layouts/BasicLayout';
import UserLayout from '../layouts/UserLayout';
import BlankLayout from '../layouts/BlankLayout';

import HomePage from '../module/HomePage/view/index';
import Course from '../module/Course/view/index';
import Lesson from '../module/Course/lesson/index';
import Code from '../module/Playground/preview/index';
import Playground from '../module/Playground/view/index';

import Login from '../module/Login/view/index';
import Register from '../module/Login/register/index';
import RegisterResult from '../module/Login/postregister/index';

const data = [{
  component: BasicLayout,
  layout: 'BasicLayout',
  name: '首页', // for breadcrumb
  path: '',
  children: [{
    name: '首页',
    path: 'home',
    icon: 'home',
    component: HomePage,
    show: true,
  }, {
    name: '课程',
    path: 'course',
    icon: 'book',
    component: Course,
    show: true,
  }, {
    name: 'lesson',
    path: 'course/:name',
    component: Lesson,
  }, {
    name: '代码',
    path: 'code',
    icon: 'code-o',
    component: Code,
    show: true,
  }, {
    name: 'playground',
    path: 'code/playground',
    component: Playground,
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
