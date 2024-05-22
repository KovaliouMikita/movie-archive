import Button from "./Button";
import { dataProp } from "../App";
import { genres } from "../assets/key";

interface MovieCardProps {
  dataMovie: dataProp;
  setSection: (_arg0: string) => void;
  setIdMovie: Function;
  genresi: object;
}

export default function MovieCard({
  dataMovie,
  setSection,
  //genresi,
  setIdMovie,
}: MovieCardProps) {
  return (
    <>
      <div className="MovieCard">
        <img
          src={`https://image.tmdb.org/t/p/w500${dataMovie.poster_path}`}
          alt="not IMG"
        />
        <div className="CardRow">
          <p
            className="TitleName"
            onClick={() => {
              setSection("BigMovieCard");
              setIdMovie(dataMovie.id);
            }}
          >
            {dataMovie.title}
          </p>

          <p className="Grey16">{dataMovie.release_date.slice(0, 4)}</p>
          <div className="RateBlock">
            <Button>*</Button>
            <p>{dataMovie.vote_average}</p>{" "}
            <p className="Grey16">({dataMovie.vote_count})</p>
          </div>
          <div className="MovieCard_Genres">
            <p className="Grey16">Genres</p>
            {dataMovie?.genre_ids.map((i: number) => (
              <p key={i}>{genres[i]}</p>
            ))}
          </div>
        </div>
        <Button>*</Button>
      </div>
    </>
  );
}
