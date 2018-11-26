import React, { Component } from 'react';
import Icon from "../../media/Icon";
import Button from "../Button";

export default class TypographyTest extends Component {

  render() {

    return (
      <div className='sub-container'>
        <h1>Typography</h1>

        <div className={'container'}>
          <h2>Headings</h2>

          <h1>Level 1 Header</h1>
          <h2>Level 2 Header</h2>
          <h3>Level 3 Header</h3>
          <h4>Level 4 Header</h4>
          <h5>Level 5 Header</h5>
          <h6>Level 6 Header</h6>

        </div>



        <div className={'container'}>
          <h2>TypeFaces</h2>


          <h3>Typeface Name</h3>
          <p>
            a b c d e f g h i j k l m n o p q r s t u v w x y z
          </p>

          <p className='uppercase'>
            a b c d e f g h i j k l m n o p q r s t u v w x y z
          </p>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam
            et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet
          </p>
        </div>

      </div>
      )
      }


        }