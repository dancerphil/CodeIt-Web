import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { List } from 'antd';
import CourseCard from './CourseCard';

@connect(state => ({
  course: state.course,
}))
export default class Course extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'course/get',
    });
  }

  render() {
    const { $array } = this.props.course;

    return (
      <List
        rowKey="id"
        loading={false}
        grid={{ gutter: 24, lg: 2, md: 2, sm: 1, xs: 1 }}
        dataSource={$array || []}
        renderItem={(item) => {
          return (item ? <List.Item key={item._id.$id}><CourseCard item={item} /></List.Item> : <div>暂时没有课程</div>);
        }}
      />
    );
  }
}
