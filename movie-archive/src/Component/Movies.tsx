import MovieCard from "./MovieCard";
import { dataProp } from "../App";
import { Flex, Select } from "@mantine/core";
import classes from "./Css/ContainedInput.module.css";
import { Button } from "@mantine/core";

interface MoviesProps {
  dataMovies: dataProp[];
  setSection: (arg0: string) => void;
  setPage: (arg0: number) => void;
  setIdMovie: Function;
  genres: object[];
  setMovieList: Function;
}

export default function Movies({
  dataMovies,
  setSection,
  setPage,
  genres,
  setIdMovie,
  setMovieList,
}: MoviesProps) {
  function getDataRange() {
    let Array = [];
    for (let i = 1922; i < 2024; i++) {
      Array.push(`${i}`);
    }
    return Array;
  }
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
            data={getDataRange()}
            placeholder="Select release year"
            label="Release year"
            classNames={classes}
          />
        </>
        <>
          <Select
            mt="md"
            comboboxProps={{ withinPortal: true }}
            data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
            placeholder="From"
            label="Rating"
            classNames={classes}
          />
        </>
        <>
          <Select
            mt="md"
            comboboxProps={{ withinPortal: true }}
            data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
            placeholder="To"
            label=" "
            classNames={classes}
          />
        </>
        <Button>Reset filtres</Button>

        <Select
          mt="md"
          comboboxProps={{ withinPortal: true }}
          data={[
            {
              label: "Most popular",
              value: "popular",
            },
            {
              label: "Top rated",
              value: "top_rated",
            },
            {
              label: "Upcoming",
              value: "upcoming",
            },
          ]}
          // placeholder="To"
          defaultValue={"popular"}
          label=" Sort BY"
          onChange={(value) => {
            setMovieList(value);
          }}
          classNames={classes}
        />
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
      <Flex
        mih={50}
        bg="rgba(234, 235, 237, 1)"
        gap="xs"
        justify="flex-end"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        <Button.Group>
          <Button
            variant="default"
            onClick={() => {
              setPage(1);
            }}
          >
            1
          </Button>
          <Button
            variant="default"
            onClick={() => {
              setPage(2);
            }}
          >
            2
          </Button>
          <Button
            variant="default"
            onClick={() => {
              setPage(3);
            }}
          >
            3
          </Button>
        </Button.Group>
      </Flex>
    </div>
  );
}
