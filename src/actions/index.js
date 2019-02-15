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

export function createAssignment(day, klass, type, descr) {
  const promise = axios.post(`${host}/api/assignments`, {
    class: klass,
    assignmentDay: day,
    type,
    descr
  });
  return {
    type: ActionTypes.CREATE_ASSIGNMENT,
    payload: promise
  }
}


let ActionTypes = {
  GET_ASSIGNMENTS: 'GET_ASSIGNMENTS',
  GET_CLASSES: 'GET_CLASSES',
  CREATE_CLASS: 'CREATE_CLASS',
  CREATE_ASSIGNMENT: 'CREATE_ASSIGNMENT'
}

export default ActionTypes;
