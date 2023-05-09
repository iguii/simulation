import PropTypes from "prop-types";

import "./input.css";

const Input = ({ message, onChange }) => {
  return (
    <div className="container__input">
      <label htmlFor="input" className="--bold">
        {message}
      </label>
      <input
        type="number"
        placeholder={message}
        onChange={onChange}
        className="__input"
      />
    </div>
  );
};

Input.propTypes = {
  message: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
