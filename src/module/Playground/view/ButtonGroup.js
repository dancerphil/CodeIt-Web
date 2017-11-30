import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

@connect()
export default class ButtonGroup extends PureComponent {
  render() {
    return (
      <div style={{ padding: '10px', background: '#2f3129', display: 'flex', justifyContent: 'flex-end' }}>
        <Button style={{ marginRight: '20px' }}>保存</Button>
        <Button style={{ marginRight: '10px' }}>运行</Button>
      </div>
    );
  }
}
