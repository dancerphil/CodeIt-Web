import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Card, List, Button } from 'antd';
import styles from './index.less';

@connect()
export default class Workplace extends PureComponent {
  handleClick = () => {
    this.props.dispatch({
      type: 'router/set',
      payload: 'workplace/playground',
    });
  }
  render() {
    return (
      <div style={{ margin: '20px' }}>
        <Row gutter={24}>
          <Col xl={16} lg={24} md={24} sm={24} xs={24}>
            <Card
              className={styles.projectList}
              style={{ marginBottom: 24 }}
              title="进行中的项目"
              bordered={false}
              extra={<Link to="/">全部项目</Link>}
              loading={false}
              bodyStyle={{ padding: 0 }}
            >
              <Button
                type="primary"
                onClick={this.handleClick}
              >
              New Code
              </Button>
            </Card>
            <Card
              bodyStyle={{ padding: 0 }}
              bordered={false}
              className={styles.activeCard}
              title="动态"
              loading={false}
            >
              <List loading={false} size="large">
                <div className={styles.activitiesList}>
                  {'xxx'}
                </div>
              </List>
            </Card>
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
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
              <div className={styles.chart}>
                {'xxx'}
              </div>
            </Card>
            <Card
              bodyStyle={{ paddingTop: 12, paddingBottom: 12 }}
              bordered={false}
              title="团队"
            >
              <div className={styles.members}>
                <Row gutter={48}>
                  {'xxx'}
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
