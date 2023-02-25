import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '../store';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;
const useGenreNames = (genre_ids:number[])=>{
    const {genresState} = useAppSelector(state => state.genre);
    let genreNames = [];
    if (genresState) {
        for (const genre_idsElement of genre_ids) {
            const index = genresState.genres.findIndex(value => value.id===+genre_idsElement);
            const name =genresState.genres[index].name
            genreNames.push(name);
        }
    }
    return genreNames;
}

export {
    useAppDispatch,
    useAppSelector,
    useGenreNames
}