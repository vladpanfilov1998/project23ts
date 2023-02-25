import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getAllGenres} from "../../store";
import css from './GenreList.module.css';
import {Form} from "../Form/Form";
import {Switcher} from "../Switcher/Switcher";

const GenresList:FC = () => {
    const {genresState} = useAppSelector(state=> state.genre)
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(getAllGenres())
    },[]);
    return (
        <div className={css.genrelist}>


            {genresState&&
            <>
                <Form genres={genresState.genres} />
                <Switcher />
            </>}
        </div>
    );
};

export {GenresList};