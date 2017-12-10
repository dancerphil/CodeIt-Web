import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Playground from '../../Playground/view/index';

@connect()
export default class Chat extends PureComponent {
  handleTextChange = (value) => {
    this.props.dispatch({
      type: 'chat/valueChange',
      payload: { value },
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
