// todo
/* eslint-disable import/no-dynamic-require */
import React, { Component } from 'react';
import AceEditor from 'react-ace';
import { Tabs, Select } from 'antd';
import 'brace/mode/javascript';
import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/snippets/javascript';
import 'brace/snippets/java';
import 'brace/snippets/python';
import 'brace/theme/monokai';
import 'brace/theme/github';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';
import { editorLayout, extraButton } from './commonStyle';
import ButtonGroup from './ButtonGroup';

const { TabPane } = Tabs;
const { Option } = Select;

const languages = [
  'javascript',
  'java',
  'python',
];

const themes = [
  'monokai',
  'github',
];

const defaultValue =
  `function onLoad(editor) {
  console.log("i've loaded");
}`;
export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultValue,
      theme: 'monokai',
      mode: 'javascript',
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
    this.setState({
      value: newValue,
    });
  }
  setTheme(value) {
    this.setState({
      theme: value,
    });
  }
  setMode(value) {
    this.setState({
      mode: value,
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
        <Select defaultValue="javascript" style={extraButton} onChange={this.setMode}>
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
    let { text } = this.props;
    if (text === undefined) {
      text = this.state.value;
    }
    return (
      <div>
        <Tabs
          style={{ background: '#2f3129' }}
          tabBarStyle={{ marginBottom: '0px', borderBottom: '1px solid #2f3129' }}
          tabBarExtraContent={this.renderTabBarExtraContent()}
        >
          <TabPane
            tab={<div style={{ color: 'white' }} >{this.state.mode}</div>}
          >
            <AceEditor
              style={editorLayout}
              mode={this.state.mode}
              theme={this.state.theme}
              name="blah2"
              onLoad={this.onLoad}
              onChange={this.onChange}
              onSelectionChange={this.onSelectionChange}
              onCursorChange={this.onCursorChange}
              onValidate={this.onValidate}
              value={text}
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
        <ButtonGroup />
      </div>
    );
  }
}

