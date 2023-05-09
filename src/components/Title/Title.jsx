import PropTypes from "prop-types";

import "./title.css";

const Title = ({ title }) => {
  return <h5 className="title">{title}</h5>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
