import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IMoviesList, IMovieDetails} from '../../interfaces';
import {movieService} from '../../services/';

interface IMovieState {
    moviesList: IMoviesList | null,
    movieDetails:IMovieDetails | null,
    pages:string,
    genres:string
}
const initialState: IMovieState = {
    moviesList:null,
    movieDetails:null,
    pages:'1',
    genres:''
}

export const getAllMovies = createAsyncThunk<void, {page:string}>(
    'movieSlice/getAllMovies',
    async ({page},{dispatch}) => {
        const {data} = await  movieService.getAll(page);
        dispatch(setMovies({moviesList: data}))
    }
)
export const getAllMoviesWithGenre = createAsyncThunk<void, {page:string,genre:string}>(
    'movieSlice/getAllMovies',
    async ({page,genre},{dispatch}) => {
        const {data} = await  movieService.getALLByGenrePage(page,genre);
        dispatch(setMovies({moviesList: data}));
    }
)
export const getMovieById = createAsyncThunk<void,{id:number}>(
    'moveSlice/getMovieById',
    async ({id},{dispatch})=>{
        const {data} = await movieService.getById(id);
        dispatch(setMovieDetails({movieDetails: data}))

    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{
        setMovies: (state, action: PayloadAction<{moviesList: IMoviesList}>)=>{
            state.moviesList=action.payload.moviesList;
        },
        setMovieDetails:(state, action:PayloadAction<{movieDetails: IMovieDetails}>)=>{
            state.movieDetails=action.payload.movieDetails;
        },
        setPages:(state, action:PayloadAction<{page:string}>)=>{
            state.pages = action.payload.page;
        },
        setCurrentGenres:(state, action:PayloadAction<{genre:string}>)=>{
            state.genres = action.payload.genre;
        }
    }
})

const movieReducer = movieSlice.reducer;
export default  movieReducer;
export const{setMovies, setMovieDetails,setPages,setCurrentGenres} = movieSlice.actions