export const ADD_DATA = 'ADD_DATA';
export const ADD_ESPN_DATA = 'ADD_ESPN_DATA';

export function addData(data) {
  return { type: ADD_DATA, payload: data };
}

export function addEspnData(data) {
  return { type: ADD_ESPN_DATA, payload: data };
}