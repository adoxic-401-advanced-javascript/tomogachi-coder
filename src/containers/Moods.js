import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { incAction } from '../actions/careActions';

import { getCoffee, getNaps, getSnacks, getStudies, getFace } from '../selectors/moodSelectors';
import { getStart, getTimeLeft } from '../selectors/timeSelectors';

import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import actions from '../services/actions';
import Start from '../components/Start';
import Reset from '../components/Reset';

const Moods = ({ coffee, naps, snacks, studies, start, timeLeft, face, handleAction }) => {  
  const stateArr = [];
  stateArr.push(coffee, snacks, naps, studies);
  
  actions.forEach((action, i) => {
    return action['count'] = stateArr[i];
  }
  );

  
  if(start) {
    return <Start handleClick={handleAction} />;
  } 


  useEffect(() => {
    if(timeLeft >= 0){
      setTimeout(() => {
        handleAction('DEC_TIME');  

      }, 1000);

      if(timeLeft <= 0) {
        handleAction('RESET'); 
      }
      
    }
    
  }, [start, timeLeft]);

  return (
    <>
      <Controls actions={actions} handleSelection={handleAction}/>
      <Face emoji={face} />
      <Reset handleClick={handleAction} />
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    handleAction(type) {
      dispatch(incAction(type));
    }
  };
};

const mapStateToProps = state => {
  return {
    coffee: getCoffee(state),
    naps: getNaps(state),
    snacks: getSnacks(state),
    studies: getStudies(state),
    start: getStart(state),
    timeLeft: getTimeLeft(state),
    face: getFace(state)
  };
};

Moods.propTypes = {
  face: PropTypes.string.isRequired,
  coffee: PropTypes.number.isRequired,
  naps: PropTypes.number.isRequired,
  snacks: PropTypes.number.isRequired,
  studies: PropTypes.number.isRequired,
  start: PropTypes.bool.isRequired,
  timeLeft: PropTypes.number.isRequired,
  handleAction: PropTypes.func.isRequired
};

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

export default MoodsContainer;
