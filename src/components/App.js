import React, { Component } from 'react';
import LoadingBar from 'react-redux-loading';
import {connect} from 'react-redux';
import{handleInitialData} from "../actions/shared";

import './App.css';
import Carousel from "../containers/Carousel";
import Header from "../containers/Header";
import MenuBar from "./Header/MenuBar";
import Logo from "./Header/Logo";
import UserBar from "./Header/UserBar";
import Search from "./Header/Search";

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
        <Header>
          <Logo/>
          <MenuBar/>
          <Search/>
          <UserBar/>
        </Header>
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
