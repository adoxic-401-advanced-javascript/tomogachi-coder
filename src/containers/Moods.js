import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { incAction } from '../actions/careActions';
import { saveHistory } from '../actions/saveActions';

import { getCoffee, getNaps, getSnacks, getStudies, getFace, getStart } from '../selectors/moodSelectors';
import { getHistory } from '../selectors/historySelectors';

import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import actions from '../services/actions';
import Start from '../components/Start';
import Reset from '../components/Reset';
import Save from '../components/Save';

const Moods = ({ coffee, naps, snacks, studies, start, face, history, handleAction, handleSave }) => {  
  const stateArr = [];
  stateArr.push(coffee, snacks, naps, studies);
  console.log(history);
  
  actions.forEach((action, i) => {
    return action['count'] = stateArr[i];
  }
  );
  
  if(start) {
    return <Start handleClick={handleAction} />;
  } 

  let current = {
    face: face,
    coffee: `coffee: ${coffee}`,
    naps: `naps: ${naps}`,
    snacks: `snacks: ${snacks}`,
    studies: `studies: ${studies}`,
  };

  return (
    <>
      <Controls actions={actions} handleSelection={handleAction}/>
      <Face emoji={face} />
      <Reset handleClick={handleAction} />
      <Save current={current} handleClick={handleSave} />
      {/* <History history={history} /> */}
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    handleAction(type) {
      dispatch(incAction(type));
    },
    handleSave(save) {
      dispatch(saveHistory(save));
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
    face: getFace(state),
    history: getHistory(state)
  };
};

Moods.propTypes = {
  face: PropTypes.string.isRequired,
  coffee: PropTypes.number.isRequired,
  naps: PropTypes.number.isRequired,
  snacks: PropTypes.number.isRequired,
  studies: PropTypes.number.isRequired,
  start: PropTypes.bool.isRequired,
  history: PropTypes.array,
  handleAction: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired
};

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

export default MoodsContainer;
