import React, { Component } from 'react';
import Icon from "../../media/Icon";
import SearchResults from "../../containers/SearchResults";


export default class Search extends Component {
  constructor(props) {
    super(props);

    this.input =  React.createRef();

    this.state = {
      expanded: false,
      searchValue: null,
      typing: false,
      typingTimeout: 0,
    }
  }

  componentDidMount() {
    this.input.current.addEventListener("focusout",() => {
      if(this.input.current.value === '') {
        this.setState({
          expanded: false,
        });
      }

    })
  }

  handleExpand = () => {
    this.setState({
      expanded: true,
    })
  };

  handleInput = () => {

    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
    }

    this.setState({
      searchValue: this.input.current.value,
      typing: true,
      typingTimeout: setTimeout(() => {
          this.setState({
            typing: false
          })
      }, 2000)
    })
  };

  handleReset = () => {
    this.input.current.value = "";

    this.setState({
      searchValue: null,
      expanded: false,
    })

  }

  render() {

    const {expanded, searchValue, typing} = this.state;

    const expandedClass = (expanded) ? 'expanded' : null;


    return (
      <div className='header-search'>
        <label htmlFor='search' onClick={this.handleExpand}
               className={['search-label',expandedClass].join(' ')}>
              <Icon color='#fff' name='search' styles={{width: '18px', height: '18px'}}/>
        </label>
        <input type='text' id='search' ref={this.input} className={['search-input',expandedClass].join(' ')}
               onChange={this.handleInput}
        placeholder='Title, people, genres'/>


        { (expanded && searchValue !== null) ?

          <Icon color='#fff' name='times'
              className='cancel'
              styles={{width: '18px', height: '18px'}}
              onClick={this.handleReset}
        /> : null }

        {  (expanded && searchValue !== null) ? <SearchResults searchValue={searchValue} isTyping={typing}/> : null}
      </div>
    )
  }
}
