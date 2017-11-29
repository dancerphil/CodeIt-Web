import React, { PureComponent } from 'react';
import { connect } from 'dva';
import io from 'socket.io-client';
import { applyPatch, createPatch } from 'diff';
import Playground from '../../Playground/view/index';

const dealWith = (str) => {
  const l = str.length;
  if (l < 2) {
    return `${str}\r\n`;
  }
  if (str.slice(l - 2, l) !== '\r\n') {
    return `${str}\r\n`;
  }
  return str;
};

@connect()
export default class Chat extends PureComponent {
  state = {
    text: dealWith(''),
    socket: {},
  }
  componentDidMount() {
    const socket = io();
    socket.on('left', (msg) => {
      console.log(`state.text = applyPatch(state.text, msg)${applyPatch(this.state.text, msg)};`);
      this.setState({ text: dealWith(`${applyPatch(this.state.text, msg)}`) });
    });
    this.state.socket = socket;
  }

  handleTextChange = (newValue) => {
    const value = dealWith(`${newValue}`);
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
