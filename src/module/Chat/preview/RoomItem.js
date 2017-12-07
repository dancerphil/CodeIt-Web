import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { List } from 'antd';

@connect()
export default class BulletinItem extends PureComponent {
  handleClick = () => {
    // const { item } = this.props;
    // this.props.dispatch({
    //   type: 'code/detail',
    //   payload: { _id: item._id.$id },
    // });
  }
  render() {
    const { item } = this.props;
    return (
      <List.Item >
        <List.Item.Meta
          style={{ width: '100%' }}
          title={<div onClick={this.handleClick} style={{ cursor: 'pointer' }} >{`房间名: ${item.name}`}</div>}
          description={item.content}
        />
        <div />
      </List.Item>
    );
  }
}
