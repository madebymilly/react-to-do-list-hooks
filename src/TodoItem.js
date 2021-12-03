import React, { useContext } from 'react'

import { TodosContext } from "./context/todos.context";

import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Edit, Delete } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemSecondaryAction } from '@mui/material';

import useToggleState from './hooks/useToggleState'
import useInputState from './hooks/useInputState'

function TodoItem({ id, task, completed }) {
  const { updateTodo, deleteTodo, toggleTodo } = useContext(TodosContext);

  // reusable hooks:
  const [isEditing, toggleIsEditing] = useToggleState(false);
  const [text, setText, resetText] = useInputState(task);

  const handleDelete = () => {
    deleteTodo(id)
  }

  const handleToggle = () => {
    toggleTodo(id)
  }

  return (
    <ListItem>
      {isEditing 
      ? <form
          onSubmit={(e) => {
            e.preventDefault();
            updateTodo(id, text);
            toggleIsEditing();
            resetText();
          }}
          style={{ marginLeft: "1rem", width: "50%" }}
        >
          <TextField name="text" value={text} onChange={setText} margin="normal" fullWidth autoFocus />
          <Button type="submit" variant="outlined">update</Button>
        </form>
      : <> 
          <Checkbox tabIndex={-1} checked={completed} onClick={handleToggle} />
          <ListItemText style={{textDecoration: completed ? 'line-through' : 'none'}}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton variant="outlined" onClick={toggleIsEditing} aria-label="Edit"><Edit /></IconButton>
            <IconButton variant="outlined" onClick={handleDelete} aria-label="Delete"><Delete /></IconButton>
          </ListItemSecondaryAction>
        </>
      }
    </ListItem>
  )
}

export default TodoItem;
