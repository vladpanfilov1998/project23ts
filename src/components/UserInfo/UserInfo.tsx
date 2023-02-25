import React, {FC} from 'react';

import css from './UserInfo.module.css'

const UserInfo: FC = () => {
    return (
        <div className={css.info}>
            <div className={css.name}>Ресурс:</div>
            <div className={css.name}>https://api.themoviedb.org</div>
        </div>
    );
};

export {UserInfo};