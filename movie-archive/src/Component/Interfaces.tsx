export interface MoviesProps {
  dataMovies: dataProp[];
  setSection: (arg0: string) => void;
  setPage: (arg0: number) => void;
  setSortMovies: (arg0: string) => void;
  setSortByRatingFrom: (arg0: string) => void;
  setSortByRatingTo: (arg0: string) => void;
  setSortByReleaseDate: (arg0: string) => void;
  setSortByGenres: (arg0: string) => void;
  setIdMovie: Function;
  genres: object[];
}

export interface BigMovieCardProps {
  idMovie: number;
  setSection: Function;
}

export interface genresProp {
  name?: string;
  id?: number;
}

export interface MovieCardProps {
  dataMovie: dataProp;
  setSection: (_arg0: string) => void;
  setIdMovie: Function;
  genres: object[];
}

export interface productionCompaniesProps {
  logo_path?: string;
  name?: string;
}
export interface genresProps {
  name?: string;
  id?: number;
}
export interface dataProp {
  poster_path?: string;
  title: string;
  id: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  runtime?: number;
  budget?: number;
  revenue?: number;
  genres?: genresProps[];
  overview: string;
  production_companies: productionCompaniesProps[];
}

export interface ButtonProps {
  children: any;
  onClick?: () => void | string | boolean;
  isActive?: boolean;
}

export interface SideBarProps {
  Change: (arg0: string) => void;
}
