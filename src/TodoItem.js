import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

function TodoItem(props) {
  const { id, task, completed, deleteTodo } = props;

  const label = { inputProps: { 'aria-label': task } };

  const handleClick = () => {
    deleteTodo(id);
  }

  const handleChange = () => {
    console.log('click cb')
  }

  // toggle checkbox

  return (
    <div>
      <Checkbox {...label} onChange={handleChange} />
      {task}
      <Button variant="outlined" onClick={handleClick}>Delete</Button>
      {completed &&
        <span>(completed)</span>
      }
    </div>
  )
}

export default TodoItem;
