import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { List } from 'antd';
import CourseCard from './CourseCard';

@connect()
export default class Course extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'monitor/fetchTags',
    });
  }

  render() {
    const data = [
      {
        _id: {
          $id: '5a12fd72720cd93cbe1bc9d0',
        },
        name: 'Python3',
        icon: 'python3.svg',
        intro: 'Python是一种解释型、面向对象、动态数据类型的高级程序设计语言。Python由Guido vanRossum于1989年底发明，第一个公开发行版发行于1991年。',
        learners: 0,
        lessons: 35,
        quizzes: 0,
      },
      {
        _id: {
          $id: '5a12fd72720cd93cbe1bc9d1',
        },
        name: 'C++',
        icon: 'cpp.svg',
        intro: 'C++是一种中级语言，它由Bjarne Stroustrup 于1979年在贝尔实验室设计开发。C++进一步扩充和完善了C语言，是一种面向对象的程序设计语言。',
        learners: 0,
        lessons: 0,
        quizzes: 0,
      },
      {
        _id: {
          $id: '5a12fd72720cd93cbe1bc9d2',
        },
        name: 'Java',
        icon: 'java.svg',
        intro: 'Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。Java可运行于多个平台，如Windows, Mac OS，及其他多种UNIX版本的系统。',
        learners: 0,
        lessons: 0,
        quizzes: 0,
      },
      {
        _id: {
          $id: '5a12fd72720cd93cbe1bc9d3',
        },
        name: 'Javascript',
        icon: 'js.svg',
        intro: 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言。它的解释器被称为JavaScript引擎，广泛用于浏览器客户端。',
        learners: 0,
        lessons: 0,
        quizzes: 0,
      },
      {
        _id: {
          $id: '5a12fd72720cd93cbe1bc9d4',
        },
        name: 'PHP',
        icon: 'php.svg',
        intro: 'PHP是一种通用开源脚本语言。语法吸收了C语言、Java和Perl的特点，利于学习，使用广泛，主要适用于Web开发领域。',
        learners: 0,
        lessons: 0,
        quizzes: 0,
      },
      {
        _id: {
          $id: '5a12fd72720cd93cbe1bc9d5',
        },
        name: 'Csharp',
        icon: 'csharp.svg',
        intro: 'C#是一种安全的、稳定的、简单的、优雅的，由C和C++衍生出来的面向对象的编程语言。它在继承C和C++强大功能的同时去掉了一些它们的复杂特性。',
        learners: 0,
        lessons: 0,
        quizzes: 0,
      },
      {
        _id: {
          $id: '5a12fd72720cd93cbe1bc9d6',
        },
        name: 'Swift',
        icon: 'swift.svg',
        intro: 'Swift 是一种支持多编程范式和编译式的开源编程语言,苹果于2014年WWDC（苹果开发者大会）发布，用于开发iOS，OS X 和watchOS 应用程序。',
        learners: 0,
        lessons: 0,
        quizzes: 0,
      },
      {
        _id: {
          $id: '5a12fd72720cd93cbe1bc9d7',
        },
        name: 'Ruby',
        icon: 'ruby.svg',
        intro: 'Ruby 是一种开源的面向对象程序设计的服务器端脚本语言，在20世纪90年代中期由日本的松本行弘（まつもとゆきひろ）设计并开发。',
        learners: 0,
        lessons: 0,
        quizzes: 0,
      },
    ];

    return (
      <List
        rowKey="id"
        loading={false}
        grid={{ gutter: 24, lg: 2, md: 2, sm: 1, xs: 1 }}
        dataSource={data}
        renderItem={(item) => {
          console.log(item);
          return (item ? <List.Item key={item._id.$id}><CourseCard item={item} /></List.Item> : <div>暂时没有课程</div>);
        }}
      />
    );
  }
}
