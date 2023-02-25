import React, {FC} from 'react';

import {setThem} from '../../store';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import css from './Switcher.module.css'

const Switcher: FC = () => {
    const dispatch = useAppDispatch();
    const {thems}=useAppSelector(state=> state.them);
    const getValueRadio = (e:any)=> {
        const valueOption = e.target.value;
        dispatch(setThem({them: valueOption}))
    }
    return (

        <div className={css.switch}>
            <form>
                <div className={css.switchwrap}>
                    <div>
                        <input type="radio" id="light" name="theme" value="light"
                               checked={thems === "light"} onChange={getValueRadio}/>
                        <label htmlFor="light">Яскраво</label>
                    </div>
                    <div>
                        <input type="radio" id="dark" name="theme" value="dark"
                               checked={thems === "dark"} onChange={getValueRadio}/>
                        <label htmlFor="dark">Темно</label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export {Switcher};