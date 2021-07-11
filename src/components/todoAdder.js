import React, { useState, useRef } from 'react';
import { Box, TextField, Button } from '@material-ui/core'

import { useDispatch } from 'react-redux';

import { ADD_TODO } from '../redux/actions'
const TodoAdder = () => {

  const [title, setTitle] = useState(null)
  const titleRef = useRef(null)
  const dispatch = useDispatch()

  function handleTextChange(e) {
    setTitle(e.target.value);
  }
  function addTodo() {
    // TODO: we need to dispatch ADD_TODO redux action here
    if (title) {
      dispatch({
        type: ADD_TODO,
        payload: {
          title
        }
      })
      setTitle(null)
      titleRef.current.value = null;
    }
  }

  return (
    <Box>
      <TextField
        style={{
          width: 400,
        }}
        inputRef={titleRef}
        label="Add new todo"
        variant="filled"
        onChange={handleTextChange}
      ></TextField>
      <Button
        style={{
          height: 55,
        }}
        variant="contained"
        color="primary"
        onClick={addTodo}
      >
        Add
      </Button>
    </Box>
  );
};

export default TodoAdder;