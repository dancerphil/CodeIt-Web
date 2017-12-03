import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Tabs, Button } from 'antd';
import { outputLayout, extraButton } from './commonStyle';

const { TabPane } = Tabs;

@connect(state => ({
  code: state.code,
}))
export default class Output extends PureComponent {
  tabBarExtraContent = (
    <div>
      <Button style={extraButton}>分享</Button>
    </div>
  )

  render() {
    const { data } = this.props.code;
    let output = '';
    if (data) {
      output = data.stdout || '';
    }
    return (
      <Tabs
        style={{ background: '#2f3129', color: 'white' }}
        tabBarStyle={{ marginBottom: '0px', borderBottom: '1px solid #2f3129' }}
        tabBarExtraContent={this.tabBarExtraContent}
      >
        <TabPane
          tab={<div style={{ color: 'white' }} >Output</div>}
        >
          <div style={outputLayout}>
            {output}
          </div>
        </TabPane>
      </Tabs>
    );
  }
}
