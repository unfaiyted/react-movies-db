import React, { Component } from 'react';
import './CarouselInfo.scss'
import ItemOverview from "./ItemOverview";

export default class CarouselInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'overview'
    }
  }


  handleSwitchView = (e) => {

      this.setState({
        view: e.target.getAttribute('data-id')
      });

    };

  render() {
    const {
      id, title, poster_path, release_date, vote_average,
      overview, backdrop_path, adult
    } = this.props.item;

    const styles = {
      backgroundImage: `url("https://image.tmdb.org/t/p/w500/${backdrop_path}")`,
      backgroundSize: '70% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right'
    };


    return (
      <div className='carousel-item-info' style={styles}>
        <div className='content-wrapper'>
          <div className='content'>
            <ItemOverview item={this.props.item}/>
          </div>

          <div className='view'>
            <a href="#" data-id="overview" onClick={this.handleSwitchView} className='active'>Overview</a>
            <a href="#" data-id="episodes" onClick={this.handleSwitchView} >Episodes</a>
            <a href="#" data-id="similar"  onClick={this.handleSwitchView} >More Like This</a>
            <a href="#" data-id="details"  onClick={this.handleSwitchView} >Details</a>
          </div>

        </div>




      </div>
    )
  }
}
