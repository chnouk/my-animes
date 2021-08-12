import { AppBar, Button, makeStyles, Toolbar } from '@material-ui/core';
import logo from '../assets/my-animes-a.svg'
import React from 'react';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import PersonalVideolIcon from '@material-ui/icons/PersonalVideo';
import ForumIcon from '@material-ui/icons/Forum';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(2),
    },
  }));

const MainAppBar = () => {

    const classes = useStyles();

    return (
    <AppBar position='static'>
        <Toolbar>
            <img src={logo} style={{ height: '10vh', marginRight: '100px' }} alt='my-animes-logo'/>

            <Button
                size='small'
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<VideoLabelIcon />}
            >
                Animés
            </Button>

            <Button
                size='small'
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<PersonalVideolIcon />}
            >
                Mangas
            </Button>
  
            <Button
                size='small'
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<ForumIcon />}
            >
                Forum
            </Button>




        </Toolbar>
    </AppBar>
    )

}

export default MainAppBar