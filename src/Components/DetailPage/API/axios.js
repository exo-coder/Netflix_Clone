import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
// => instance imported from here as name == axios.
// this is axios base url to + with (Requests).