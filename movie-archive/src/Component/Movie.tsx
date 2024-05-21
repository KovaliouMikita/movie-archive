import MovieCard from "./MovieCard";
interface MovieProps {
  data: dataProps[];
  setSection: (arg0: string) => void;
}

export default function Movie({ data, setSection }: MovieProps) {
  return (
    <div className="MainSection">
      <div className="Header">
        <p>Movies</p>
      </div>
      <div className="DropdownMenu">
        <p>Genres</p> <p>release year</p> <p> rating</p>
      </div>

      <div className="CardSection">
        {data.map((p: any) => (
          <MovieCard
            setSection={(current) => setSection(current)}
            data={p}
            key={p.id}
          />
        ))}
      </div>
    </div>
  );
}
