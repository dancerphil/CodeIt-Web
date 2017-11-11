import React, { PureComponent } from 'react';

export default class Profile extends PureComponent {
  render() {
    const { text } = this.props;
    console.log(text);
    return (
      <div style={{ lineHeight: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <small className="text-white">我认为对象就像是生物学里的细胞，或者网络中的一台计算机，只能够通过消息来通信。
        </small>
        <img style={{ borderRadius: '50%' }} src={require('./assets/Alan-Kay.jpg')} alt="" width="100px" height="100px" />
        <p className="text-white font-weight-bold lead">Alan Kay</p>
        <small className="text-light">面向对象之父</small>
      </div>
    );
  }
}
