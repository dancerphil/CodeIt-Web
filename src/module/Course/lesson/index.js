import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { List, Card } from 'antd';

@connect(state => ({
  course: state.course,
}))
export default class Course extends PureComponent {
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
              <List.Item
                actions={[<a>{item.quizzes}</a>]}
              >
                <List.Item.Meta
                  title={`${item.order} | ${item.title}`}
                />
                <div />
              </List.Item>
          )}
          />
        </Card>
      </div>
    );
  }
}
