import React, { Component } from 'react';
import "./Test.scss"
import ButtonsTest from "./Buttons";
export default class Test extends Component {

  render() {

    return (
      <div className='test-container'>
        Test Components.

        <ButtonsTest/>
      </div>
    )
  }
}
