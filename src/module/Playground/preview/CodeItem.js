import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { List, Avatar } from 'antd';
import Vote from '../../../components/Vote/index';

@connect()
export default class CodeItem extends PureComponent {
  handleClick = () => {
    const { item } = this.props;
    this.props.dispatch({
      type: 'code/detail',
      payload: { _id: item._id.$id },
    });
  }
  handleVoteUp = (e) => {
    e.preventDefault();
    const { item } = this.props;
    this.props.dispatch({
      type: 'code/vote',
      payload: { _id: item._id.$id, vote: 'up' },
    });
  }
  handleVoteDown = (e) => {
    e.preventDefault();
    const { item } = this.props;
    this.props.dispatch({
      type: 'code/vote',
      payload: { _id: item._id.$id, vote: 'down' },
    });
  }
  render() {
    const { item } = this.props;
    return (
      <List.Item >
        <List.Item.Meta
          style={{ width: '100%' }}
          avatar={<Avatar shape="square" size="large" >{item.type}</Avatar>}
          title={<div onClick={this.handleClick} style={{ cursor: 'pointer' }} >{item.title}</div>}
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
