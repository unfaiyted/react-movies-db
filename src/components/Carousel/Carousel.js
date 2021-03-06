import React, { Component } from 'react';
import PropTypes from 'prop-types'
import connect from "react-redux/es/connect/connect";
import '../../util/helpers';
import './Carousel.scss';

import CarouselItem from "./Item";
import CarouselInfo from "./CarouselInfo";
import {handleAddMovie} from "../../actions/movies";
import CarouselPage from "./CarouselPage";
import Icon from "../../media/Icon";


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
    const calculate = (e.target.classList.contains("left")) ? page-1 : page+1;
    const action = (calculate > 1) ? calculate : 1;

    // Copy pages content to end.
    // Get Page size

    // Padding Offset
    this.setState({
      page: action,
      styles: {
        ...styles,
        left: "calc(-"+ ((action-1)*100) + 'vw + '+ (action-1)*100   + 'px)',
      }
    });

  };

  // TODO: Add functionality to copy a page to the END. (fluid loop)
  // TODO: Or margins to keep the "Scroll effect fluid"

  handleSelected = (id) => {

      this.setState({
        selectedId: id,
        selectedItem: this.getItem(id)
      });
  };

  handleClose = () => {
    this.setState({
      selectedId: null
    })
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

  calculatePages  = (movies) => {
      const items = Object.keys(movies).length;

      // TODO: Create Dynamic elements per page, update on resize.
      const elementsPerPage = 6;

      return Math.ceil(items/elementsPerPage);
  };

  render() {
    const {movies} = this.props;

    const { id, name, mediaIds} = this.props.list;
    const {styles, selectedId, selectedItem, page} = this.state;

    const totalPages = this.calculatePages(movies);

    return (
      <div key={id} className='carousel-container' style={{ height: (selectedId) ? 'calc(17.92vw  + 60vh)' : null }}>
        <h2>{name}</h2>

        { (this.state.page > 1) ? <button className={'left'} onClick={this.handlePage}><Icon name='angle-left'/></button> : null }

        {/* Displays a indicator of current page and total pages */}
        <CarouselPage pageCount={totalPages} currentPage={page}/>

        <div className='carousel' style={styles}>
        {
          Object.keys(movies).map((movie, i) => {
            const item = movies[movie];
            const isLastOnPage = ((i+1) % 6 === 0);

            return (
              <CarouselItem key={i}
                            item={item}
                            isLastOnPage={isLastOnPage}
                            selected={(selectedId === item.id)}
                            handleSelected={this.handleSelected}/>
            )
          })
        }
        </div>
        {(selectedId) ? <CarouselInfo item={selectedItem} close={this.handleClose}/> : null}

        { (this.state.page < totalPages) ? <button className={'right'} onClick={this.handlePage}><Icon name='angle-right'/></button> : null }


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
