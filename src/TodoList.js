import React from 'react'
import TodoItem from './TodoItem'
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

function TodoList(props) {
  const { todos, deleteTodo, updateTodo } = props;
  return (
    <Paper>
      <List>
        {todos.map(item => 
        <div key={item.id}>
          <TodoItem 
            key={item.id} 
            id={item.id} 
            task={item.task} 
            completed={item.completed} 
            deleteTodo={deleteTodo} 
            updateTodo={updateTodo}
          />
          {item.id !== todos.length
            ?  <Divider />
            : ''
          }
        </div>
        )}

      </List>
    </Paper>
  )
}

export default TodoList;
