import "./App.css";
import Rate from "./Component/Rate";
import Movie from "./Component/Movie";
import SideBar from "./Component/SideBar";
import { Url } from "./assets/key";

import { useEffect, useState } from "react";
import BigMovieCard from "./Component/BigMovieCard";

export interface dataProp {
  poster_path?: string;
  title: string;
  id: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
}
function App() {
  const [section, setSection] = useState("Movie");
  const [dataMovie, setDataMovie] = useState<dataProp[]>([]);
  const [page, setPage] = useState("1");
  // const [id, setId] = useState<number>();

  function dataFetch(page: string) {
    fetch(Url + `&page=${page}`)
      .then((res) => res.json())
      .then((data) => setDataMovie(data.results));
  }
  useEffect(() => {
    dataFetch(page);
    console.log(`page` + page);
  }, [page]);

  return (
    <div className="App">
      <SideBar Change={(current: string) => setSection(current)}></SideBar>
      {section === "Movie" && (
        <>
          <Movie
            get={dataFetch}
            setPage={setPage}
            page={page}
            setSection={setSection}
            data={dataMovie}
          ></Movie>
        </>
      )}
      {section === "Rate" && <Rate></Rate>}
      {section === "BigMovieCard" && <BigMovieCard />}
    </div>
  );
}

export default App;
