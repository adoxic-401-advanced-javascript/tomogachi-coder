import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { incAction } from '../actions/careActions';
import { reset } from '../actions/resetActions';
import { decTime } from '../actions/timeActions';

import { getCoffee, getNaps, getSnacks, getStudies } from '../selectors/moodSelectors';
import { getStart, getTimeLeft } from '../selectors/timeSelectors';

import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import getFace from '../services/moodTranslator';
import actions from '../services/actions';
import Start from '../components/Start';
import Timer from '../components/Timer';

const Moods = ({ state, countThing }) => {  
  const face = getFace(state);

  const controlActions = actions.map(action => ({
    ...action,
    count: state[action.stateName]
  }));

  if(state.start) {
    return <Start handleClick={countThing} />;
  } 

  useEffect(() => {
    if(state.timeLeft >= 0){
      setTimeout(() => {
        countThing('DEC_TIME');  

      }, 1000);

      if(state.timeLeft <= 0) {
        countThing('RESET'); 
      }
      
    }
    
  }, [state.start, state.timeLeft]);

  return (
    <>
      <Controls actions={controlActions} handleSelection={countThing}/>
      <Face emoji={face} />
      <Timer time={state.timeLeft} />
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
    timeLeft: getTimeLeft(state)
  };
};

Moods.propTypes = {
  state: PropTypes.object.isRequired,
  countThing: PropTypes.func.isRequired
};

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

export default MoodsContainer;
