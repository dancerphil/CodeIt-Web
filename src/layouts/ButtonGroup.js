import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

@connect()
export default class ButtonGroup extends PureComponent {
  handleLogin = () => {
    this.props.dispatch({
      type: 'router/set',
      payload: 'user/login',
    });
  }
  handleRegister = () => {
    // this.props.dispatch({
    //   type: 'router/set',
    //   payload: 'user/register',
    // });
  }
  render() {
    return (
      <div style={{ display: 'inline-block' }}>
        <Button style={{ marginLeft: 16 }} onClick={this.handleLogin}>登录</Button>
        <Button type="primary" style={{ marginLeft: 16 }} onClick={this.handleRegister} >注册</Button>
      </div>
    );
  }
}
