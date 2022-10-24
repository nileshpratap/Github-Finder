import React from "react";
import propTypes from "prop-types";

const Navbar = ({ icons, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icons}></i>
        {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icons: "fab fa-github",
};

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  icons: propTypes.string.isRequired,
};

export default Navbar;
