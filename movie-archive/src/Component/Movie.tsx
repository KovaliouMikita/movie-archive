import MovieCard from "./MovieCard";
export default function Movie({ data }: any) {
  return (
    <div className="MainSection">
      <div className="Header">
        <p>Movies</p>
      </div>
      <div className="DropdownMenu">
        <p>release</p> <p>year rating</p>
      </div>

      <div className="CardSection">
        <div className="MovieCard">
          {data.map((p: any) => {
            <MovieCard p={p} key={p.title}></MovieCard>;
          })}
        </div>
      </div>
    </div>
  );
}
