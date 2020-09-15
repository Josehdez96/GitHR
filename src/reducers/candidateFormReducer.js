import { SAVE_CANDIDATE_DATA } from '../types/candidateFormTypes';

const INITIAL_STATE = {
  candidateData: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_CANDIDATE_DATA:
      return { ...state, candidateData: action.payload };

    default:
      return state;
  }
};
