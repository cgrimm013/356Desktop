import axios from 'axios';

const host = 'http://18.191.233.160:8181';

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

export function deleteClass(id) {
  const promise = axios.delete(`${host}/api/classes/${id}`);
  return {
    type: ActionTypes.DELETE_CLASS,
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

export function deleteAssignment(id) {
  const promise = axios.delete(`${host}/api/assignments/${id}`);
  return {
    type: ActionTypes.DELETE_ASSIGNMENT,
    payload: promise
  }
}


let ActionTypes = {
  GET_ASSIGNMENTS: 'GET_ASSIGNMENTS',
  GET_CLASSES: 'GET_CLASSES',
  CREATE_CLASS: 'CREATE_CLASS',
  CREATE_ASSIGNMENT: 'CREATE_ASSIGNMENT',
  DELETE_ASSIGNMENT: 'DELETE_ASSIGNMENT',
  DELETE_CLASS: 'DELETE_CLASS'
}

export default ActionTypes;
