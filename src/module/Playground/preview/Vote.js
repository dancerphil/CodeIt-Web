import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import styles from './vote.less';

export default class Vote extends PureComponent {
  render() {
    const { type, number, onClick } = this.props;
    return (
      <div className={styles.vote} onClick={onClick}>
        <Icon type={type} />
        <span>{number}</span>
      </div>
    );
  }
}
