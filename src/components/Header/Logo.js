import React, { Component } from 'react';
import './Logo.scss';

export default class Logo extends Component {

  render() {

    const styles = {
      color: '#ff1313',
      fontSize: '1.63em',
      textShadow: 'none',
      fontWeight: 'bold'
    }

    return (
      <div style={styles} className='logo'>
        <span>F</span>
        <span>A</span>
        <span>K</span>
        <span>E</span>
        <span>F</span>
        <span>L</span>
        <span>I</span>
        <span>X</span>
      </div>
    )
  }
}
