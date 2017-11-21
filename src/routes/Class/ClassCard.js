import React, { PureComponent } from 'react';
import { Card } from 'antd';

export default class ClassCard extends PureComponent {
  render() {
    const { item } = this.props;
    return (
      <Card hoverable actions={[<a>{item.learners}</a>, <a>{item.lessons}</a>, <a>{item.quizzes}</a>]}>
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
