import { getClasses, getAssignments } from '../APIs';
import axios from 'axios';

const host = 'http://localhost:8181';

export function fetchClasses() {
  const promise = axios.get(`${host}/api/classes`);
  return {
    type: ActionTypes.GET_CLASSES,
    payload: promise
  }
}

export function fetchAssignments() {
  const promise = axios.get(`${host}/api/assignments`);
  return {
    type: ActionTypes.GET_ASSIGNMENTS,
    payload: promise
  }
}


let ActionTypes = {
  GET_ASSIGNMENTS: 'GET_ASSIGNMENTS',
  GET_CLASSES: 'GET_CLASSES'
}

export default ActionTypes;
