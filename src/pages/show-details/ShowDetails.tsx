import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AppState } from 'store/root-reducer';
import EpisodesList from 'components/episodes-list/EpisodesList';
import ItemInfo from 'shared/components/item-info/ItemInfo';
import Spinner from 'shared/components/spinner/Spinner';
import ErrorMessage from 'shared/components/error-message/ErrorMessage';
import { fetchEpisodesListStart } from 'store/selected-show/episodes/actions';
import { fetchShowDetailsStart, fetchShowDetailsSuccess } from 'store/selected-show/show-details/actions';
import './show-details.styles.scss';

const ShowDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams<{id: string}>();
    const { shows } = useSelector((state: AppState) => state.shows);
    const { episodes: { episodesList }, show: { details, isLoading, error } } = useSelector((state: AppState) => state.selectedShow);

    useEffect(() => {
        if (shows.byId[id]) {
            const show = shows.byId[id];
            dispatch(fetchShowDetailsSuccess(show));
        } else {
            dispatch(fetchShowDetailsStart(id));
        }
    }, [id, dispatch, shows.byId]);

    useEffect(() => {
        dispatch(fetchEpisodesListStart(id));
    }, [id, dispatch]);

    if (isLoading) return <Spinner />;

    if (error) return <ErrorMessage error={error} />;
    
    return (<div className="show-details">
        { details && <ItemInfo item={details} /> }
        { episodesList && <EpisodesList episodes={episodesList} /> }
    </div>);
};

export default ShowDetails;