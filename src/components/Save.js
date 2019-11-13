import React from 'react';
import PropTypes from 'prop-types';

const Save = ({ current, handleClick }) => {
  return (
    <button onClick={() => handleClick(current)}>Save</button>
  );
};

Save.propTypes = {
  current: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Save;
