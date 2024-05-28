import MovieCard from "./MovieCard";
import { Flex, Select } from "@mantine/core";
import classes from "./Css/ContainedInput.module.css";
import { Button } from "@mantine/core";
import { useCallback } from "react";
import { MoviesProps, dataProp, genresProp } from "./Interfaces";

export default function Movies({
  dataMovies,
  setSection,
  setPage,
  genres,
  setIdMovie,
  setSortMovies,
  setSortByReleaseDate,
  setSortByRatingFrom,
  setSortByRatingTo,
  setSortByGenres,
}: MoviesProps) {
  console.log(genres);
  const getDataRange = useCallback(() => {
    let date = new Date();
    function createYears(label: number, value: number) {
      return {
        label: `${label}`,
        value: `${value}`,
      };
    }
    let Array = [];
    for (let i = date.getFullYear(); i > 1922; i--) {
      Array.push(createYears(i, i));
    }
    return Array;
  }, []);

  const getGenresRange = useCallback((genres: genresProp[]) => {
    function createGenres(genres: genresProp[], i: any) {
      return {
        label: `${genres[i].name}`,
        value: `${genres[i].id}`,
      };
    }
    let Array = [];
    for (let i = 0; i < genres.length; i++) {
      Array.push(createGenres(genres, i));
    }
    return Array;
    console.log(Array);
  }, []);

  const getRateRange = useCallback(() => {
    function createRate(label: number, value: number) {
      return {
        label: `${label}`,
        value: `${value}`,
      };
    }
    let Array = [];
    for (let i = 1; i < 11; i++) {
      Array.push(createRate(i, i));
    }
    return Array;
  }, []);

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
            data={getGenresRange(genres)}
            placeholder="Select genre"
            label="Genres"
            classNames={classes}
            onChange={(value) => {
              setSortByGenres(`&with_genres=${value}`);
            }}
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
            onChange={(value) => {
              setSortByReleaseDate(`&primary_release_year=${value}`);
            }}
          />
        </>
        <>
          <Select
            mt="md"
            comboboxProps={{ withinPortal: true }}
            data={getRateRange()}
            placeholder="From"
            label="Rating"
            classNames={classes}
            onChange={(value) => {
              setSortByRatingFrom(`&vote_average.gte=${value}`);
            }}
          />
        </>
        <>
          <Select
            mt="md"
            comboboxProps={{ withinPortal: true }}
            data={getRateRange()}
            placeholder="To"
            label=" "
            classNames={classes}
            onChange={(value) => {
              setSortByRatingTo(`&vote_average.lte=${value}`);
            }}
          />
        </>
        <Button
          onClick={() => {
            setSortMovies("popularity.desc");
            setSortByReleaseDate("");
            setSortByRatingFrom("");
            setSortByRatingTo("");
            setSortByGenres("");
          }}
        >
          Reset filtres
        </Button>

        <Select
          mt="md"
          comboboxProps={{ withinPortal: true }}
          data={[
            { label: "Most popular", value: "popularity.desc" },
            { label: "Least popular", value: "popularity.asc" },
            { label: "Most rated", value: "vote_average.desc" },
            { label: "Least rated", value: "vote_average.asc" },
            { label: "Most voted", value: "vote_count.desc" },
            { label: "Least voted", value: "vote_count.asc" },
          ]}
          // placeholder="To"
          defaultValue={"popularity.desc"}
          label=" Sort BY"
          onChange={(value) => {
            setSortMovies(`${value}`);
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
