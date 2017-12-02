import React, { PureComponent } from 'react';
import courses from '../assets/courses.svg';
import communication from '../assets/communication.svg';
import guidance from '../assets/guidance.svg';

const imgs = {
  courses,
  communication,
  guidance,
};

export default class ColumnItem extends PureComponent {
  render() {
    const { code, title, description } = this.props;
    return (
      <div className="col">
        <div className="container">
          <img className="m-4" src={imgs[code]} alt="" width="64px" height="64px" />
          <h5>{title}</h5>
          <p style={{ marginTop: '8px', textAlign: 'left', fontSize: '12px' }}>{description}</p>
        </div>
      </div>
    );
  }
}
