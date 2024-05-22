import MovieCard from "./MovieCard";
import { dataProp } from "../App";
import Button from "./Button";

interface MovieProps {
  dataMovies: dataProp[];
  get: Function;
  setSection: (arg0: string) => void;
  setPage: (arg0: string) => void;
  page: string;
  setIdMovie: Function;
  genres: object;
}

export default function Movies({
  dataMovies,
  setSection,
  setPage,
  page,
  get,
  genres,
  setIdMovie,
}: MovieProps) {
  return (
    <div className="MainSection">
      <div className="Header">
        <a>Movies</a>
      </div>
      <div className="DropdownMenu">
        {/* <form action="sd">
          <label htmlFor="as">gdf</label>
          <textarea name="a" id="">
            sds
          </textarea>
        </form> */}
        <p>Genres</p> <p>release year</p> <p> rating</p>
      </div>

      <div className="CardSection">
        {dataMovies.map((p: dataProp) => (
          <MovieCard
            setSection={(current: string) => setSection(current)}
            dataMovie={p}
            genresi={genres}
            setIdMovie={setIdMovie}
            key={p.id}
          />
        ))}
      </div>
      <div className="Movies_Pages">
        <Button
          isActive={page === "1"}
          onClick={() => {
            setPage("1");
            get("1");
          }}
        >
          1
        </Button>
        <Button
          isActive={page === "2"}
          onClick={() => {
            setPage("2");
            get("2");
          }}
        >
          2
        </Button>
        <Button
          isActive={page === "3"}
          onClick={() => {
            setPage("3");
            get("3");
          }}
        >
          3
        </Button>
      </div>
    </div>
  );
}
