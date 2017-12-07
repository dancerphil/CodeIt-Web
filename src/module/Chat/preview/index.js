import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, List, Button, Modal, Input } from 'antd';
import RoomItem from './RoomItem';

@connect(state => ({
  chat: state.chat,
}))
export default class Course extends PureComponent {
  state = {
    open: false,
    title: '',
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'chat/get',
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

  handleSubmit = () => {
    const { title } = this.state;
    this.props.dispatch({
      type: 'chat/create',
      payload: { title },
    });
    this.setState({
      open: false,
    });
  }

  render() {
    const { chat } = this.props;
    const $array = Object.keys(chat).map(key => Object.assign({ name: key }, chat[key]));
    return (
      <div style={{ margin: '20px' }}>
        <Card
          style={{ marginBottom: 24 }}
          title="房间列表"
          bordered={false}
          loading={false}
          bodyStyle={{ padding: '32px 32px 40px 32px' }}
        >
          <div>
            <Button
              type="primary"
              onClick={this.handleClick}
            >
              {'新建房间'}
            </Button>
          </div>
          <List
            size="large"
            rowKey="id"
            dataSource={$array}
            renderItem={item => (
              <RoomItem item={item} />
            )}
          />
        </Card>
        <Modal
          title="新建房间"
          visible={this.state.open}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
        >
          <Input placeholder="标题" onChange={this.handleChange} />
        </Modal>
      </div>
    );
  }
}
