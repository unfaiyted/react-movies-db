import React, { Component } from 'react';
import Icon from "../../media/Icon";
import Button from "../Button";

export default class ButtonsTest extends Component {

  render() {

    return (
      <div className='sub-container'>
        <h1>Buttons</h1>


        <div className={'container'}>
          <h2>Buttons</h2>
          <button className='btn'>Play</button>
          <button className='btn'>My List</button>
          <button className='btn red'>Resume</button>
          <button className='btn hollow'>More</button>

            <div className='row'>
            <Button type='square-rounded' text='Play'/>
              <Button type='square-rounded' color='red' text='Resume'/>
            </div>

        </div>


        <div className={'container'}>
          <h2>Big Buttons</h2>
            <button className='big btn'>Play</button>
            <button  className='big btn'>My List</button>
            <button className='big btn'>Next Episode</button>
            <button  className='big btn'>More</button>

          <div className='row'>
            <button className='big btn'><Icon name='play'/><span>Play</span></button>
            <button  className='big btn'><Icon name='plus'/><span>My List</span></button>
          </div>

        </div>

        <div className={'container'}>
          <h2>Round Icon Buttons</h2>
            <button className='round btn'><Icon name='play'/></button>
            <button className='round btn'><Icon name='thumbs-up'/></button>
            <button className='round btn'><Icon name='thumbs-down'/></button>
            <button className='round btn'><Icon name='volume-mute'/></button>
            <button className='round btn'><Icon name='volume-up'/></button>
            <button className='round btn'><Icon name='plus'/></button>

        </div>

        <div className={'container'}>
          <h2>Round Icon Large Buttons</h2>
           <button  className='round big btn'><Icon type='play'/></button>
        </div>

      </div>
    )
  }
}
