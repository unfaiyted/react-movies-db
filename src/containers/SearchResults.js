import React, { Component } from 'react';
import './SearchResults.scss';
import connect from "react-redux/es/connect/connect";
import {handleMovieSearch} from "../actions/search";
import CarouselItem from "../components/Carousel/CarouselItem";

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typing: this.props.typing,
      searchComplete: false,
    }
  }

  componentWillMount() {
      document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflowY = 'auto';
  }

  performSearch = (value) => {
    const { dispatch } = this.props;
    dispatch(handleMovieSearch(value)).then((res) => {
      this.setState({
        searchComplete: true,
      })
    })

  };

  render() {

    const {searchValue, isTyping, search} = this.props;
    const {searchComplete} = this.state;

    if(isTyping)
      this.state.searchComplete = false;

    if (!isTyping && searchComplete === false)
      this.performSearch(searchValue);

    console.log(typeof search.results);

    return (
      <div className='search-results'>
        <h2>Search Results</h2>

          <div className={'results-container'}>
            {(typeof search.results === "object") ? search.results.map((item, i) => (

              <CarouselItem key={i} item={item}/>

              )
            ) : null}
          </div>

        {(searchComplete) ? '' : 'Loading...' }
      </div>
    )
  }
}


function mapStateToProps({search}) {
  console.log(search);
  return {
    search,
  }
}

export default connect(mapStateToProps)(SearchResults);
