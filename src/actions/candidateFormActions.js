import { SAVE_CANDIDATE_DATA } from '../types/candidateFormTypes';

export const saveCandidateData = (candidateInfo) => (dispatch) => {
  dispatch({
    type: SAVE_CANDIDATE_DATA,
    payload: candidateInfo,
  });
};
