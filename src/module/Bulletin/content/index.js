import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Input, Button } from 'antd';

const { TextArea } = Input;

@connect(state => ({
  bulletin: state.bulletin,
}))
export default class Content extends PureComponent {
  state = {
    title: '',
    content: '',
    tags: '',
  }
  handleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleChangeContent = (e) => {
    this.setState({ content: e.target.value });
  }

  handleSubmit = () => {
    const { data } = this.props.bulletin.content;
    const { title, content, tags } = this.state;
    this.props.dispatch({
      type: 'bulletin/create',
      payload: { title, content, tags, _id: data._id.$id },
    });
  }
  render() {
    const { data } = this.props.bulletin.content;
    return (
      <div style={{ margin: '20px' }} >
        <Card
          style={{ marginBottom: 24 }}
          bordered={false}
          loading={false}
          bodyStyle={{ padding: '32px 32px 40px 32px' }}
        >
          {JSON.stringify(data)}
        </Card>
        <Card
          style={{ marginBottom: 24 }}
          bordered={false}
          loading={false}
          bodyStyle={{ padding: '32px 32px 40px 32px' }}
        >
          {JSON.stringify(data)}
        </Card>
        <Card
          style={{ marginBottom: 24 }}
          bordered={false}
          loading={false}
          bodyStyle={{ padding: '32px 32px 40px 32px' }}
        >
          <Input placeholder="标题" onChange={this.handleChange} />
          <div style={{ margin: '24px 0' }} />
          <TextArea placeholder="内容" autosize={{ minRows: 4 }} onChange={this.handleChangeContent} />
          <div style={{ margin: '24px 0' }} />
          <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>回复</Button>
        </Card>
      </div>
    );
  }
}
