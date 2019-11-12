import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import getFace from '../services/moodTranslator';
import actions from '../services/actions';
import Start from '../components/Start';
import Timer from '../components/Timer';

const mapStateToProps = state => ({
  state: {
    coffee: state.coffee,
    snacks: state.snacks,
    naps: state.naps,
    studies: state.studies,
    start: state.start,
    timeLeft: state.timeLeft
  }
});

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
  
  
  // useEffect(() => {
  //   console.log('in reset', timer);
  //   if(state.timeLeft <= 0) {
  //     countThing('RESET'); 
  //   }
  // }, [state.timeLeft]);

  return (
    <>
      <Controls actions={controlActions} handleSelection={countThing}/>
      <Face emoji={face} />
      <Timer time={state.timeLeft} />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  countThing(name) {
    dispatch({
      type: name
    });
  }

});

Moods.propTypes = {
  state: PropTypes.object.isRequired,
  countThing: PropTypes.func.isRequired
};

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

export default MoodsContainer;
