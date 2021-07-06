import { GenreResponseProps, MovieProps, useGenres } from '../hooks/useGenres';
import { Button } from './Button';

import '../styles/sidebar.scss';
import { api } from '../services/api';
import { useEffect } from 'react';

export function SideBar() {
    const { genres, selectedGenreId, selectedGenre, setSelectedGenre, setSelectedGenreId, setMovies } = useGenres();

    useEffect(() => {
        api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
          setMovies(response.data);
        });
    
        api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
          setSelectedGenre(response.data);
        })
      }, [selectedGenreId]);

    function handleClickButton(id: number) {
        setSelectedGenreId(id);
    }

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

            <div className="container">

                <header>
                <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
                </header>
            </div>
      </>
    );
}