import axios from "axios";

const theMovieDbInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 1000,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzI0M2Q4NGQwNmNmYTNjZDE3MWUzMjIwNmZjZWI0ZiIsInN1YiI6IjY2MDg4NTNkMjgzZWQ5MDEzMDE4MDgwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pSxPmEStMKtnrjRiJEh2DwU-47qlO_rvZiArZ94r-uM',
    accept: 'application/json',
  }
});

export default theMovieDbInstance;