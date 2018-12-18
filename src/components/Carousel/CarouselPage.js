import React, { Component } from 'react';
import './CarouselPage.scss'
import PropTypes from "prop-types";


// Specific item shown for pages list.
function CarouselPageItem({page, currentPage}) {

  const selected = (currentPage === page) ?  'selected': '';

  return (
    <div key={page} className={['page-item', selected].join(' ')}>
    </div>);

}



/**
 * Displays an indicator of the number of pages and the current page the
 * user is on.
 */
export default class CarouselPage extends Component {
  static propTypes = {
    pageCount: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.state =  {
      currentPage: 1
    }
  }

 static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.currentPage !== prevState.currentPage) {
      return {
        currentPage: nextProps.currentPage
      }
    }
    else return null;
  }

  render() {

    const { pageCount } = this.props;
    const { currentPage } = this.state;
    const pages = [];

    for(let i = 1; i <= pageCount; i++) {
      pages.push(<CarouselPageItem
                    currentPage={currentPage}
                    page={i}
      />)
    }


    return (
      <div className='carousel-page-container'>
        {pages}
      </div>
    )
  }
}
