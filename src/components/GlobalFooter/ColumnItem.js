import React, { PureComponent } from 'react';
import { Col } from 'antd';
import { Icon } from 'react-fa';

const Big = ({ number, text }) => {
  return <h4 style={{ color: 'white', marginTop: '12px' }}><strong><big>{number}</big></strong>{text}</h4>;
};

export default class ColumnItem extends PureComponent {
  render() {
    const { name, number, text } = this.props;
    return (
      <Col span={8}>
        <Icon name={name} size="2x" />
        <Big number={number} text={text} />
      </Col>
    );
  }
}
