import React, { Component } from "react";
import propTypes from "prop-types";

export class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder",
    icons: "fab fa-github",
  };

  static propTypes = {
    title: propTypes.string.isRequired,
    icons: propTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icons}></i>
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
