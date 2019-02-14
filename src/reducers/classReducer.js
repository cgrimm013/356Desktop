import ActionTypes from '../actions';

export default function(state = {}, action){
  switch (action.type) {
    case ActionTypes.GET_CLASSES:
      return action.payload.data;
    default:
      return state;
  }
}
