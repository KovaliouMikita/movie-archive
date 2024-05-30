import "@mantine/core/styles.css";
import "./App.css";

import { Api_k, Url, UrlGenres } from "./assets/key";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { Genre, Movie } from "./Component/Interfaces";
//import { Group, Loader } from "@mantine/core";

import Rate from "./Component/Rate";
import SideBar from "./Component/SideBar";
import BigMovieCard from "./Component/BigMovieCard";
import Movies from "./Component/Movies";
// import Component

export default function App() {
  const [section, setSection] = useState("Movies");
  const [dataMovies, setDataMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [idMovie, setIdMovie] = useState(0);
  const [sortMovies, setSortMovies] = useState("popularity.desc");
  const [sortByReleaseDate, setSortByReleaseDate] = useState("");
  const [sortByGenres, setSortByGenres] = useState("");
  const [sortByRatingFrom, setSortByRatingFrom] = useState("");
  const [sortByRatingTo, setSortByRatingTo] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);

  function dataFetch(
    page: number,
    sortMovies: string,
    sortByReleaseDate: string,
    sortByRatingFrom: string,
    sortByRatingTo: string,
    sortByGenres: string
  ) {
    fetch(`${Url}discover/movie${Api_k}&page=${page}&sort_by=${sortMovies}${sortByReleaseDate}${sortByRatingFrom}${sortByRatingTo}${sortByGenres}`)
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
    (page: number, sortMovies: string, sortByReleaseDate: string, sortByRatingFrom: string, sortByRatingTo: string, sortByGenres: string) => {
      dataFetch(page, sortMovies, sortByReleaseDate, sortByRatingFrom, sortByRatingTo, sortByGenres);
      genresFetch().then((res) => setGenres(res));
    },
    []
  );
  useEffect(() => {
    getAllFetch(page, sortMovies, sortByReleaseDate, sortByRatingFrom, sortByRatingTo, sortByGenres);
  }, [page, sortMovies, sortByReleaseDate, sortByRatingFrom, sortByRatingTo, sortByGenres, getAllFetch]);
  console.log(dataMovies);
  return (
    <div className="App">
      <SideBar Change={(current: string) => setSection(current)}></SideBar>
      {section === "Movies" && (
        <>
          <Movies
            page={page}
            setPage={setPage}
            setSection={setSection}
            setSortMovies={setSortMovies}
            setSortByRatingFrom={setSortByRatingFrom}
            setSortByRatingTo={setSortByRatingTo}
            setSortByReleaseDate={setSortByReleaseDate}
            setSortByGenres={setSortByGenres}
            dataMovies={dataMovies}
            genres={genres}
            setIdMovie={setIdMovie}
          ></Movies>
        </>
      )}
      {section === "Rate" && <Rate></Rate>}
      {section === "BigMovieCard" && <BigMovieCard idMovie={idMovie} setSection={setSection} />}
      {/* <div className="LoaderWait">
        <Group justify="center" align="center">
          <Loader size={70} />{" "}
        </Group>
      </div> */}
    </div>
  );
}
