import React, { Component } from 'react';
import './App.css';

class Button extends Component {
  render() {
    return (
        <button type="button" class={this.props.class}>{this.props.text}</button>
    );
  }
}

export default Button;
