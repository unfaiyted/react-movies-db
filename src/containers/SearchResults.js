import React, { Component } from 'react';
import './SearchResults.scss';
import connect from "react-redux/es/connect/connect";
import {handleMovieSearch} from "../actions/search";
import Item from "../components/Carousel/Item";

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typing: this.props.typing,
      searchComplete: false,
    }
  }

  // Hide Body Overflow, removes main scrollbar
  componentWillMount() {
      document.body.style.overflow = 'hidden';
  }

  // Sets normal scrolling functionality
  componentWillUnmount() {
    document.body.style.overflowY = 'auto';
  }

  // Takes search value and returns value
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

    return (
      <div className='search-results'>
        <h2>Search Results</h2>

          <div className={'results-container'}>
            {(typeof search.results === "object") ? search.results.map((item, i) => {

              return (
              <div>
                <Item key={i} item={item}/>
              </div>
                )
              }

            ) : null}
          </div>

        {(searchComplete) ? '' : 'Loading...' }
      </div>
    )
  }
}


function mapStateToProps({search}) {
  return {
    search,
  }
}

export default connect(mapStateToProps)(SearchResults);
