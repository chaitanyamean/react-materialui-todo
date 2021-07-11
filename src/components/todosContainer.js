import React from 'react';
import {Box, makeStyles} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import TodoItem from './todoItem';

import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
    root: {
      margin: 20,
      padding: 20,
      backgroundColor: "rgb(92.9%, 92.9%, 92.9%)",
    },
  }));


const TodosContainer = () => {
  const classes = useStyles();

  const todos = useSelector(state => {
      return state.todos
  })

  const prioritisedTodos = (function prioritize(){
      const impTodos = [];
      const notImpTodos = [];

      todos.forEach((todo) => {
          if(todo.important) {
            impTodos.push(todo)
          } else {
              notImpTodos.push(todo)
          }
      })

      return impTodos.concat(notImpTodos);
  })();
  
  console.log(todos);

    return (
        <Box className={classes.root}>

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5" gutterBottom>
                        My Todos
                    </Typography>
                    <Divider/>
                    <List>
                        {prioritisedTodos.map((todo) => {
                            if(!todo.completed){
                                return <div><TodoItem {...todo}/></div>
                            } else {
                                return null
                            }
                        })}
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5" gutterBottom>
                        Completed
                    </Typography>
                    <Divider/>
                    <List>
                        {prioritisedTodos.map((todo) => {
                            if(todo.completed){
                                return <div><TodoItem {...todo}/></div>
                            } else {
                                return null
                            }
                        })}
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TodosContainer;