import React, { useContext } from "react";

import { DispatchContext } from "./context/todos.context";

import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import useInputState from './hooks/useInputState'

function TodoForm() {

  const dispatch = useContext(DispatchContext);

  // REUSEABLE HOOK:
  const [text, setText, resetText] = useInputState('');

  return (
    <Paper style={{margin: '1rem 0', padding: '0 1rem 1rem'}}>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({type: 'ADD', task: text});
          resetText();
        }
      }>
        <TextField name="task" value={text} onChange={setText} margin="normal" label="add new todo" fullWidth />
        <Button type="submit" variant="outlined" style={{marginRight: '1rem'}}>Add new task</Button>
        <Button variant="contained" onClick={resetText}>Reset</Button>
      </form>
    </Paper>
  )
}

export default TodoForm;
