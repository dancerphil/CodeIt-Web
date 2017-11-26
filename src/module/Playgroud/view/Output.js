import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Tabs, Button } from 'antd';
import { editorLayout, extraButton } from './commonStyle';

const { TabPane } = Tabs;

@connect()
export default class Output extends PureComponent {
  tabBarExtraContent = (
    <div>
      <Button style={extraButton}>分享</Button>
    </div>
  )

  render() {
    return (
      <Tabs
        style={{ background: '#2f3129', color: 'white' }}
        tabBarStyle={{ marginBottom: '0px', borderBottom: '1px solid #2f3129' }}
        tabBarExtraContent={this.tabBarExtraContent}
      >
        <TabPane
          tab={<div style={{ color: 'white' }} >Output</div>}
        >
          <div style={editorLayout}>
            {'功能正在开发中'}
          </div>
        </TabPane>
      </Tabs>
    );
  }
}
