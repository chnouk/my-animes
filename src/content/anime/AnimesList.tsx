import { Grid } from '@material-ui/core';
import React from 'react';
import { TopAnime } from '../../data/myAnimeDataType';
import { useQueryTopAnime } from '../../data/myAnimeQuery';
import TopAnimeCard from './TopAnimeCard';

const AnimesList = () => {

    const query = useQueryTopAnime();

    const topAnime = query.data;

    // TODO: find a generic way to do this
    if (topAnime === undefined) return null;
        
    return (
    <Grid container spacing={3}>

        <Grid item xs={12}></Grid>

        <Grid item xs={1} />
        <Grid item container xs={10} spacing={2}>
            {
                topAnime.map((topAnime: TopAnime, idx: number) => <Grid item xs={4} key={idx}><TopAnimeCard anime={topAnime} /></Grid>)
            }
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={12} />

    </Grid>
    )

}

export default AnimesList