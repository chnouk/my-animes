import { Card, CardHeader, CardMedia } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { TopAnime } from '../../data/myAnimeDataType';

interface TopAnimeCardProps {
    anime: TopAnime
}

const TopAnimeCard = (props: TopAnimeCardProps) => {
    
    const imageUrl = props.anime.image_url.substr(0, props.anime.image_url.indexOf('?'));

    const history = useHistory()

    return (
        <Card onClick={() => history.push(`/animes/${props.anime.mal_id}`)}>
            <CardHeader title={props.anime.title} titleTypographyProps={{ variant: 'h5'}}/>
            <CardMedia component='img' image={imageUrl} height={100} />
        </Card>
    )

}

export default TopAnimeCard