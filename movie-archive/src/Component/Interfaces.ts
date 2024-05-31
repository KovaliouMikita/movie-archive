import { ReactElement } from "react";

export interface BigMovieCardP {
  idMovie: number;
  setSection: (section: string) => void;
}

export interface Genre {
  name?: string;
  id: number;
}

export interface MovieCardP {
  movie: Movie;
  setSection: (section: string) => void;
  setIdMovie: (idMovie: number) => void;
  genres: Genre[];
}

export interface productionCompaniesP {
  logo_path?: string;
  name?: string;
}
export interface Genres {
  name?: string;
  id?: number;
}
export interface Movie {
  poster_path?: string;
  title?: string;
  id: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  runtime?: number;
  budget?: number;
  revenue?: number;
  genres?: Genres[];
  overview: string;
  videos: Video;
  production_companies: productionCompaniesP[];
}
export interface Video {
  results: { key: string; type: string }[];
}

export interface ButtonP {
  children: ReactElement | string;
  onClick?: () => void | string | boolean;
  isActive?: boolean;
}

export interface SideBarP {
  Change: (arg0: string) => void;
}
