export const getMovies = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}` /* &page=${page}*/
    );
    
    if (res.status === 200) {
      console.log("Status: " + res.status);
      const data = await res.json();
      return data
    } else if (res.status === 401) {
      console.error("Invalid API key");
    } else if (res.status === 404) {
      console.error("The movie was not found");
    } else {
      console.error("Internal server error");
    }
  } catch (err) {
    console.error(err);
  }
};
