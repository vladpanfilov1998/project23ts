import {axiosService} from './axios.service';
import {IGenres} from '../interfaces';
import {api_key, urls} from '../constants';

export const genreService = {
    getAll: ()=>axiosService.get<IGenres>(`${urls.genresList}?api_key=${api_key}`)
}