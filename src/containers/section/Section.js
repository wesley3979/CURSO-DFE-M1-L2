import React, { Component } from 'react';
import './Section.css';

class Section extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className, children } = this.props;

    return (
      <div className={className}>
        <span>{children}</span>
      </div>
    );
  }
}

export default Section;