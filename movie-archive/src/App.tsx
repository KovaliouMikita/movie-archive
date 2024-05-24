import "@mantine/core/styles.css";
import "./App.css";
import Rate from "./Component/Rate";
import SideBar from "./Component/SideBar";
import { Api_k, Url, UrlGenres } from "./assets/key";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import BigMovieCard from "./Component/BigMovieCard";
import Movies from "./Component/Movies";
//import { Group, Loader } from "@mantine/core";

export interface productionCompaniesProps {
  logo_path?: string;
  name?: string;
}
export interface genresProps {
  name?: string;
  id?: number;
}
export interface dataProp {
  poster_path?: string;
  title: string;
  id: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  runtime?: number;
  budget?: number;
  revenue?: number;
  genres?: genresProps[];
  overview: string;
  production_companies: productionCompaniesProps[];
}

export default function App() {
  const [section, setSection] = useState("Movies");
  const [dataMovies, setDataMovies] = useState<dataProp[]>([]);
  const [page, setPage] = useState(1);
  const [idMovie, setIdMovie] = useState(0);
  const [movieList, setMovieList] = useState("popular");
  const [genres, setGenres] = useState<object[]>([]);

  function dataFetch(page: string, movieList: string) {
    // fetch(Url + movieList + Api_k + `&page=${page}`)
    fetch(
      `${import.meta.env.VITE_BASE_URL}${movieList}?api_key=${
        import.meta.env.VITE_TMDB_KEY
      }&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDataMovies(data.results);
      });
  }

  async function genresFetch() {
    const response = await fetch(UrlGenres);
    const data = await response.json();
    return data.genres;
  }

  const getAllFetch = useCallback(
    (page: any, movieList: string) => {
      dataFetch(page, movieList);
      genresFetch().then((res) => setGenres(res));
    },
    [genres, dataMovies]
  );
  useEffect(() => {
    //dataFetch(page);
    //fetchGenres().then((res) => setGenres(res));
    getAllFetch(page, movieList);
  }, [page, movieList]);

  return (
    <div className="App">
      <SideBar Change={(current: string) => setSection(current)}></SideBar>
      {section === "Movies" && (
        <>
          <Movies
            setMovieList={setMovieList}
            setPage={setPage}
            setSection={setSection}
            dataMovies={dataMovies}
            genres={genres}
            setIdMovie={setIdMovie}
          ></Movies>
        </>
      )}
      {section === "Rate" && <Rate></Rate>}
      {section === "BigMovieCard" && (
        <BigMovieCard idMovie={idMovie} setSection={setSection} />
      )}
      {/* <div className="LoaderWait">
        <Group justify="center" align="center">
          <Loader size={70} />{" "}
        </Group>
      </div> */}
    </div>
  );
}
