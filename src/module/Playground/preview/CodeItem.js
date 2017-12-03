import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { List, Avatar } from 'antd';

@connect()
export default class CodeItem extends PureComponent {
  handleClick = () => {
    const { item } = this.props;
    this.props.dispatch({
      type: 'code/detail',
      payload: { _id: item._id.$id },
    });
  }
  render() {
    const { item } = this.props;
    // todo actions={[<a>{item.quizzes}</a>]}
    return (
      <List.Item
        onClick={this.handleClick}
      >
        <div style={{ cursor: 'pointer' }}>
          <List.Item.Meta
            avatar={<Avatar shape="square" size="large" >{item.type}</Avatar>}
            title={item.title}
            description={`up: ${item.vote.up} down: ${item.vote.down}`}
          />
          <div />
        </div>
      </List.Item>
    );
  }
}
