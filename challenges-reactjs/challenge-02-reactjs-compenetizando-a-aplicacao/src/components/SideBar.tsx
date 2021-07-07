import { GenreResponseProps, MovieProps, useGenres } from '../hooks/useGenres';
import { Button } from './Button';

import '../styles/sidebar.scss';
import { api } from '../services/api';
import { useEffect } from 'react';
import { CornerDownLeft } from 'react-feather';

export function SideBar() {
    const { movies, genres, selectedGenreId, handleClickButton } = useGenres();

    console.log(movies)

    return(
        <>
            <nav className="sidebar">
                <span>Watch<p>Me</p></span>

                <div className="buttons-container">
                {genres.map(genre => (
                    <Button
                    key={String(genre.id)}
                    title={genre.title}
                    iconName={genre.name}
                    onClick={() => handleClickButton(genre.id)}
                    selected={selectedGenreId === genre.id}
                    />
                ))}
                </div>
            </nav>
      </>
    );
}