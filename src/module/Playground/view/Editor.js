// todo
/* eslint-disable import/no-dynamic-require */
import React, { Component } from 'react';
import AceEditor from 'react-ace';
import { Tabs, Select, Button } from 'antd';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';
import { editorLayout, extraButton } from './commonStyle';

const { TabPane } = Tabs;
const { Option } = Select;

const languages = [
  'javascript',
  'java',
  'python',
  'xml',
  'ruby',
  'sass',
  'markdown',
  'mysql',
  'json',
  'html',
  'handlebars',
  'golang',
  'csharp',
  'elixir',
  'typescript',
  'css',
];

const themes = [
  'monokai',
  'github',
  'tomorrow',
  'kuroir',
  'twilight',
  'xcode',
  'textmate',
  'solarized_dark',
  'solarized_light',
  'terminal',
];

languages.forEach((lang) => {
  require(`brace/mode/${lang}`);
  require(`brace/snippets/${lang}`);
});

themes.forEach((theme) => {
  require(`brace/theme/${theme}`);
});


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

  onLoad() {
    console.log('i\'ve loaded');
  }
  onChange(newValue) {
    console.log('change', newValue);
    this.setState({
      value: newValue,
    });
  }

  onSelectionChange(newValue, event) {
    console.log('select-change', newValue);
    console.log('select-change-event', event);
  }

  onCursorChange(newValue, event) {
    console.log('cursor-change', newValue);
    console.log('cursor-change-event', event);
  }

  onValidate(annotations) {
    console.log('onValidate', annotations);
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
              value={this.state.value}
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
        <div style={{ padding: '10px', background: '#2f3129', display: 'flex', justifyContent: 'flex-end' }}>
          <Button style={{ marginRight: '20px' }}>保存</Button>
          <Button style={{ marginRight: '10px' }}>运行</Button>
        </div>
      </div>
    );
  }
}

