import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export interface GenreProviderProps {
    children: ReactNode;
}

export interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface GenreContextData {
    genres: GenreResponseProps[];
    selectedGenreId: number;
    selectedGenre: GenreResponseProps;
    movies: MovieProps[];
    setSelectedGenreId: (id: number) => void;
    setSelectedGenre: (selectedGenre: GenreResponseProps) => void;
    setGenres: (genres: GenreResponseProps[]) => void;
    setMovies: (movies: MovieProps[]) => void;
}

const GenreContext = createContext<GenreContextData>(
    {} as GenreContextData
);

export function GenreProvider({children}: GenreProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  

  return (
    <GenreContext.Provider value={{ genres, selectedGenreId, selectedGenre, movies, setSelectedGenreId, setSelectedGenre, setGenres, setMovies }}>
      {children}
    </GenreContext.Provider>
  );
}

export function useGenres() {
  const context = useContext(GenreContext);

  return context;
}