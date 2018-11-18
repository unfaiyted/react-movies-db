import React, { Component } from 'react';
import PropTypes from 'prop-types'
import connect from "react-redux/es/connect/connect";
import '../util/helpers';
import './Carousel.scss';

import CarouselItem from "../components/Carousel/CarouselItem";
import CarouselInfo from "../components/Carousel/CarouselInfo";
import {handleAddMovie} from "../actions/movies";


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

  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      selectedId: null,
      selectedItem: null,
      styles: {
        left: 0,
        transition: "left 0.33s ease-out"
      }
    }
  }


  handlePage = (e) => {

    const { page, styles } = this.state;
    const action = (e.target.classList.contains("left")) ? page-1 : page+1;

    this.setState({
      page: (action > 1) ? action : 1,
      styles: {
        ...styles,
        left: "calc(-"+ ((page-1)*100) + 'vw + '+ (page-1)*100   + 'px)',
      }
    });

  };

  handleSelected = (id) => {

      this.setState({
        selectedId: id,
        selectedItem: this.getItem(id)
      });
  };


  getItem = (id) => {
    const { movies, dispatch } = this.props;
    const matches = Object.keys(movies).filter((movie) => {
      const item = movies[movie];
      if(item.id === id) {
        return  dispatch(handleAddMovie(id)).then(() => true);
      }
    });

    return movies[matches[0]];

  };

  render() {
    const {movies} = this.props;

    const { id, name, mediaIds} = this.props.list;
    const {styles, selectedId, selectedItem, style} = this.state;

    return (
      <div key={id} className='carousel-container' style={{ height: (selectedId) ? 'calc(17.92vw  + 60vh)' : null }}>
        <h2>{name}</h2>
        <button className={'left'} onClick={this.handlePage}>&lt;</button>
        {/*{ (this.state.page > 1) ? <button className={'left'} onClick={this.handlePage}>&lt;</button> : null }*/}
        <div className='carousel' style={styles}>
        {
          Object.keys(movies).map((movie, i) => {
            const item = movies[movie];
            return (
              <CarouselItem key={i}
                            item={item}
                            selected={(selectedId === item.id)}
                            handleSelected={this.handleSelected}/>
            )
          })
        }
        </div>
        {(selectedId) ? <CarouselInfo item={selectedItem}/> : null}
        <button className={'right'} onClick={this.handlePage}>&gt;</button>
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
