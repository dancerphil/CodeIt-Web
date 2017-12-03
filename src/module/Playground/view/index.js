import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import Editor from './Editor';
import Output from './Output';

@connect()
export default class Playground extends PureComponent {
  render() {
    const { onTextChange } = this.props;
    return (
      <div style={{ height: 'calc(100vh - 64px)' }} >
        <Row gutter={24} style={{ height: '100%', margin: 0 }} >
          <Col xl={16} lg={24} md={24} sm={24} xs={24} style={{ height: '100%', padding: 0 }} >
            <Editor onTextChange={onTextChange} />
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24} style={{ height: '100%', padding: 0 }} >
            <Output />
          </Col>
        </Row>
      </div>
    );
  }
}
