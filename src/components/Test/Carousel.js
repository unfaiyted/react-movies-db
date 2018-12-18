import React, { Component } from 'react';
import Carousel from "../Carousel/Carousel";
import connect from "react-redux/es/connect/connect";
import {handleInitialData} from "../../actions/shared";



class CarouselTest extends Component {

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { lists, movies } = this.props;
    const first = lists[0];

    return (
      <div className='sub-container'>
        { (first) ? <Carousel list={first} /> : 'Loading data...'}
      </div>
    )

  }

}


function mapStateToProps({movies, lists}) {
  return {
    movies,
    lists
  }
}

export default connect(mapStateToProps)(CarouselTest);

