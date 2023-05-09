import PropTypes from "prop-types";

import "./button.css";

const Button = ({ text, onClick }) => {
  return (
    <div>
      <button className="__button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
