import ActionTypes from '../actions';

export default function(state = [], action){
  switch (action.type) {
    case ActionTypes.GET_CLASSES:
      return action.payload.data;
    case ActionTypes.CREATE_CLASS:
      return action.payload.data;
    default:
      return state;
  }
}
