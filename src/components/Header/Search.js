import React, { Component } from 'react';
import Icon from "../../media/Icon";


export default class Search extends Component {
  constructor(props) {
    super(props);

    this.input =  React.createRef();

    this.state = {
      expanded: false,
    }
  }

  componentDidMount() {
    this.input.current.addEventListener("focusout",() => {
      this.setState({
        expanded: false,
      });
    })
  }

  handleExpand = () => {
    this.setState({
      expanded: true,
    })
  };

  render() {

    const {expanded} = this.state;

    const expandedClass = (expanded) ? 'expanded' : null;


    return (
      <div className='header-search'>
        <label htmlFor='search' onClick={this.handleExpand}
               className={['search-label',expandedClass].join(' ')}
        >
          <Icon color='#fff' name='search' styles={{width: '18px', height: '18px'}}/>
        </label>
        <input type='text' id='search' ref={this.input} className={['search-input',expandedClass].join(' ')}
        placeholder='Title, people, genres'/>

      </div>
    )
  }
}
