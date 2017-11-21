import React, { PureComponent } from 'react';
import { Card } from 'antd';
import Action from './Action';

export default class ClassCard extends PureComponent {
  render() {
    const { item } = this.props;
    const actions = [
      <Action name="人数" value={item.learners} />,
      <Action name="课程" value={item.lessons} />,
      <Action name="测验" value={item.quizzes} />,
    ];
    return (
      <Card hoverable actions={actions}>
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
