import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { callback } = this.props;
    callback(this.props.valueSearch);
  }

  render() {
    const { content } = this.props;
    const buttonClass = 'ButtonSearch';

    return (
      <input onClick={this.handleSubmit} className={buttonClass} type='submit' value={content} />
    );

  }
}

export default Button;