import { ReactElement } from "react";

export interface BigMovieCardProps {
  idMovie: number;
  setSection: (section: string) => void;
}

export interface Genre {
  name?: string;
  id: number;
}

export interface MovieCardProps {
  dataMovie: dataProp;
  setSection: (section: string) => void;
  setIdMovie: (idMovie: number) => void;
  genres: Genre[];
}

export interface productionCompaniesProps {
  logo_path?: string;
  name?: string;
}
export interface Genres {
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
  genres?: Genres[];
  overview: string;
  production_companies: productionCompaniesProps[];
}

export interface ButtonProps {
  children: ReactElement | string;
  onClick?: () => void | string | boolean;
  isActive?: boolean;
}

export interface SideBarProps {
  Change: (arg0: string) => void;
}
