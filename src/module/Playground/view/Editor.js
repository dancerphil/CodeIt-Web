// todo
/* eslint-disable import/no-dynamic-require */
import React, { Component } from 'react';
import { connect } from 'dva';
import AceEditor from 'react-ace';
import { Tabs, Select } from 'antd';
import 'brace/mode/python';
import 'brace/mode/java';
import 'brace/mode/javascript';
import 'brace/snippets/python';
import 'brace/snippets/java';
import 'brace/snippets/javascript';
import 'brace/theme/monokai';
import 'brace/theme/github';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';
import { editorLayout, extraButton } from './commonStyle';
import ButtonGroup from './ButtonGroup';

const { TabPane } = Tabs;
const { Option } = Select;

const languages = [
  'python',
  'java',
  'javascript',
];

const themes = [
  'monokai',
  'github',
];

@connect(state => ({
  code: state.code,
}))
export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'monokai',
      fontSize: 14,
    };
    this.setTheme = this.setTheme.bind(this);
    this.setMode = this.setMode.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setFontSize = this.setFontSize.bind(this);
    this.setBoolean = this.setBoolean.bind(this);
  }

  onChange(newValue) {
    const { onTextChange } = this.props;
    if (onTextChange) {
      onTextChange(newValue);
    }
    this.props.dispatch({
      type: 'code/set',
      payload: { content: newValue },
    });
  }
  setTheme(value) {
    this.setState({
      theme: value,
    });
  }
  setMode(value) {
    this.props.dispatch({
      type: 'code/set',
      payload: { type: value },
    });
  }
  setBoolean(name, value) {
    this.setState({
      [name]: value,
    });
  }
  setFontSize(value) {
    this.setState({
      fontSize: parseInt(value, 10),
    });
  }
  renderTabBarExtraContent() {
    return (
      <div>
        <Select defaultValue="python" style={extraButton} onChange={this.setMode}>
          {languages.map(lang => <Option key={lang} value={lang}>{lang}</Option>)}
        </Select>
        <Select defaultValue="monokai" style={extraButton} onChange={this.setTheme}>
          {themes.map(theme => <Option key={theme} value={theme}>{theme}</Option>)}
        </Select>
        <Select defaultValue="14" style={extraButton} onChange={this.setFontSize}>
          {[14, 16, 18, 20, 24, 28, 32, 40].map(fontSize => <Option key={fontSize} value={fontSize}>{fontSize}</Option>)}
        </Select>
      </div>
    );
  }
  render() {
    const { content } = this.props.code;
    const { type } = this.props.code;
    let etype = type;
    if (type === 'python3') {
      etype = 'python';
    }
    return (
      <div>
        <Tabs
          style={{ background: '#2f3129' }}
          tabBarStyle={{ marginBottom: '0px', borderBottom: '1px solid #2f3129' }}
          tabBarExtraContent={this.renderTabBarExtraContent()}
        >
          <TabPane
            tab={<div style={{ color: 'white' }} >{type}</div>}
          >
            <AceEditor
              style={editorLayout}
              mode={etype}
              theme={this.state.theme}
              name="blah2"
              onLoad={this.onLoad}
              onChange={this.onChange}
              onSelectionChange={this.onSelectionChange}
              onCursorChange={this.onCursorChange}
              onValidate={this.onValidate}
              value={content}
              fontSize={this.state.fontSize}
              showPrintMargin
              showGutter
              highlightActiveLine
              setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                  showLineNumbers: true,
                  tabSize: 2,
                }}
            />
          </TabPane>
        </Tabs>
        <ButtonGroup handleSave={(title) => {
          this.props.dispatch({
            type: 'code/save',
            payload: { public: true, title, type, content, tags: [] },
          });
        }}
        />
      </div>
    );
  }
}

