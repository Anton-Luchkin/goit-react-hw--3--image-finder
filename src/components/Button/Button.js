import React from 'react';
import PropTypes from 'prop-types';

import s from './Button.module.css';

const Button = ({ onClick, onScroll }) => (
  <button
    type="button"
    onClick={onClick}
    onScroll={onScroll}
    className={s.Button}
  >
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
