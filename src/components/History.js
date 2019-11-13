import React from 'react';
import PropTypes from 'prop-types';

const History = ({ history }) => {
  const mappedHistory = history.map(past => {
    return (
      <li key={Math.random()}>
        <p>{past.face}</p>
        <p>{past.coffee}</p>
        <p>{past.naps}</p>
        <p>{past.snacks}</p>
        <p>{past.studies}</p>
      </li>
    );
  });
  return (
    <ul>
      {mappedHistory}
    </ul>
  );
};

History.propTypes = {
  history: PropTypes.object

};

export default History;
