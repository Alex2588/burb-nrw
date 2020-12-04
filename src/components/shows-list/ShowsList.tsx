import React from 'react';

import { Show } from 'shared/types/interfaces/show';
import { NormalizedData } from 'utils/normalizeData';
import ShowItem from 'components/show-item/ShowItem';
import './shows-list.styles.scss';

type ShowsListProps = { shows: NormalizedData<Show> };

const ShowsList = ({ shows }: ShowsListProps) => (
    <div className="shows-list">
        {shows.allIds.map((showId: string) => {
            const show = shows.byId[showId];
            return <ShowItem key={show.id} show={show}/>
        })}
    </div>
);

export default ShowsList;