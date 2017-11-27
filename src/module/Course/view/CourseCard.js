import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import Action from './Action';

@connect()
export default class ClassCard extends PureComponent {
  handleClick = item => () => {
    console.log(`course/${item.name}`);
    this.props.dispatch({
      type: 'router/set',
      payload: `course/${item.name}`,
    });
  }
  render() {
    const { item } = this.props;
    const actions = [
      <Action name="人数" value={item.learners} />,
      <Action name="课程" value={item.lessons} />,
      <Action name="测验" value={item.quizzes} />,
    ];
    return (
      <Card hoverable actions={actions} onClick={this.handleClick(item)}>
        <Card.Meta
          avatar={<img alt="" src={item.icon} />}
          title={<a href="#">{item.name}</a>}
          description={(
            <div>{item.intro}</div>
          )}
        />
      </Card>
    );
  }
}
