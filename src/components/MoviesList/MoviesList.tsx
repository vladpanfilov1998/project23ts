import React, {FC, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getAllMovies, getAllMoviesWithGenre, setPages} from '../../store';
import {MoviesListCard} from '../MoviesListCard/MoviesListCard';
import css from './MoviesList.module.css'


const MoviesList: FC = () => {
    const {moviesList,pages, genres} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    console.log('moviesList', moviesList);
    useEffect(() => {
        if (pages) {
            if (genres) {
                dispatch(getAllMoviesWithGenre({page:pages.toString(),genre:genres}))
            }
            else {
                dispatch(getAllMovies({page:pages.toString()}))
            }
        }

    }, [pages,genres]);

    return (

        <div>
            {moviesList &&pages&&
            <>
                <div className={css.movies}>{moviesList.results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}</div>
                <div className={css.pages}>
                    <Link className={css.prevnext} to={`/movies/page/${+pages - 1}`}>
                        <button  disabled={+pages <= 1}
                                 onClick={() => dispatch(setPages({page:(+pages - 1).toString()}))}>Попередня сторінка
                        </button>
                    </Link>
                    <Link className={css.prevnext} to={`/movies/page/${+pages + 1}`}>
                        <button  disabled={+pages === moviesList.total_pages}
                                 onClick={() => dispatch(setPages({page:(+pages + 1).toString()}))}>Наступна сторінка
                        </button>
                    </Link>
                </div>
            </>
            }

        </div>
    );
};

export default MoviesList;