import React, { Component } from 'react';
import LoadingBar from 'react-redux-loading';
import {connect} from 'react-redux';
import{handleInitialData} from "../actions/shared";

import './App.css';

class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <LoadingBar/>
        <div className={'container'}>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(App);
