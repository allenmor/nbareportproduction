export const ADD_DATA = 'ADD_DATA';
export const ADD_ESPN_DATA = 'ADD_ESPN_DATA';
export const ADD_PLAYER = 'ADD_PLAYER';
export const ADD_STATS = 'ADD_STATS';

export function addData(data) {
  return { type: ADD_DATA, payload: data };
}

export function addEspnData(data) {
  return { type: ADD_ESPN_DATA, payload: data };
}

export function addPlayer(player) {
  return { type: ADD_PLAYER, payload: player };
}

export function addStats(stats) {
  return { type: ADD_STATS, payload: stats };
}
