import { IconStar } from "@tabler/icons-react";
import { ActionIcon, rem } from "@mantine/core";
import { Genre, MovieCardP } from "./Interfaces";
import NoPoster from "./Svg/NoPoster";

export default function MovieCard({ movie, setSection, genres, setIdMovie }: MovieCardP) {
  return (
    <>
      <div className="MovieCard">
        <div
          className="MovieCardImg"
          onClick={() => {
            setSection("BigMovieCard");
            setIdMovie(movie?.id);
          }}
        >
          {movie?.poster_path !== null && <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}></img>}
          {movie?.poster_path == null && (
            <>
              {" "}
              <NoPoster />
              No poster
            </>
          )}
        </div>

        <div className="CardRow">
          <p className="TitleName">{movie.title}</p>

          <p className="Grey16">{movie.release_date?.slice(0, 4)}</p>
          <div className="RateBlock">
            <IconStar size={18} />
            <p>{movie.vote_average}</p> <p className="Grey16">({movie.vote_count})</p>
          </div>
          <div className="MovieCard_Genres">
            <p className="Grey16">Genres</p>
            {movie?.genre_ids.map((i: number) => (
              <p key={i}>
                {genres.map((el: Genre) => {
                  return el.id === i ? el.name : "";
                })}
              </p>
            ))}
          </div>
        </div>
        <ActionIcon variant="default" size="28" aria-label="Star">
          <IconStar style={{ width: rem(20) }} stroke={1.5} />
        </ActionIcon>
      </div>
    </>
  );
}
