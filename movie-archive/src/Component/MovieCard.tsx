import Button from "./Button";
import { dataProp } from "../App";
import { genresData } from "../assets/key";

interface MovieCardProps {
  dataMovie: dataProp;
  setSection: (_arg0: string) => void;
  setIdMovie: Function;
  genres: object;
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
            <Button>*</Button>
            <p>{dataMovie.vote_average}</p>{" "}
            <p className="Grey16">({dataMovie.vote_count})</p>
          </div>
          <div className="MovieCard_Genres">
            <p className="Grey16">Genres</p>
            {dataMovie?.genre_ids.map((i: number) => (
              <p key={i}>{genresData[i]}</p>
            ))}
          </div>
        </div>
        <Button>*</Button>
      </div>
    </>
  );
}
