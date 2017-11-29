import React, { PureComponent } from 'react';
import { connect } from 'dva';
import io from 'socket.io-client';
import { applyPatch, createPatch } from 'diff';
import Playground from '../../Playground/view/index';

@connect()
export default class Chat extends PureComponent {
  state = {
    text: '\r\n',
    socket: {},
  }
  componentDidMount() {
    const socket = io();
    socket.on('left', (msg) => {
      console.log(`state.text = applyPatch(state.text, msg)${applyPatch(this.state.text, msg)};`);
      this.setState({ text: `${applyPatch(this.state.text, msg)}\r\n` });
    });
    this.state.socket = socket;
  }

  handleTextChange = (newValue) => {
    const value = `${newValue}\r\n`;
    const { text, socket } = this.state;
    if (socket) {
      console.log(`socket.emit('left', createPatch('left', text, newValue))${createPatch('left', text, value)}`);
      socket.emit('left', createPatch('left', text, value));
      this.setState({ text: value });
    } else {
      console.log('no socket');
    }
  }

  render() {
    return (
      <div>
        <Playground text={this.state.text} onTextChange={this.handleTextChange} />
      </div>
    );
  }
}
