import React, { Component } from 'react';
import './CarouselItem.scss'
export default class CarouselItem extends Component {

  render() {

    const {
      id, title, poster_path, release_date,
      vote_average, overview,

      backdrop_path, adult
    } = this.props.item;


    const styles = {
      backgroundImage: `url("https://image.tmdb.org/t/p/w500/${backdrop_path}")`,
      backgroundSize: 'cover',
    }

    return (
      <div className='carousel-item' style={styles}>
        <div className='text'>
          <span className='rating'>{vote_average} / 10</span>
          <span className='title'>{title}</span>
          <span className='overview'>{overview.substring(0, 100)}</span>
        </div>
        <span className='expandButton' />
        </div>
    )
  }
}
