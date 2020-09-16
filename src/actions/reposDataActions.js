import fetchData from '../API/fetchData';
import {
  SET_REPOSITORIES_DATA,
  FILTER_REPOSITORIES,
  SET_IMMUTABLE,
} from '../types/reposDataTypes';

export const setRepositoriesData = () => async (dispatch, getState) => {
  const { candidateData } = getState().candidateFormReducer;
  try {
    const reposRawData = await fetchData(
      `https://api.github.com/users/${candidateData.github}/repos`
    );
    let normalizedRepos = reposRawData.map((item) => ({
      lenguaje: item.language,
      branch: item.default_branch,
      url: item.url,
      name: item.name,
      description: item.description,
    }));

    if (normalizedRepos.length >= 2) {
      let immutable = JSON.parse(JSON.stringify(normalizedRepos));
      dispatch({
        type: SET_IMMUTABLE,
        payload: immutable,
      });
    }

    dispatch({
      type: SET_REPOSITORIES_DATA,
      payload: normalizedRepos,
    });
  } catch (error) {
    console.error(error);
  }
};

export const filterRepositories = (filteredRepos) => (dispatch) => {
  dispatch({
    type: FILTER_REPOSITORIES,
    payload: filteredRepos,
  });
};
