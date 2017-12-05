import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { List } from 'antd';

@connect(state => ({
  bulletin: state.bulletin,
}))
export default class Course extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'bulletin/get',
    });
  }

  render() {
    const { $array } = this.props.bulletin;
    return (
      <div style={{ margin: '20px' }}>
        <List
          rowKey="id"
          loading={false}
          grid={{ gutter: 24, lg: 2, md: 2, sm: 1, xs: 1 }}
          dataSource={$array || []}
          renderItem={(item) => {
            return (item ? <List.Item key={item._id.$id}><div >{JSON.stringify(item)}</div></List.Item> : <div>暂时没有课程</div>);
        }}
        />
      </div>
    );
  }
}
