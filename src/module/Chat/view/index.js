import React, { PureComponent } from 'react';
import { connect } from 'dva';
import io from 'socket.io-client';

@connect()
export default class Chat extends PureComponent {
  state = {
    socket: {},
  }
  componentDidMount() {
    const socket = io();
    socket.on('left', (msg) => {
      console.log(msg);
    });
    this.state.socket = socket;
  }

  handleTextChange = () => {
    const { socket } = this.state;
    if (socket) {
      socket.emit('left', 'x');
    } else {
      console.log('no socket');
    }
  }

  render() {
    return (
      <div style={{ margin: '20px' }} onClick={this.handleTextChange}>
        {'xxx'}
      </div>
    );
  }
}
