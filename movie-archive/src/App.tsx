import "./App.css";
import Rate from "./Component/Rate";
import Movie from "./Component/Movies";
import SideBar from "./Component/SideBar";
import { Url } from "./assets/key";

import { useEffect, useState } from "react";
import BigMovieCard from "./Component/BigMovieCard";

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

function App() {
  const [section, setSection] = useState("Movies");
  const [dataMovies, setDataMovies] = useState<dataProp[]>([]);
  const [page, setPage] = useState("1");
  const [idMovie, setIdMovie] = useState(0);

  function dataFetch(page: string) {
    fetch(Url + `&page=${page}`)
      .then((res) => res.json())
      .then((data) => setDataMovies(data.results));
  }
  useEffect(() => {
    dataFetch(page);
  }, [page]);

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
            setIdMovie={setIdMovie}
          ></Movie>
        </>
      )}
      {section === "Rate" && <Rate></Rate>}
      {section === "BigMovieCard" && (
        <BigMovieCard idMovie={idMovie} setSection={setSection} />
      )}
    </div>
  );
}

export default App;
