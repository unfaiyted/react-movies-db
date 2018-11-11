import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Carousel extends Component {
  static propTypes = {
    list: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      mediaIds: PropTypes.arrayOf(PropTypes.number)
    })
  };

  static defaultProps = {

  };

  render() {
    const { id, name, mediaIds} = this.props.list;

    return (
      <div key={id}>
        <h2>{name}</h2>

        {mediaIds.map(number => {
          return (
            <span>{number}, </span>
          );
          }
        )}
    </div>)
  }
}
