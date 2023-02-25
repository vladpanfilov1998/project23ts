import React, {FC} from 'react';

import {IGenre} from '../../interfaces';

const GenreBadge:FC<{genre:IGenre}> = ({genre:{id,name}}) => {

    return (
        <div>
            GenreBadge
            <div>{id}</div>
            <div>{name}</div>
        </div>
    );
};

export {GenreBadge};