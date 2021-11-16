import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import useInputState from './hooks/useInputState'

function TodoForm(props) {

  // RESUABLE HOOK VAN MAKEN:
  const [task, setTask, resetTask] = useInputState('');
  const addTask = () => {
    props.addTodo(task);
    resetTask();
  }
  return (
    <Paper>
      <TextField name="task" value={task} onChange={(e) => setTask(e)} />
      <Button variant="outlined" onClick={addTask}>Add new task</Button>
      <Button variant="contained" onClick={resetTask}>Reset</Button>
    </Paper>
  )
}

export default TodoForm;
