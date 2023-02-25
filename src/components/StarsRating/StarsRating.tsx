import React, {FC} from 'react';

import css from './StarsRating.module.css'

const StarsRating:FC<{vote_average:number}> = ({vote_average}) => {
    const voteStar = Math.round(Math.floor(vote_average)/2)
    const arrVoteStar = [];
    for (let i = 0; i < voteStar; i++) {
        arrVoteStar.push(i);
    }
    const arrNotCheckStar = [];
    for (let j = 0; j < 5-voteStar; j++) {
        arrNotCheckStar.push(j);
    }

    return (
        <div className={css.stars}>
            {arrVoteStar.map(star =><div key={star} className={css.checked}>★</div>)}
            {arrNotCheckStar.map(star =><div  key={star} className={css.unchecked}>★</div>)}
        </div>
    );
};

export {StarsRating};