import { IconStar } from "@tabler/icons-react";
import { ActionIcon, rem } from "@mantine/core";
import { Genre, MovieCardProps } from "./Interfaces";
import { NoPoster } from "./svgComponents";

export default function MovieCard({ dataMovie, setSection, genres, setIdMovie }: MovieCardProps) {
  return (
    <>
      <div className="MovieCard">
        <div
          className="MovieCardImg"
          onClick={() => {
            setSection("BigMovieCard");
            setIdMovie(dataMovie?.id);
          }}
        >
          {dataMovie?.poster_path !== null && <img src={`https://image.tmdb.org/t/p/w500${dataMovie?.poster_path}`}></img>}
          {dataMovie?.poster_path == null && (
            <>
              {" "}
              <NoPoster />
              No poster
            </>
          )}
        </div>

        <div className="CardRow">
          <p className="TitleName">{dataMovie.title}</p>

          <p className="Grey16">{dataMovie.release_date?.slice(0, 4)}</p>
          <div className="RateBlock">
            <IconStar size={18} />
            <p>{dataMovie.vote_average}</p> <p className="Grey16">({dataMovie.vote_count})</p>
          </div>
          <div className="MovieCard_Genres">
            <p className="Grey16">Genres</p>
            {dataMovie?.genre_ids.map((i: number) => (
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
