import { SET_REPOSITORIES_DATA } from '../types/reposDataTypes';

const INITIAL_STATE = {
  reposData: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_REPOSITORIES_DATA:
      return { ...state, reposData: action.payload };

    default:
      return state;
  }
};
