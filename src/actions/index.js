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

export function createClass(name) {
  const promise = axios.post(`${host}/api/classes`, {
    name
  });
  return {
    type: ActionTypes.CREATE_CLASS,
    payload: promise
  }
}


let ActionTypes = {
  GET_ASSIGNMENTS: 'GET_ASSIGNMENTS',
  GET_CLASSES: 'GET_CLASSES',
  CREATE_CLASS: 'CREATE_CLASS'
}

export default ActionTypes;
