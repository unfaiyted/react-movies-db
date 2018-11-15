import React, { Component } from 'react';
import './CarouselInfo.scss'

export default class CarouselInfo extends Component {

  render() {

    const {
      id, title, poster_path, release_date, vote_average,
      overview, backdrop_path, adult
    } = this.props.item;

    const styles = {
      backgroundImage: `url("https://image.tmdb.org/t/p/w500/${backdrop_path}")`,
      backgroundSize: '70% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right'
    };


    return (
      <div className='carousel-item-info' style={styles}>
        <div className='content-wrapper'>
          <div className='content'>
            <h3>{title}</h3>

            <div className='stats'>
              <span className='vote'> {vote_average} / 10</span>
              <span className='release'> {release_date.substring(0,4)}  </span>
              <span className='rating'> TV-G  </span>
              <span className='seasons'> 2 seasons </span>
            </div>

            <p className='overview'>
              {overview.substring(0,200)}...
            </p>

            <div className='actions'>
              <button className='play'>Play</button>
              <button className='list'>+ My List</button>
            </div>

          </div>
        </div>




      </div>
    )
  }
}
