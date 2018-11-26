import React, { Component } from 'react';
import Icon from "../../media/Icon";
import Button from "../Button";

import styles from './Test.scss';


// TODO: Automatically get all "color variables"
const colors = [
  'white','red','green',
  'grey','grey-border','dark',
  'darker','black','hollow',
  'hollow-hover'
];


export default class ColorsTest extends Component {

  render() {

    return (
      <div className='sub-container'>

        { colors.map((color) => (
          <div className='color-container'>
            <div className='color'
                 style={{backgroundColor: styles[color]}}>

            </div>
            <div className='color-text'
                 style={{color: styles[color]}}>
              Aa
            </div>
            <div className='color-var'>
              var: ${color} <span>{styles[color]}</span>
            </div>
          </div>
        ))}

      </div>
    )

  }

}