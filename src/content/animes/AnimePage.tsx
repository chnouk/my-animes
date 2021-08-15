import { Grid, InputAdornment, TextField } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../app/AppReducer';
import { setAnimesSearchText } from './AnimePageSlice';
import AnimesList from './AnimesList';

const AnimePage = () => {

    const dispatch = useDispatch();

    const animesSearchText = useSelector((state: AppState) => state.ui.animes.home.animesSearchText);

    return (
    <Grid container spacing={2}>

        <Grid item xs={12} />

        <Grid item xs={2} />
        <Grid item xs={8}>
        <TextField
            value={animesSearchText}
            onChange={(e) => dispatch(setAnimesSearchText(e.target.value))}
            fullWidth
            variant='outlined'
            label="Search"
            placeholder="Search animes"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
        </Grid>
        <Grid item xs={2} />

        <Grid item xs={12} />

        <Grid item xs={12}>
            <AnimesList />
        </Grid>

    </Grid>
    )

}

export default AnimePage