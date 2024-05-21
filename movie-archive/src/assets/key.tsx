export const Api_k = "a3247e1d159fd499550d53f6ec5ef6d7";
export const Url = `https://api.themoviedb.org/3/movie/popular?api_key=a3247e1d159fd499550d53f6ec5ef6d7`;
export const Url1 =
  "https://api.themoviedb.org/3/discover/movie?api_key=a3247e1d159fd499550d53f6ec5ef6d7&page=2";

//export async function getPage(page: string) {
///////////////////////////////////////////////fetch(Url1 + page).then(res=> res.json).then(data =>data.results)
//async function dataFetch(): Promise<any> {
//let response: any = await fetch(Url1 + page);
//let data: any = await response.json();
//return data;

export const genres = {
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
