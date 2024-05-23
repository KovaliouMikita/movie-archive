import Button from "./Button";
import { dataProp } from "../App";
//import { genresData } from "../assets/key";
import { IconStar } from "@tabler/icons-react";

interface MovieCardProps {
  dataMovie: dataProp;
  setSection: (_arg0: string) => void;
  setIdMovie: Function;
  genres: object[];
}

export default function MovieCard({
  dataMovie,
  setSection,
  genres,
  setIdMovie,
}: MovieCardProps) {
  return (
    <>
      {genres === genres}
      <div
        onClick={() => {
          setSection("BigMovieCard");
          setIdMovie(dataMovie.id);
        }}
        className="MovieCard"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${dataMovie.poster_path}`}
          alt="not IMG"
        />
        <div className="CardRow">
          <p className="TitleName">{dataMovie.title}</p>

          <p className="Grey16">{dataMovie.release_date.slice(0, 4)}</p>
          <div className="RateBlock">
            <IconStar />
            <p>{dataMovie.vote_average}</p>{" "}
            <p className="Grey16">({dataMovie.vote_count})</p>
          </div>
          <div className="MovieCard_Genres">
            <p className="Grey16">Genres</p>
            {dataMovie?.genre_ids.map((i: number) => (
              <p key={i}>
                {genres.map((el: any) => {
                  return el.id === i ? el.name : "";
                })}
              </p>
            ))}
          </div>
        </div>
        <Button>
          <IconStar />
        </Button>
      </div>
    </>
  );
}
