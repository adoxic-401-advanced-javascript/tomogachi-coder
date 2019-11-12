import React from 'react';
import PropTypes from 'prop-types';

const Timer = ({ time }) => {
  return (
    <p>{time}</p>
  );
};

Timer.propTypes = {
  time: PropTypes.number
};

export default Timer;
