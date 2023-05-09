import PropTypes from "prop-types";

import Title from "../Title/Title";
import Button from "../Button/Button";

import "./grid.css";

const Grid = ({ title, src, onClick, buttonText }) => {
  return (
    <div className="grid">
      <div className="grid__title">
        <Title title={title} />
      </div>
      <img className="grid__image" src={src} alt="imagen" />
      <Button onClick={onClick} text={buttonText} />
    </div>
  );
};

Grid.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Grid;
