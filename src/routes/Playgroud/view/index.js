import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import Left from './Left';
import Right from './Right';

@connect()
export default class Playground extends PureComponent {
  render() {
    return (
      <div style={{ height: 'calc(100vh - 64px)' }} >
        <Row gutter={24} style={{ height: '100%' }} >
          <Col xl={16} lg={24} md={24} sm={24} xs={24} style={{ height: '100%' }} >
            <Left />
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24} style={{ height: '100%' }} >
            <Right />
          </Col>
        </Row>
      </div>
    );
  }
}
