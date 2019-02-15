import ActionTypes from '../actions';

export default function(state = [], action){
  switch (action.type) {
    case ActionTypes.GET_ASSIGNMENTS:
      return action.payload.data;
    case ActionTypes.CREATE_ASSIGNMENT:
      return action.payload.data;
    case ActionTypes.DELETE_ASSIGNMENT:
      return action.payload.data;
    default:
      return state;
  }
}
