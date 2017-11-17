import React, { PureComponent } from 'react';
import { connect } from 'dva';
import AceEditor from 'react-ace';

@connect()
export default class Left extends PureComponent {
  onChange = (e) => {
    console.log(e);
  }

  render() {
    return (
      <AceEditor
        style={{ height: '100%', width: '100%' }}
        mode="java"
        theme="github"
        onChange={this.onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
    );
  }
}
