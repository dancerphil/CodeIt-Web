import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { List } from 'antd';
import Vote from '../../../components/Vote/index';

@connect()
export default class BulletinItem extends PureComponent {
  handleClick = () => {
    // const { item } = this.props;
    // this.props.dispatch({
    //   type: 'code/detail',
    //   payload: { _id: item._id.$id },
    // });
  }
  handleVoteUp = (e) => {
    e.preventDefault();
    const { item } = this.props;
    this.props.dispatch({
      type: 'code/vote',
      payload: { _id: item._id.$id, vote: 'up' },
    });
  }
  render() {
    const { item } = this.props;
    return (
      <List.Item >
        <List.Item.Meta
          style={{ width: '100%' }}
          avatar={
            <div style={{ display: 'flex', alignSelf: 'center', fontSize: '14px', whiteSpace: 'nowrap' }}>
              <Vote type="up" number={item.vote.up} onClick={this.handleVoteUp} />
              <div style={{ margin: '2px', marginLeft: '16px' }}>{`回复: ${item.replies}`}</div>
            </div>
          }
          title={<div onClick={this.handleClick} style={{ cursor: 'pointer' }} >{item.title}</div>}
          description={item.content}
        />
        <div />
      </List.Item>
    );
  }
}
