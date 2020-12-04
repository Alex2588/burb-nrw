import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchShowsListStart } from 'store/shows/actions';
import { AppState } from 'store/root-reducer';
import ShowsList from 'components/shows-list/ShowsList';
import Spinner from 'shared/components/spinner/Spinner';
import ErrorMessage from 'shared/components/error-message/ErrorMessage';
import './shows.styles.scss';

const Shows = () => {
    const dispatch = useDispatch();
    const { shows, isLoading, error } = useSelector((state: AppState) => state.shows);

    useEffect(() => {
        dispatch(fetchShowsListStart());
    }, [dispatch]);

    if (isLoading) return <Spinner />;

    if (error) return <ErrorMessage error={error} />;

    return (
        <div className="shop-page">
            <ShowsList shows={shows} />
        </div>
    )
}

export default Shows;