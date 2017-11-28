import React, { PureComponent } from 'react';
import { List, Avatar } from 'antd';

export default class LessonItem extends PureComponent {
  render() {
    const { item } = this.props;
    return (
      <List.Item
        actions={[<a>{item.quizzes}</a>]}
      >
        <List.Item.Meta
          avatar={<Avatar shape="square" size="large" >{item.order}</Avatar>}
          title={item.title}
        />
        <div />
      </List.Item>
    );
  }
}
