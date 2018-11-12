import React, { Component } from 'react';
import PropTypes from 'prop-types'
import connect from "react-redux/es/connect/connect";
import '../util/helpers';
import CarouselItem from "../components/Carousel/CarouselItem";
import './Carousel.scss'
class Carousel extends Component {
  static propTypes = {
    list: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      mediaIds: PropTypes.arrayOf(PropTypes.number)
    })
  };

  static defaultProps = {
  };

  render() {
    const { id, name, mediaIds} = this.props.list;
    const {movies} = this.props;

    return (
      <div key={id} className='carousel-container'>
        <h2>{name}</h2>
        <div className='carousel'>
          <button>&lt;</button>
        {
          Object.keys(movies).map((movie, i) => {
            return (
              <CarouselItem key={i} item={movies[movie]}/>
            )
          })
        }
          <button>&gt;</button>
        </div>
    </div>)
  }
}



function mapStateToProps({movies}, props) {
  const ids = props.list.mediaIds; // Gets only movies belong to this list
  return {
    movies: Object.filter(movies, movie => ids.includes(movie.id))
  }
}

export default connect(mapStateToProps)(Carousel);
