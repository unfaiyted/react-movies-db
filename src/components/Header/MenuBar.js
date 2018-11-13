import React, { Component } from 'react';
import './MenuBar.scss'
const menu = [
  'Home','TV Shows','Movies','Recently Added','My List'
]


export default class MenuBar extends Component {

  render() {
    return (
      <ul className='menu-bar'>
        {menu.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    )
  }
}
