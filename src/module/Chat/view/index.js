import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Playground from '../../Playground/view/index';

@connect(state => ({
  code: state.code,
}))
export default class Chat extends PureComponent {
  handleTextChange = (value) => {
    const { content } = this.props.code;
    this.props.dispatch({
      type: 'chat/value',
      payload: { value, content },
    });
  }

  render() {
    return (
      <div>
        <Playground onTextChange={this.handleTextChange} />
      </div>
    );
  }
}
