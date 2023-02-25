import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IGenres} from '../../interfaces';
import {genreService} from '../../services';

interface IGenreState {
    genresState: IGenres| null
}

const initialState:IGenreState = {
    genresState: null
}
export const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, {dispatch}) => {
        const {data} = await genreService.getAll();
        dispatch(setGenres({genresState:data}));
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setGenres: (state, action:PayloadAction<{genresState:IGenres}>) =>{
            state.genresState =action.payload.genresState
        }
    }
})
const genreReducer = genreSlice.reducer;
export default genreReducer;
export const {setGenres} = genreSlice.actions