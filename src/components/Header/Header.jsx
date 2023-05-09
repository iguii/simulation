import PropTypes from "prop-types";

import "./header.css";

const Header = ({ title }) => {
  return <h2 className="header">{title}</h2>;
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
