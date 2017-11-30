import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Button, Modal, Input } from 'antd';

@connect()
export default class ButtonGroup extends PureComponent {
  state = {
    open: false,
    title: '',
  }
  handleOpen=() => {
    this.setState({ open: true });
  }
  handleOk = () => {
    this.props.handleSave(this.state.title);
    this.setState({
      open: false,
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
  render() {
    return (
      <div style={{ padding: '10px', background: '#2f3129', display: 'flex', justifyContent: 'flex-end' }}>
        <Button style={{ marginRight: '20px' }} onClick={this.handleOpen}>保存</Button>
        <Button style={{ marginRight: '10px' }}>运行</Button>
        <Modal
          title="保存代码"
          visible={this.state.open}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>请输入标题</p>
          <Input placeholder="标题" onChange={this.handleChange} />
        </Modal>
      </div>
    );
  }
}
