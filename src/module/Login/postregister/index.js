import React, { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import { Link } from 'dva/router';
import Result from '../../../components/Result/index';
import styles from './index.less';


const actions = (
  <div className={styles.actions}>
    <Link to="/"><Button size="large" type="primary">返回首页</Button></Link>
  </div>
);

@connect(state => ({
  user: state.user,
}))
export default class RegisterResult extends Component {
  render() {
    const { email, username } = this.props.user.data;
    console.log(this.props.user);
    const title = <div className={styles.title}>{`你的账户：${email} 注册成功`}</div>;
    return (
      <Result
        className={styles.registerResult}
        type="success"
        title={title}
        description={`下一次，你可以使用用户名 ${username} 进行登录。现在你可以返回首页。`}
        actions={actions}
        style={{ marginTop: 56 }}
      />
    );
  }
}

