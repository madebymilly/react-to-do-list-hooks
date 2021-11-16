import React from 'react'
import TodoItem from './TodoItem'
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

function TodoList(props) {
  const { todos, deleteTodo } = props;
  return (
    <Paper>
      <List>
        {todos.map(item => 
          <>
            <ListItem>
              <ListItemText>
                {<TodoItem key={item.id} id={item.id} task={item.task} completed={item.completed} deleteTodo={deleteTodo} />}
              </ListItemText>
            </ListItem>
            <Divider/>
          </>
        )}
      </List>
    </Paper>
  )
}

export default TodoList;
