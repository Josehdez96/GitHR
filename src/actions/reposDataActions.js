import fetchData from '../API/fetchData';
import { SET_REPOSITORIES_DATA } from '../types/reposDataTypes';

export const setRepositoriesData = () => async (dispatch) => {
  try {
    const reposRawData = await fetchData(
      /* USER está quemado, cambiarlo con los props */
      'https://api.github.com/users/Josehdez96/repos'
    );
    let normalizedRepos = reposRawData.map((item) => ({
      lenguaje: item.language,
      branch: item.default_branch,
      url: item.url,
      name: item.name,
      description: item.description,
    }));

    dispatch({
      type: SET_REPOSITORIES_DATA,
      payload: normalizedRepos,
    });
  } catch (error) {
    console.error(error);
  }
};
