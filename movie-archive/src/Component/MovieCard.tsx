import Button from "./Button";
import { dataProp } from "../App";
import { genres } from "../assets/key";

interface MovieCardProps {
  dataMovie: dataProp;
  setSection: (_arg0: string) => void;
}

export default function MovieCard({ dataMovie, setSection }: MovieCardProps) {
  return (
    <>
      <div className="MovieCard">
        <img
          src={`https://image.tmdb.org/t/p/w500${dataMovie.poster_path}`}
          alt="not IMG"
        />
        <div className="CardRow">
          <p className="TitleName" onClick={() => setSection("BigMovieCard")}>
            {dataMovie.title}
          </p>
          <p className="Grey16">{dataMovie.release_date.slice(0, 4)}</p>
          <div style={{ display: "flex", gap: "8px" }}>
            <Button>*</Button>
            <p>{dataMovie.vote_average}</p>{" "}
            <p className="Grey16">({dataMovie.vote_count})</p>
          </div>
          <div style={{ display: "flex", gap: "2px" }}>
            {dataMovie.genre_ids.map((i): string => (
              <p key={i}>{genres[i]}</p>
            ))}
          </div>
        </div>
        <Button>*</Button>
      </div>
    </>
  );
}
