import MovieCard from "./MovieCard";
import { dataProp } from "../App";
import Button from "./Button";

interface MovieProps {
  data: dataProp[];
  get: Function;
  setSection: (arg0: string) => void;
  setPage: (arg0: string) => void;
  page: string;
}

export default function Movie({
  data,
  setSection,
  setPage,
  page,
  get,
}: MovieProps) {
  console.log(data);
  return (
    <div className="MainSection">
      <div className="Header">
        <p>Movies</p>
      </div>
      <div className="DropdownMenu">
        <form action="sd">
          <label htmlFor="as">gdf</label>
          <textarea name="a" id="">
            sds
          </textarea>
        </form>
        <p>Genres</p> <p>release year</p> <p> rating</p>
      </div>

      <div className="CardSection">
        {data.map((p: dataProp) => (
          <MovieCard
            setSection={(current: string) => setSection(current)}
            data={p}
            key={p.id}
          />
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <Button
          isActive={page === "1"}
          onClick={() => {
            setPage("1");
            get("1");
            console.log(page);
          }}
        >
          1
        </Button>
        <Button
          isActive={page === "2"}
          onClick={() => {
            setPage("2");
            get("2");
            console.log(page);
          }}
        >
          2
        </Button>
        <Button
          isActive={page === "3"}
          onClick={() => {
            setPage("3");
            get("3");
            console.log(page);
          }}
        >
          3
        </Button>
      </div>
    </div>
  );
}
