import axios from 'axios';

const fetchData = async (url) => {
  const response = await axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.error(error));
  return response;
};

export default fetchData;
