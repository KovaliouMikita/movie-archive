export const Api_k = `?api_key=${import.meta.env.VITE_TMDB_KEY}`;
export const Url = `${import.meta.env.VITE_BASE_URL}movie/`;
export const UrlIdMovie = `${import.meta.env.VITE_BASE_URL}/movie/`;
export const UrlGenres = `${
  import.meta.env.VITE_BASE_URL
}genre/movie/list${Api_k}`;
export const appendMovie = "&append_to_response=videos";
// Url  SEARCH  ==>  `${import.meta.env.VITE_BASE_URL}/search/movie`
