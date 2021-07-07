import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';
import { GenreProvider, useGenres } from './hooks/useGenres';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/content.scss';

import './styles/global.scss';

export function App() {
  return (
    <GenreProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </GenreProvider>
  )
}