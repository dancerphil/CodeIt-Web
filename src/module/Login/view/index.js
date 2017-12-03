import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Input, Button, Icon, Checkbox, Alert } from 'antd';
import styles from './index.less';

const FormItem = Form.Item;

@connect(state => ({
  login: state.login,
}))
@Form.create()
export default class Login extends Component {
  state = {
    type: 'account',
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onSwitch = (key) => {
    this.setState({
      type: key,
    });
  }

  onGetCaptcha = () => {
    let count = 59;
    this.interval = setInterval(() => {
      count -= 1;
      if (count === 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields({ force: true },
      (err, values) => {
        console.log(values);
        if (!err) {
          const { userName, password } = values;
          this.props.dispatch({
            type: 'user/login',
            payload: { username: userName, password },
          });
        }
      }
    );
  }

  renderMessage = (message) => {
    return (
      <Alert
        style={{ marginBottom: 24 }}
        message={message}
        type="error"
        showIcon
      />
    );
  }

  render() {
    const login = this.props.login || {};
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const { type } = this.state;
    return (
      <div className={styles.main}>
        <Form onSubmit={this.handleSubmit}>
          {
            login.status === 'error' &&
            login.type === 'account' &&
            login.submitting === false &&
            this.renderMessage('账户或密码错误')
          }
          <FormItem>
            {
              getFieldDecorator('userName', {
                rules: [{
                  required: type === 'account', message: '请输入账户名！',
                }],
              })(
                <Input
                  size="large"
                  prefix={<Icon type="user" className={styles.prefixIcon} />}
                  placeholder="admin"
                />
              )
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator('password', {
                rules: [{
                  required: type === 'account', message: '请输入密码！',
                }],
              })(
                <Input
                  size="large"
                  prefix={<Icon type="lock" className={styles.prefixIcon} />}
                  type="password"
                  placeholder="888888"
                />
              )
            }
          </FormItem>
          <FormItem className={styles.additional}>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox className={styles.autoLogin}>自动登录</Checkbox>
            )}
            <Button size="large" loading={login.submitting} className={styles.submit} type="primary" htmlType="submit">
              登录
            </Button>
          </FormItem>
        </Form>
        <div className={styles.other}>
          <Link to="/home">进入首页</Link>
          <Link className={styles.register} to="/user/register">注册账户</Link>
        </div>
      </div>
    );
  }
}
