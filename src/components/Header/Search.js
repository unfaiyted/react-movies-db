import React, { Component } from 'react';
import Icon from "../../media/Icon";


export default class Search extends Component {

  render() {
    return (
      <div className='header-search'>
        <label> <Icon color='#fff' name='search'/> </label>
        <input type='text' />
      </div>
    )
  }
}
