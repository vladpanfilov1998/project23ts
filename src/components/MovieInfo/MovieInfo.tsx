import React, {FC, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getMovieById} from '../../store';
import {PosterPreview} from '../PosterPreview/PosterPreview';
import {urlsImage} from '../../constants';
import css from './MovieInfo.module.css';
import {StarsRating} from '../StarsRating/StarsRating';

const MovieInfo: FC = () => {
    const {id} = useParams<string>();
    const {movieDetails} = useAppSelector(state => state.movies);
    const navigate = useNavigate();
    const backNavigate = ()=> {
        navigate(-1);
    }
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getMovieById({id: Number(id)}));

    }, [])

    return (
        <div>
            <button className={css.back} onClick={backNavigate}>До попередньої сторінки</button>
            {movieDetails &&
            <div className={css.movieinfo}>
                <PosterPreview poster_path={movieDetails.poster_path} title={movieDetails.title}
                               width={urlsImage.w780}/>
                <div className={css.description}>
                    <div><h1>Назва: {movieDetails.title}</h1></div>
                    <div><p>Анотація: {movieDetails.overview}</p></div>
                    <div>Вікова категорія: {movieDetails.adult ? "For adult" : 'For all adults'}</div>
                    <div>Мова оригіналу: {movieDetails.original_language}</div>
                    <div>Дата виходу: {movieDetails.release_date}</div>
                    <div>Тривалість: {movieDetails.runtime}</div>
                    <div>Жанр: {movieDetails.genres.map(value => <span key={value.id}>{value.name}</span>)}</div>
                    <StarsRating vote_average={movieDetails.vote_average}/>

                </div>
            </div>}
        </div>
    );
};

export {MovieInfo};