import React, { PureComponent } from 'react';

export default class ClassCard extends PureComponent {
  render() {
    const { name, value } = this.props;
    return (
      <a>{`${name}: ${value}`}</a>
    );
  }
}
