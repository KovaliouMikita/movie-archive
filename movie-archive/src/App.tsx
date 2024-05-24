import "@mantine/core/styles.css";
import "./App.css";
import Rate from "./Component/Rate";
import Movie from "./Component/Movies";
import SideBar from "./Component/SideBar";
import { Url, UrlGenres } from "./assets/key";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import BigMovieCard from "./Component/BigMovieCard";
// import { Loader } from "@mantine/core";

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
  const [page, setPage] = useState("1");
  const [idMovie, setIdMovie] = useState(0);
  const [genres, setGenres] = useState<object[]>([]);

  function dataFetch(page: string) {
    fetch(Url + `&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setDataMovies(data.results);
        console.log(data);
      });
  }

  async function genresFetch() {
    const response = await fetch(UrlGenres);
    const data = await response.json();
    return data.genres;
  }

  const getAllFentch = useCallback(
    (page: any) => {
      dataFetch(page);
      genresFetch().then((res) => setGenres(res));
    },
    [genres, dataMovies]
  );
  useEffect(() => {
    //dataFetch(page);
    //fetchGenres().then((res) => setGenres(res));
    getAllFentch(page);
  }, [page]);
  console.log(dataMovies);
  return (
    <div className="App">
      <SideBar Change={(current: string) => setSection(current)}></SideBar>
      {section === "Movies" && (
        <>
          <Movie
            get={dataFetch}
            setPage={setPage}
            page={page}
            setSection={setSection}
            dataMovies={dataMovies}
            genres={genres}
            setIdMovie={setIdMovie}
          ></Movie>
        </>
      )}
      {section === "Rate" && <Rate></Rate>}
      {section === "BigMovieCard" && (
        <BigMovieCard idMovie={idMovie} setSection={setSection} />
      )}
      <div className="LoaderWait">{/* <Loader size={70} /> */}</div>
    </div>
  );
}
