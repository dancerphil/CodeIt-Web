import React, { PureComponent } from 'react';
import { connect } from 'dva';

@connect(state => ({
  course: state.course,
}))
export default class Content extends PureComponent {
  state = {
    ref: null,
  }
  render() {
    const { data } = this.props.course.content;
    const { ref } = this.state;
    if (ref) {
      ref.innerHTML = data.content;
    }
    return (
      <div style={{ margin: '20px' }} ref={r => this.setState({ ref: r })} />
    );
  }
}
