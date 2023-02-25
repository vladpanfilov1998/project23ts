import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';

import {IGenre} from '../../interfaces';
import {useAppDispatch} from '../../hooks/redux';
import {setCurrentGenres, setPages} from '../../store';

const Form: FC<{ genres: IGenre[] }> = ({genres}) => {
    const dispatch = useAppDispatch()
    const navigate =useNavigate();

    const getValue = (e:React.ChangeEvent<HTMLSelectElement>):void => {
        const valueOption = e.target.value;
        if(valueOption!=='0'){
            dispatch(setCurrentGenres({genre:valueOption}))
        }
        else {
            dispatch(setCurrentGenres({genre:''}))
        }
        dispatch(setPages({page:'1'}))
        navigate('/movies/page/1');
    }
    return (
        <div>
            <form>
                <select name = {'genre'} placeholder={'genre'} onChange={getValue}>
                    <option value="0">Усі жанри</option>
                    {genres && genres.map(item => <option  key={item.id} value={item.id}>{item.name}</option>)}
                </select>
            </form>

        </div>
    );
};

export {Form};