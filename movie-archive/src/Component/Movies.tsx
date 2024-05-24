import MovieCard from "./MovieCard";
import { dataProp } from "../App";
import Button from "./Button";
import { Select } from "@mantine/core";
import classes from "./Css/ContainedInput.module.css";

interface MoviesProps {
  dataMovies: dataProp[];
  get: Function;
  setSection: (arg0: string) => void;
  setPage: (arg0: string) => void;
  page: string;
  setIdMovie: Function;
  genres: object[];
}

export default function Movies({
  dataMovies,
  setSection,
  setPage,
  page,
  get,
  genres,
  setIdMovie,
}: MoviesProps) {
  return (
    <div className="MainSection">
      <div className="Header">
        <a>Movies</a>
      </div>
      <div className="DropdownMenu">
        <>
          <Select
            mt="md"
            comboboxProps={{ withinPortal: true }}
            data={genres.map((el: any) => el?.name)}
            placeholder="Select genre"
            label="Genres"
            classNames={classes}
          />
        </>
        <>
          <Select
            mt="md"
            comboboxProps={{ withinPortal: true }}
            data={genres.map((el: any) => el?.name)}
            placeholder="Select release year"
            label="Release year"
            classNames={classes}
          />
        </>
        <>
          <Select
            mt="md"
            comboboxProps={{ withinPortal: true }}
            data={genres.map((el: any) => el?.name)}
            placeholder="From"
            label="Rating"
            classNames={classes}
          />
        </>
        <>
          <Select
            mt="md"
            comboboxProps={{ withinPortal: true }}
            data={genres.map((el: any) => el?.name)}
            placeholder="To"
            label="/"
            classNames={classes}
          />
        </>
        <Button>Reset filtres</Button>
      </div>

      <div className="CardSection">
        {dataMovies.map((p: dataProp) => (
          <MovieCard
            setSection={(current: string) => setSection(current)}
            dataMovie={p}
            genres={genres}
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
