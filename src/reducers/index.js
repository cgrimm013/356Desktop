import { combineReducers } from 'redux';
import classReducer from './classReducer';
import assignmentsReducer from './assignmentsReducer';

const rootReducer = combineReducers({
  classes: classReducer,
  assignments: assignmentsReducer
});

export default rootReducer;
