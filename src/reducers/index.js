import { combineReducers } from 'redux';
import classReducer from './classReducer';
import assignmentsReducer from './assignmentsReducer';

const rootReducer = combineReducers({
  classes: classReducer,
  assignments: assignmentsReducer
});

export function getDaysAssignments(state, day, className) {
  let assignments = [];
  for(var i = 0; i < state.assignments.length; i++) {
    let currentAssignment = state.assignments[i];
    if(currentAssignment.class === className && currentAssignment.assignmentDay === day) {
      assignments.push(currentAssignment);
    }
  }
  return assignments;
}

export default rootReducer;
