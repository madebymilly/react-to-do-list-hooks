import React from 'react'
import TodoItem from './TodoItem'
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

function TodoList({ todos, deleteTodo, updateTodo, toggleTodo }) {
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((item, i) => 
          <div key={item.id}>
            <TodoItem 
              key={item.id} 
              {...item} 
              deleteTodo={deleteTodo} 
              updateTodo={updateTodo}
              toggleTodo={toggleTodo}
            />
            {i + 1 !== todos.length && <Divider />}
          </div>
          )}

        </List>
      </Paper>

    )
  } else {
    return null;
  }
}

export default TodoList;
