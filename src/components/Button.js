import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Icon from "../media/Icon";

export default class Button extends Component {
  static propTypes = {
    size : PropTypes.oneOf(['small','big']),
    type : PropTypes.oneOf(['round','square','square-rounded']),
    icon : PropTypes.string,
    text : PropTypes.string,
    color : PropTypes.oneOf(['red','green','hollow','default'])
  };

  static defaultProps = {
    size: 'small',
    type: 'square',
    color: 'default'
  };


  render() {

    const { size, type, text, color, icon } = this.props;

    return (
      <button className={['btn', size, type, color].join(' ')}>

        {(icon) ? <Icon name='play'/> : null }
        {(text) ? <span>{text}</span> : null }

      </button>
    )
  }
}
