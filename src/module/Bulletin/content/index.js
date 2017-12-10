import React, { PureComponent } from 'react';
import { connect } from 'dva';

@connect(state => ({
  bulletin: state.bulletin,
}))
export default class Content extends PureComponent {
  render() {
    const { data } = this.props.bulletin.content;
    return (
      <div style={{ margin: '20px' }} >{JSON.stringify(data)}</div>);
  }
}
