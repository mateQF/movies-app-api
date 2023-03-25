import { getMovies } from "./getMovies.js";

const container = document.getElementById("container");

const data = await getMovies();
console.log(data);
data.results.forEach((movie) => {
  const div = document.createElement("div");
  div.className = "movie";
  if(movie.adult === false){
    div.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
      <h1 class="info">${movie.title}</h1>
      <h2 class="info">Release date: ${movie.release_date}</h2>
    `;
  }else {
    div.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
      <h1 class="info">${movie.title} <p class="adult">+18</p></h1>
      <h2 class="info">Release date: ${movie.release_date}</h2>
    `;
  }
  container.appendChild(div);
});
