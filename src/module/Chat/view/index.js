import React, { PureComponent } from 'react';
import { connect } from 'dva';
import io from 'socket.io-client';
import { applyPatch, createPatch } from 'diff';
import Playground from '../../Playground/view/index';

@connect()
export default class Chat extends PureComponent {
  state = {
    text: '',
    socket: {},
  }
  componentDidMount() {
    const socket = io();
    const { state } = this;
    socket.on('left', (msg) => {
      console.log(`state.text = applyPatch(state.text, msg)${applyPatch(state.text, msg)};`);
      state.text = applyPatch(state.text, msg);
    });
    this.state.socket = socket;
  }

  handleTextChange = (newValue) => {
    const { text, socket } = this.state;
    if (socket) {
      console.log(`socket.emit('left', createPatch('left', text, newValue))${createPatch('left', text, newValue)}`);
      socket.emit('left', createPatch('left', text, newValue));
      this.setState({ text: newValue });
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
