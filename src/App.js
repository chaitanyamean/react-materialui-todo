import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Paper } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';

import TodoAdder from './components/todoAdder'
import TodosContainer from './components/todosContainer'


const useStyles = makeStyles((themes) => ({
    root: {},
    appContainer: {
        paddingLeft: 100,
        paddingRight: 100,
        marginTop: 100,
    },
    wrapper: {
        textAlign: 'center'
    }

}))
export default function Todos() {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" color="inherit">
                        Todos React
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container className={classes.appContainer}>
                <Paper className={classes.wrapper} elevation={0}>
                    <TodoAdder />
                    <TodosContainer />
                </Paper>
            </Container>
        </Box>
    );
}

// one comp to add todo - todoadder and Todo container - TodoContainer