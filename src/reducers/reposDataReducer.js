import {
  SET_REPOSITORIES_DATA,
  FILTER_REPOSITORIES,
  SET_IMMUTABLE,
  LOADING,
  ERROR,
} from '../types/reposDataTypes';

const INITIAL_STATE = {
  reposData: [],
  immutableData: [],
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_REPOSITORIES_DATA:
      return { ...state, reposData: action.payload, loading: false, error: '' };

    case LOADING:
      return { ...state, loading: true };

    case ERROR:
      return { ...state, error: action.payload, loading: false };

    case SET_IMMUTABLE:
      return { ...state, immutableData: action.payload };

    case FILTER_REPOSITORIES:
      return { ...state, reposData: action.payload };

    default:
      return state;
  }
};
