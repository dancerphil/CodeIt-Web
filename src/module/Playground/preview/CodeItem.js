import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { List, Avatar } from 'antd';
import Vote from './Vote';

@connect()
export default class CodeItem extends PureComponent {
  handleVoteUp = () => {
    const { item } = this.props;
    this.props.dispatch({
      type: 'code/vote',
      payload: { _id: item._id.$id, vote: 'up' },
    });
  }
  handleVoteDown = () => {
    const { item } = this.props;
    this.props.dispatch({
      type: 'code/vote',
      payload: { _id: item._id.$id, vote: 'down' },
    });
  }
  render() {
    const { item } = this.props;
    return (
      <List.Item
        actions={[<a>{item.quizzes}</a>]}
      >
        <List.Item.Meta
          avatar={<Avatar shape="square" size="large" >{item.type}</Avatar>}
          title={item.title}
          description={
            <div style={{ display: 'flex' }}>
              <Vote type="up" number={item.vote.up} onClick={this.handleVoteUp} />
              <Vote type="down" number={item.vote.down} onClick={this.handleVoteDown} />
            </div>
          }
        />
        <div />
      </List.Item>
    );
  }
}
