import React, { PureComponent } from 'react';
import { List, Avatar } from 'antd';

export default class CodeItem extends PureComponent {
  render() {
    const { item } = this.props;
    return (
      <List.Item
        actions={[<a>{item.quizzes}</a>]}
      >
        <List.Item.Meta
          avatar={<Avatar shape="square" size="large" >{item.type}</Avatar>}
          title={item.title}
          description={`up: ${item.vote.up} down: ${item.vote.down}`}
        />
        <div />
      </List.Item>
    );
  }
}
