import React, { Component } from 'react';
import Search from "./Search";
import './UserBar.scss';

export default class UserBar extends Component {

  render() {
    return (
      <div className='user-bar'>
        <Search/>

      </div>
    )
  }
}
