import React, { Component } from 'react';
import LoadingBar from 'react-redux-loading';
import {connect} from 'react-redux';
import{handleInitialData} from "../actions/shared";

import './App.css';
import Carousel from "./Carousel/Carousel";
import Header from "./Header/Header";
import MenuBar from "./Header/MenuBar";
import Logo from "./Header/Logo";
import UserBar from "./Header/UserBar";
import Footer from "../containers/Footer";
import Banner from "../containers/Banner";
import {randomInt} from "../util/helpers";

class App extends Component {

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { lists, movies } = this.props;
    const first = lists[0];

    return (
      <div className="App">
        <LoadingBar/>
        <Header>
          <Logo/>
          <MenuBar/>
          <UserBar/>
        </Header>

        { (first) ? <Banner item={movies[randomInt(1,10)]}/> : 'Loading data...'}
        <div className={'container'}>
          { (first) ? <Carousel list={lists[0]} /> : 'Loading data...'}
          { (first) ? <Carousel list={lists[1]} /> : 'Loading data...'}
          { (first) ? <Carousel list={lists[2]} /> : 'Loading data...'}
        </div>
        <Footer/>
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
