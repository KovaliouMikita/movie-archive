import { useEffect, useState } from "react";
import { Api_k, UrlIdMovie } from "../assets/key";
import { dataProp } from "../App";

interface BigMovieCardProps {
  idMovie: number;
  setSection: Function;
}

export default function BigMovieCard({
  idMovie,
  setSection,
}: BigMovieCardProps) {
  const [dataMovie, setDataMovie] = useState<dataProp>();
  console.log(dataMovie);

  function dataFetch(id: number) {
    fetch(UrlIdMovie + id + Api_k)
      .then((res) => res.json())
      .then((data) => setDataMovie(data))
      .then((data) => console.log(data));
  }
  useEffect(() => {
    dataFetch(idMovie);
  }, []);
  return (
    <>
      <div className="BigMovieCard">
        <div className="Header">
          <a onClick={() => setSection("Movies")}>Movie/ </a>{" "}
          <a>{dataMovie?.title}</a>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500${dataMovie?.poster_path}`}
          alt="not IMG"
        />
      </div>
    </>
  );
}
