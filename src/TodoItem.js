import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Edit, Delete } from '@mui/icons-material';

import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import useToggle from './hooks/useToggle'
import useInputState from './hooks/useInputState'
import { ListItemSecondaryAction } from '@mui/material';


function TodoItem({ id, task, completed, updateTodo, deleteTodo, toggleTodo }) {

  // reusable hooks:
  const [input, toggleInput] = useToggle(false);
  const [text, setText, resetText] = useInputState(task);

  const handleDelete = () => {
    deleteTodo(id)
  }

  const handleToggle = () => {
    toggleTodo(id)
  }

  return (
    <ListItem>      
      <Checkbox tabIndex={-1} checked={completed} onClick={handleToggle} />
      {input 
      ? <form
          onSubmit={(e) => {
            e.preventDefault();
            updateTodo(id, text);
            toggleInput();
          }
        }>
          <TextField name="text" value={text} onChange={setText} />
          <Button type="submit" variant="outlined">update</Button>
        </form>
      : <ListItemText style={{textDecoration: completed ? 'line-through' : 'none'}}>
          {task}
        </ListItemText>
      }
      <ListItemSecondaryAction>
        <IconButton variant="outlined" onClick={toggleInput} aria-label="Edit"><Edit /></IconButton>
        <IconButton variant="outlined" onClick={handleDelete} aria-label="Delete"><Delete /></IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default TodoItem;
