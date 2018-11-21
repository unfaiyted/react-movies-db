import React, { Component } from 'react';
import './Banner.scss';
import Icon from "../media/Icon";
import {shortenText} from "../util/helpers";

export default class Banner extends Component {

  render() {

    const {
      id, title, poster_path, release_date, vote_average,
      overview, backdrop_path, adult
    } = this.props.item;


    const styles = {
      backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${backdrop_path}")`,
      backgroundSize: 'cover',
    };

    return (
      <div className='banner' style={styles}>
        <div className='banner-wrapper'>
          <div className='banner-header'>
            <h1>{title}</h1>
          </div>
          <div className='buttons'>
            <button> <Icon name='play'/> <span>Play</span></button>
            <button> <Icon name='plus'/> <span>My List</span></button>
          </div>

          <div className='info'>
            <span className='watch'>Watch Season 1 Now</span>
            <p>
              {shortenText(overview)}
            </p>

            <div className='rating'>
              <span>TV-MA</span>
            </div>

        </div>
        </div>
      </div>
    )
  }
}
