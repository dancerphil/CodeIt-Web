import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { List, Card } from 'antd';
import LessonItem from './LessonItem';

@connect(state => ({
  course: state.course,
}))
export default class Lesson extends PureComponent {
  componentDidMount() {
    const { location } = this.props;
    const courseName = location.pathname.split('/')[2];
    const $array = this.props.course.$array || [];
    const course = $array.find(item => item.name === courseName);
    this.props.dispatch({
      type: 'course/lesson',
      payload: { id: course._id.$id },
    });
  }

  render() {
    const lesson = this.props.course.lesson || {};
    const $array = lesson.$array || [];
    return (
      <div style={{ margin: '20px' }}>
        <Card
          bordered={false}
          title="标准列表"
          style={{ marginTop: 24 }}
          bodyStyle={{ padding: '0 32px 40px 32px' }}
        >
          <List
            size="large"
            rowKey="id"
            dataSource={$array}
            renderItem={item => (
              <LessonItem item={item} />
          )}
          />
        </Card>
      </div>
    );
  }
}
