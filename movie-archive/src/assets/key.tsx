export const Api_k = "?api_key=a3247e1d159fd499550d53f6ec5ef6d7";
export const Url = `https://api.themoviedb.org/3/movie/popular?api_key=a3247e1d159fd499550d53f6ec5ef6d7`;
export const UrlIdMovie = `https://api.themoviedb.org/3/movie/`;
export const UrlGenres =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=a3247e1d159fd499550d53f6ec5ef6d7";

export const appendMovie = "&append_to_response=videos";

// Url  SEARCH  ==>  https://api.themoviedb.org/3/search/movie
// URL DETAILS MOVIE ID ===> https://api.themoviedb.org/3/movie/
export const genresData: Record<string, string> = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};
const vidio =
  "https://api.themoviedb.org/3/movie/157336/videos?api_key=a3247e1d159fd499550d53f6ec5ef6d7";
export async function test() {
  const response = await fetch(vidio);
  const data = await response.json();
  console.log(data);
  return data;
}
