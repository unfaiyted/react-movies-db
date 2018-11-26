import React, { Component } from 'react';
import "./Test.scss"
import ButtonsTest from "./Buttons";
import TypographyTest from "./Typography";
import ColorsTest from "./Colors";

import styles from './Test.scss';


const comps = [
  'buttons','typography','colors'
]

export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 'buttons'
    }
  }


  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      current: e.target.innerText,
    })
  }



  render() {

    const {current} = this.state;

    return (
      <div className='test-container'>
        Test Components.


        <div className='test-header'>
          {
          comps.map((c, i) => (
            <div key={i}>
              <a href='#'
                 onClick={this.handleClick}
              >{c}</a>
            </div>
          ))
          }
        </div>


        {(current === 'buttons') ? <ButtonsTest/> : null}
        {(current === 'typography') ? <TypographyTest/> : null}
        {(current === 'colors') ? <ColorsTest/> : null}
      </div>
    )
  }
}
