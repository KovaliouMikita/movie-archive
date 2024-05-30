import MovieCard from "./MovieCard";
import { Flex, Select, ComboboxData, MultiSelect } from "@mantine/core";
import classes from "./Css/ContainedInput.module.css";
import { Button } from "@mantine/core";
import { useCallback, useMemo, useState } from "react";
import { dataProp, Genre } from "./Interfaces";

export interface Props {
  dataMovies: dataProp[];
  setSection: (section: string) => void;
  setPage: (numberPage: number) => void;
  setSortMovies: (quaryParameter: string) => void;
  setSortByRatingFrom: (quaryParameter: string) => void;
  setSortByRatingTo: (quaryParameter: string) => void;
  setSortByReleaseDate: (quaryParameter: string) => void;
  setSortByGenres: (quaryParameter: string) => void;
  setIdMovie: (idMovie: number) => void;
  genres: Genre[];
}

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
}: Props) {
  const [selectedGenreId, setSelectedGenreId] = useState<string[] | undefined>(undefined);
  const [selectedYearId, setSelectedYearId] = useState<string | null>(null);
  const [selectedRateFrom, setSelectedRateFrom] = useState<string | null>(null);
  const [selectedRateToId, setSelectedRateToId] = useState<string | null>(null);

  const getDateRange = useMemo(() => {
    const date = new Date();
    function createYears(label: number, value: number) {
      return {
        label: `${label}`,
        value: `${value}`,
      };
    }
    const Years = [];
    for (let i = date.getFullYear(); i > 1908; i--) {
      Years.push(createYears(i, i));
    }
    return Years;
  }, []);

  const getRateRange = useMemo(() => {
    function createRate(label: number, value: number) {
      return {
        label: `${label}`,
        value: `${value}`,
      };
    }
    const rates = [];
    for (let i = 1; i < 11; i++) {
      rates.push(createRate(i, i));
    }
    return rates;
  }, []);

  const genreOptions: ComboboxData = useMemo(() => {
    return genres.map((genre: Genre) => ({
      value: genre.id.toString(),
      label: genre.name || "",
    }));
  }, [genres]);

  const onGenreChange = useCallback(
    (value: string[] | undefined) => {
      setSelectedGenreId(value);
      if (value != null) {
        setSortByGenres(`&with_genres=${value}`);
      } else {
        setSortByGenres(``);
      }
    },
    [setSortByGenres]
  );

  return (
    <div className="MainSection">
      <div className="Header">
        <a>Movies</a>
      </div>
      <div className="DropdownMenu">
        <>
          <MultiSelect
            mt="md"
            comboboxProps={{ withinPortal: true }}
            value={selectedGenreId}
            data={genreOptions}
            maxDropdownHeight="188px"
            placeholder={"Select genres"}
            label="Genres"
            classNames={classes}
            clearable
            onChange={onGenreChange}
          />
        </>
        <>
          <Select
            mt="md"
            comboboxProps={{ withinPortal: true }}
            data={getDateRange}
            maxDropdownHeight="188px"
            placeholder="Select release year"
            label="Release year"
            value={selectedYearId}
            classNames={classes}
            onChange={(value) => {
              if (value != null) {
                setSelectedYearId(value);
                setSortByReleaseDate(`&primary_release_year=${value}`);
              } else {
                setSortByReleaseDate(``);
                setSelectedYearId(null);
              }
            }}
          />
        </>
        <>
          <Select
            mt="md"
            comboboxProps={{ withinPortal: true }}
            data={getRateRange}
            placeholder="From"
            label="Rating"
            maxDropdownHeight="188px"
            value={selectedRateFrom}
            classNames={classes}
            onChange={(value) => {
              if (value != null) {
                setSelectedRateFrom(value);
                setSortByRatingFrom(`&vote_average.gte=${value}`);
              } else {
                setSortByRatingFrom(``);
                setSelectedRateFrom(null);
              }
            }}
          />
        </>
        <>
          <Select
            mt="md"
            comboboxProps={{ withinPortal: true }}
            data={getRateRange}
            placeholder="To"
            label=" "
            maxDropdownHeight="188px"
            value={selectedRateToId}
            classNames={classes}
            onChange={(value) => {
              if (value != null) {
                setSelectedRateToId(value);
                setSortByRatingTo(`&vote_average.lte=${value}`);
              } else {
                setSortByRatingTo(``);
                setSelectedRateToId(null);
              }
            }}
          />
        </>
        <Button
          variant="transparent"
          style={{ height: "20px" }}
          color="rgba(0, 0, 0, 1)"
          onClick={() => {
            setSortMovies("popularity.desc");
            setSelectedGenreId(undefined);
            setSortByReleaseDate("");
            setSelectedYearId(null);
            setSortByRatingFrom("");
            setSelectedRateFrom(null);
            setSortByRatingTo("");
            setSortByGenres("");
            setSelectedRateToId(null);
          }}
        >
          Reset filtres
        </Button>
      </div>
      <div className="flex-end">
        <Select
          mt="md"
          style={{ width: "275px", position: "relative" }}
          comboboxProps={{ withinPortal: true }}
          data={[
            { label: "Most popular", value: "popularity.desc" },
            { label: "Least popular", value: "popularity.asc" },
            { label: "Most rated", value: "vote_average.desc" },
            { label: "Least rated", value: "vote_average.asc" },
            { label: "Most voted", value: "vote_count.desc" },
            { label: "Least voted", value: "vote_count.asc" },
          ]}
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
          <MovieCard setSection={(current: string) => setSection(current)} dataMovie={p} genres={genres} setIdMovie={setIdMovie} key={p.id} />
        ))}
      </div>
      <Flex mih={50} bg="rgba(234, 235, 237, 1)" gap="xs" justify="flex-end" align="flex-start" direction="row" wrap="wrap">
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
