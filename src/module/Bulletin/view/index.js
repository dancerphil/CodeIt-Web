import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, List, Button, Modal, Input } from 'antd';
import BulletinItem from './BulletinItem';

const { TextArea } = Input;

@connect(state => ({
  bulletin: state.bulletin,
}))
export default class Course extends PureComponent {
  state = {
    open: false,
    title: '',
    content: '',
    tags: '',
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'bulletin/get',
    });
  }

  handleClick = () => {
    this.setState({
      open: true,
    });
  }

  handleCancel = () => {
    this.setState({
      open: false,
    });
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleChangeContent = (e) => {
    this.setState({ content: e.target.value });
  }

  handleSubmit = () => {
    const { title, content, tags } = this.state;
    this.props.dispatch({
      type: 'bulletin/create',
      payload: { title, content, tags },
    });
    this.setState({
      open: false,
    });
  }

  render() {
    const { $array } = this.props.bulletin;
    return (
      <div style={{ margin: '20px' }}>
        <Card
          style={{ marginBottom: 24 }}
          title="帖子列表"
          bordered={false}
          loading={false}
          bodyStyle={{ padding: '32px 32px 40px 32px' }}
        >
          <div>
            <Button
              type="primary"
              onClick={this.handleClick}
            >
              {'新建帖子'}
            </Button>
          </div>
          <List
            size="large"
            rowKey="id"
            dataSource={$array}
            renderItem={item => (
              <BulletinItem item={item} />
            )}
          />
        </Card>
        <Modal
          title="新建帖子"
          visible={this.state.open}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
        >
          <Input placeholder="标题" onChange={this.handleChange} />
          <div style={{ margin: '24px 0' }} />
          <TextArea placeholder="内容" autosize={{ minRows: 4 }} onChange={this.handleChangeContent} />
        </Modal>
      </div>
    );
  }
}
