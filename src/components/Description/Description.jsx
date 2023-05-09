import PropTypes from "prop-types";

import "./description.css";

const Description = ({ text }) => {
  return (
    <div>
      <p className="description">
        <span className="--bold">Problema: </span>
        {text}
      </p>
    </div>
  );
};

Description.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Description;
