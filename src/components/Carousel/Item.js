import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

import './Item.scss'

export default class Item extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.selected
    }

    this.carouselItem = React.createRef();

  }

  componentWillReceiveProps(props) {
    if(props.selected !== this.props.selected) {
        this.setState({
          selected: props.selected
        })
    }
  }

  toggleSelect = () => {
    this.setState({
      selected:!this.state.selected,
    });


    if(!this.state.selected) {
      this.props.handleSelected(this.props.item.id);
      scrollToComponent(this, {offset: -100, align: 'top', duration: 600, ease: 'inExpo'});
    }

    if(this.state.selected)
      this.props.handleSelected(null);
  };

  render() {

    const {
      id, title, poster_path, release_date, vote_average,
      overview, backdrop_path, adult
    } = this.props.item;

    const styles = {
      backgroundImage: `url("https://image.tmdb.org/t/p/w500/${backdrop_path}")`,
      backgroundSize: 'cover',
    };

    const selected = (this.state.selected) ?  'selected' : ' ';
    const position = (this.props.isLastOnPage) ? 'last' : ' ';

    return (
      <div className={['carousel-item', selected, position].join(' ')} style={styles} ref={this.carouselItem}>
          <div className='text'>
              <span className='rating'>{vote_average} / 10</span>
              <span className='title'>{title}</span>
              <span className='overview'>{overview.substring(0, 100)}</span>
          </div>
          <span className='expandButton' onClick={this.toggleSelect} />
      </div>
    )
  }
}
