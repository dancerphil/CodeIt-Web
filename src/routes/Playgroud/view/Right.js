import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card } from 'antd';

@connect()
export default class Left extends PureComponent {
  render() {
    return (
      <div>
        <Card
          style={{ marginBottom: 24 }}
          title="快速开始 / 便捷导航"
          bordered={false}
          bodyStyle={{ padding: 0 }}
        >
          {'xxx'}
        </Card>
        <Card
          style={{ marginBottom: 24 }}
          bordered={false}
          title="XX 指数"
          loading={false}
        >
          <div>
            {'xxx'}
          </div>
        </Card>
        <Card
          bodyStyle={{ paddingTop: 12, paddingBottom: 12 }}
          bordered={false}
          title="团队"
        >
          <div>
            {'xxx'}
          </div>
        </Card>
      </div>
    );
  }
}
