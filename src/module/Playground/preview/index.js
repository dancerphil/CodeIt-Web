import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, List, Button } from 'antd';
import styles from './index.less';
import CodeItem from './CodeItem';

@connect(state => ({
  code: state.code,
}))
export default class Code extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'code/get',
    });
  }
  handleClick = () => {
    this.props.dispatch({
      type: 'router/set',
      payload: 'code/playground',
    });
  }
  render() {
    const $array = this.props.code.$array || [];
    return (
      <div style={{ margin: '20px' }}>
        <Card
          className={styles.projectList}
          style={{ marginBottom: 24 }}
          title="代码列表"
          bordered={false}
          loading={false}
          bodyStyle={{ padding: '32px 32px 40px 32px' }}
        >
          <div>
            <Button
              type="primary"
              onClick={this.handleClick}
            >
              {'新建代码'}
            </Button>
          </div>
          <List
            size="large"
            rowKey="id"
            dataSource={$array}
            renderItem={item => (
              <CodeItem item={item} />
                )}
          />
        </Card>
      </div>
    );
  }
}
