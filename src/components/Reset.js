import React from 'react';
import PropTypes from 'prop-types';

const Reset = ({ handleClick }) => {
  return (
    <button onClick={() => handleClick('RESET')}>Reset Game</button>
  );
};

Reset.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Reset;
