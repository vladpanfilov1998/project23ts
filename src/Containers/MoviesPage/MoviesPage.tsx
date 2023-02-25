import React, {FC} from 'react';

import MoviesList from '../../components/MoviesList/MoviesList';
import {GenresList} from '../../components';
import css from  './MoviesPage.module.css';

const MoviesPage:FC = () => {
    return (
        <div className={css.context}>

            <GenresList/>
            <MoviesList/>

        </div>
    );
};

export {MoviesPage};