import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';
import { GenreProvider, useGenres } from './hooks/useGenres';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
// import { Content } from './components/Content';

import './styles/content.scss';

import { api } from './services/api';

import './styles/global.scss';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  
  //const [movies, setMovies] = useState<MovieProps[]>([]);
  

  
  return (
    <GenreProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </GenreProvider>

  )
}