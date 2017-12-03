import React, { PureComponent } from 'react';
import { connect } from 'dva';
import io from 'socket.io-client';
import { applyPatch, createPatch } from 'diff';
import Playground from '../../Playground/view/index';

const dealWith = (str) => {
  const l = str.length;
  if (l === 0) {
    return '\r\n';
  }
  if (str.slice(l - 1, l) !== '\n') {
    return `${str}\r\n`;
  }
  return str;
};

@connect(state => ({
  code: state.code,
}))
export default class Chat extends PureComponent {
  state = {
    socket: {},
  }
  componentDidMount() {
    const socket = io();
    this.props.dispatch({
      type: 'code/set',
      payload: { content: dealWith('') },
    });
    socket.on('left', (msg) => {
      console.log(`state.text = applyPatch(state.text, msg)${applyPatch(this.props.code.content, msg)};`);
      const text = applyPatch(this.props.code.content, msg);
      if (text) {
        this.props.dispatch({
          type: 'code/set',
          payload: { content: dealWith(`${text}`) },
        });
      }
    });
    this.state.socket = socket;
  }

  handleTextChange = (newValue) => {
    const value = dealWith(`${newValue}`);
    const { socket } = this.state;
    if (socket) {
      console.log(`socket.emit('left', createPatch('left', text, newValue))${createPatch('left', this.props.code.content, value)}`);
      socket.emit('left', createPatch('left', this.props.code.content, value));
    } else {
      console.log('no socket');
    }
  }

  render() {
    return (
      <div>
        <Playground onTextChange={this.handleTextChange} />
      </div>
    );
  }
}
