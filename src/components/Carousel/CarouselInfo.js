import React, { Component } from 'react';
import './CarouselInfo.scss'
import ItemOverview from "./ItemOverview";
import ItemEpisodes from "./ItemEpisodes";
import ItemSimilar from "./ItemSimilar";
import ItemDetails from "./ItemDetails";


const views = [
  {
    view: 'overview',
    text: 'Overview',

  },
  {
    view: 'episodes',
    text: 'Episodes',
  },
  {
    view: 'similar',
    text: 'More Like This',
  },
  {
    view: 'details',
    text: 'Details',
  }
];


export default class CarouselInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'overview'
    }
  }

  handleSwitchView = (e) => {
      e.preventDefault();

    console.log(e.target.getAttribute('data-id'));

    this.setState({
        view: e.target.getAttribute('data-id')
      });

    };

  render() {
    const {
      id, title, poster_path, release_date, vote_average,
      overview, backdrop_path, adult
    } = this.props.item;

    const { view } = this.state;

    const styles = {
      backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${backdrop_path}")`,
      backgroundSize: '70% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right'
    };


    return (
      <div className='carousel-item-info' style={styles}>
        <div className='content-wrapper'>

            {(view === 'overview') ? <ItemOverview item={this.props.item}/> : null }
            {(view === 'episodes') ? <ItemEpisodes item={this.props.item}/> : null }
            {(view === 'similar') ? <ItemSimilar item={this.props.item}/> : null }
            {(view === 'details') ? <ItemDetails item={this.props.item}/> : null }

          <div className='view'>
            {
              views.map(item => (
                 <a href="#"
                    data-id={item.view}
                    onClick={this.handleSwitchView}
                    className={(item.view === view) ? 'active' : null}>
                   {item.text}
                 </a>
             ))
            }
          </div>

        </div>
      </div>
    )
  }
}
