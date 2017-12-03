import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Card, List, Button } from 'antd';
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
        <Row gutter={24}>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Card
              className={styles.projectList}
              style={{ marginBottom: 24 }}
              title="进行中的项目"
              bordered={false}
              extra={<Link to="/">全部项目</Link>}
              loading={false}
              bodyStyle={{ padding: '32px 32px 40px 32px' }}
            >
              <div>
                <Button
                  type="primary"
                  onClick={this.handleClick}
                >
                  {'New Code'}
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
          </Col>
        </Row>
      </div>
    );
  }
}
