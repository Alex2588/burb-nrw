import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

import { AppState } from 'store/root-reducer';
import ItemInfo from 'shared/components/item-info/ItemInfo';
import Spinner from 'shared/components/spinner/Spinner';
import ErrorMessage from 'shared/components/error-message/ErrorMessage';
import { fetchEpisodeDetailsStart, fetchEpisodeDetailsSuccess } from 'store/selected-episode/actions';
import './episode-info.styles.scss';

const EpisodeDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams<{id: string}>();
    const { episodesList } = useSelector((state: AppState) => state.selectedShow.episodes);
    const { episodeDetails, isLoading, error } = useSelector((state: AppState) => state.selectedEpisode);

    useEffect(() => {
        if (episodesList.byId[id]) {
            const episode = episodesList.byId[id];
            dispatch(fetchEpisodeDetailsSuccess(episode));
        } else {
            dispatch(fetchEpisodeDetailsStart(id));
        }
    }, [id, dispatch, episodesList.byId]);

    if (isLoading) return <Spinner />;

    if (error) return <ErrorMessage error={error} />;

    return <div className="episode-info"> 
        { episodeDetails && <ItemInfo item={episodeDetails} /> }
    </div>
}

export default EpisodeDetails;