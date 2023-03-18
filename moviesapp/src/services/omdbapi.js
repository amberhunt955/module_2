// fetch data from API
export const getMovie = async (searchTerm) => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=b1f31e8b&t=${searchTerm}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};
