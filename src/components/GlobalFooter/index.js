import React, { PureComponent } from 'react';
import { Form, Input, Button, Col, Row } from 'antd';
import Part from '../../components/Layout/Part';
import ColumnItem from './ColumnItem';

export default class BasicForms extends PureComponent {
  render() {
    return (
      <div>
        <Part style={{ backgroundColor: '#05585C' }}>
          <div className="container">
            <Row gutter={24}>
              <ColumnItem name="users" number={23864} text="位用户" />
              <ColumnItem name="comments" number={36548} text="次讨论" />
              <ColumnItem name="code" number={65371} text="份代码" />
            </Row>
          </div>
        </Part>
        <Part style={{ backgroundColor: '#252525', textAlign: 'left' }}>
          <div className="container">
            <Row gutter={24}>
              <Col span={8}>
                <small>CODEIT是一个优秀的在线编程学习网站。我们准备了精心打造的图文教程，并且配备了相应的习题。在学习的过程中，倘
                  若遇到困难，用户可以发表帖子到讨论区与其它用户共同交流。此外，平台也准备了一批在线的一对一真人指导，用户可以在
                  任何界面进行预约，对于新手学员来说，他们不必折腾复杂的开发环境，编写好的代码可以直接在网页上运行，或者保存到服
                  务器上。我们真诚希望你可以享受在CODEIT上学习的每一分钟。
                </small>
              </Col>
              <Col span={8}>
                <p style={{ fontSize: '75%', lineHeight: '2' }}>纽佰瑞编程教育有限公司</p>
                <p style={{ fontSize: '75%', lineHeight: '2' }}>办公地址：上海市杨浦区复旦大学创新创业学院308</p>
                <p style={{ fontSize: '75%', lineHeight: '2' }}>电子邮箱：codeit@outlook.com</p>
                <p style={{ fontSize: '75%', lineHeight: '2' }}>联系电话：1234567890</p>
                <p style={{ fontSize: '75%', lineHeight: '2s' }}>微信公众号：纽佰瑞编程</p>
              </Col>
              <Col span={8}>
                <Form
                  onSubmit={this.handleSubmit}
                  hideRequiredMark
                >
                  <Form.Item>
                    <Input
                      type="email"
                      className="form-control form-control-sm"
                      id="Email"
                      placeholder="留下您的联系邮箱便于我们回复"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input.TextArea
                      type="password"
                      className="form-control form-control-sm"
                      id="Content"
                      placeholder="写下您宝贵的建议或疑问"
                      rows="4"
                    />
                  </Form.Item>
                  <Button type="primary" htmlType="submit">
                    <a href="mailto: 413149044@qq.com">确认提交</a>
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </Part>
        <Part className="p-5 text-secondary text-center" style={{ backgroundColor: '#1C1C1C' }}>
          <small>
            Newbrain Inc. 2016-2017 all right reserved. | <a href="http://www.miitbeian.gov.cn">沪ICP备17026082号</a>
          </small>
        </Part>
      </div>
    );
  }
}
