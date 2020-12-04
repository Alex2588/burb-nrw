import React from 'react';
import { Link } from 'react-router-dom';

import { Episode } from 'shared/types/interfaces/episode';
import { NormalizedData } from 'utils/normalizeData';
import './episodes-list.styles.scss';

type EpisodeListProps = { episodes: NormalizedData<Episode> }

const sortEpisodes = (episodes: Episode[]) => {
    return episodes.sort((first: Episode, second: Episode) => 
        new Date(second.airdate).getTime() - new Date(first.airdate).getTime());
}

const EpisodesList = ({ episodes }: EpisodeListProps) => {
    const episodesToArray = episodes.allIds.map((episodeId: string) => episodes.byId[episodeId]);
    const sortedEpisodes = sortEpisodes(episodesToArray);

    return (
    <div className="episodes-list">
        <table className="episodes-list-table">
            <thead>
                 <tr>
                    <th>Episode Name</th>
                    <th>Airdate</th>
                    <th>Season</th>
                </tr>
            </thead>
            <tbody>
                {sortedEpisodes.map((episode: Episode) => {
                    return <tr key={episode.id}>
                        <td>
                            <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
                        </td>
                        <td>{episode.airdate}</td>
                        <td>{episode.season}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>);
}

export default EpisodesList;