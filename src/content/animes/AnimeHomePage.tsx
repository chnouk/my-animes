import { Box, Grid, InputAdornment, TextField } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const AnimeHomePage = () => {

    return (
    <Grid container spacing={2}>

        <Grid item xs={12} />

        <Grid item xs={2} />
        <Grid item xs={8}>
        <TextField
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

    </Grid>
    )

}

export default AnimeHomePage