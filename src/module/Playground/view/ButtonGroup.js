import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Button, Modal, Input } from 'antd';

@connect(state => ({
  code: state.code,
}))
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
      alarm: false,
    });
  }
  handleChange = (e) => {
    this.setState({ title: e.target.value });
  }
  handleRun = () => {
    const { codeId } = this.props.code;
    if (codeId) {
      this.props.dispatch({
        type: 'code/run',
        payload: { _id: codeId },
      });
    } else {
      this.setState({ alarm: true });
    }
    // this.setState({ title: e.target.value });
  }
  render() {
    return (
      <div style={{ padding: '10px', background: '#2f3129', display: 'flex', justifyContent: 'flex-end' }}>
        <Button style={{ marginRight: '20px' }} onClick={this.handleOpen}>保存</Button>
        <Button style={{ marginRight: '10px' }} onClick={this.handleRun}>运行</Button>
        <Modal
          title="保存代码"
          visible={this.state.open}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>请输入标题</p>
          <Input placeholder="标题" onChange={this.handleChange} />
        </Modal>
        <Modal
          title="提示"
          visible={this.state.alarm}
          footer={<Button type="primary" onClick={this.handleCancel}>确认</Button>}
          onCancel={this.handleCancel}
        >
          <p>请先保存代码</p>
        </Modal>
      </div>
    );
  }
}
