import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { List, Avatar } from 'antd';

@connect()
export default class LessonItem extends PureComponent {
  handleClick = () => {
    const { item } = this.props;
    this.props.dispatch({
      type: 'course/content',
      payload: { item },
    });
  }
  render() {
    const { item } = this.props;
    return (
      <List.Item
        onClick={this.handleClick}
        actions={[<a>{item.quizzes}</a>]}
      >
        <div style={{ cursor: 'pointer' }}>
          <List.Item.Meta
            avatar={<Avatar shape="square" size="large" >{item.order}</Avatar>}
            title={item.title}
          />
          <div />
        </div>
      </List.Item>
    );
  }
}
