import React, { Component } from 'react';
import LoadingBar from 'react-redux-loading';
import {connect} from 'react-redux';
import{handleInitialData} from "../actions/shared";

import './App.css';
import Carousel from "../containers/Carousel";

class App extends Component {

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { lists } = this.props;
    console.log(lists[0]);

    const first = lists[0];

    return (
      <div className="App">
        <LoadingBar/>
        <div className={'container'}>
          { (first) ? <Carousel list={first} /> : 'Loading data...'}
          { (first) ? <Carousel list={lists[1]} /> : 'Loading data...'}
          { (first) ? <Carousel list={lists[2]} /> : 'Loading data...'}
        </div>
      </div>
    );
  }
}

function mapStateToProps({movies, lists}) {
  return {
    movies,
    lists
  }
}

export default connect(mapStateToProps)(App);
