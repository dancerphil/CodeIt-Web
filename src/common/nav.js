import BasicLayout from '../layouts/BasicLayout';
import UserLayout from '../layouts/UserLayout';
import BlankLayout from '../layouts/BlankLayout';

import HomePage from '../module/HomePage/view/index';
import Course from '../module/Course/view/index';
import Lesson from '../module/Course/lesson/index';
import Content from '../module/Course/content/index';
import Code from '../module/Playground/preview/index';
import Bulletin from '../module/Bulletin/view/index';
import BulletinContent from '../module/Bulletin/content/index';
import Playground from '../module/Playground/view/index';
import ChatRoom from '../module/Chat/preview/index';
import Chat from '../module/Chat/view/index';

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
    name: '课程',
    path: 'course/:name',
    component: Lesson,
  }, {
    name: '课程详情',
    path: 'course/:name/detail',
    component: Content,
  }, {
    name: '代码',
    path: 'code',
    icon: 'code-o',
    component: Code,
    show: true,
  }, {
    name: '代码',
    path: 'code/playground',
    component: Playground,
  }, {
    name: '一对一',
    path: 'chat',
    icon: 'sync',
    component: ChatRoom,
    show: true,
  }, {
    name: '一对一',
    path: 'chat/playground',
    component: Chat,
  }, {
    name: '论坛',
    path: 'bulletin',
    icon: 'solution',
    component: Bulletin,
    show: true,
  }, {
    name: '论坛',
    path: 'bulletin/detail',
    component: BulletinContent,
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
