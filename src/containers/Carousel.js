import React, { Component } from 'react';
import PropTypes from 'prop-types'
import connect from "react-redux/es/connect/connect";
import '../util/helpers';
import './Carousel.scss';

import CarouselItem from "../components/Carousel/CarouselItem";
import CarouselInfo from "../components/Carousel/CarouselInfo";


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
      page: 0,
      selectedId: null,
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
      page: (action >= 0) ? action : 0,
      styles: {
        ...styles,
        left: "-"+ (page*100) + 'vw',
      }
    });

  };

  handleSelected = (id) => {
      this.setState({
        selectedId: id,
      });

  };

  render() {
    const {movies} = this.props;
    const { id, name, mediaIds} = this.props.list;

    const {styles, selectedId} = this.state;

    return (
      <div key={id} className='carousel-container'>
        <h2>{name}</h2>
        <button className={'left'} onClick={this.handlePage}>&lt;</button>

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
          {(this.state.selectedId) ? <CarouselInfo/> : null}
        </div>
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
