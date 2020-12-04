import React from 'react';
import { Link } from 'react-router-dom';

import { ShowItemProps } from 'shared/types/custom/show-item-props';
import './show-item.styles.scss';

const ShowItem = ({ show }: ShowItemProps) => (
    <Link to={`/shows/${show.id}`}>
        <div className="show-item">
            <img className='image' style={{
                backgroundImage: `url(${show.image.medium})`
            }}
            alt=""
        />
        <div className='show-item-footer'>
            <span className='name'>{show.name}</span>
        </div>
        </div>
    </Link>
);

export default ShowItem;