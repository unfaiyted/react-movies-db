import React, { Component } from 'react';
import './Header.scss';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    }
  }

  componentWillMount() {
    window.addEventListener("scroll", (event) => {
      const top = window.scrollY;

      this.setState({
        scrolled: (top > 100)
      })

    }, false);
  }

  render() {

    const scrolledClass = (this.state.scrolled) ? 'scrolled' : null;

    return (
      <div className={['header', scrolledClass].join(' ')}>{this.props.children}</div>
    )
  }
}
