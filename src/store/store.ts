import {configureStore, combineReducers} from '@reduxjs/toolkit';

import movieReducer from './slices/movieSlice';
import genreReducer from './slices/genreSlice';
import themReducer from './slices/themeSlice';

const rootReducer = combineReducers({
    movies: movieReducer,
    genre: genreReducer,
    them: themReducer

})

export const setupStore = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];