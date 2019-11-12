import React from 'react';
import PropTypes from 'prop-types';

const Start = ({ handleClick }) => {
  return (
    <div>
      <button onClick={() => handleClick('START')}>Start!</button>
    </div>
  );
};

Start.propTypes = {
  handleClick: PropTypes.func
};

export default Start;
