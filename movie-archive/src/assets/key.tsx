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

export const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];