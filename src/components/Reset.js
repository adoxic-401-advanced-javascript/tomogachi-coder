import React from 'react';
import PropTypes from 'prop-types';

const Timer = ({ handleClick }) => {
  return (
    <button onClick={() => handleClick('RESET')}>Reset Game</button>
  );
};

Timer.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Timer;
