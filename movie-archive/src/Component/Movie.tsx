//const Api_k = "a3247e1d159fd499550d53f6ec5ef6d7";
// const Url =
//   "https://api.themoviedb.org/3/movie/popular?api_key=a3247e1d159fd499550d53f6ec5ef6d7";

export default function Movie() {
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
          <h1>1</h1>
        </div>

        <div className="MovieCard">
          <h1>2</h1>
        </div>
        <div className="MovieCard">
          <h1>3</h1>
        </div>
        <div className="MovieCard">
          <h1>4</h1>
        </div>
      </div>
    </div>
  );
}
