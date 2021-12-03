import React, { useContext } from 'react'

import { TodosContext } from "./context/todos.context";

import TodoItem from './TodoItem'
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

function TodoList() {
  const { todos } = useContext(TodosContext);
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((item, i) => 
          <div key={item.id}>
            <TodoItem 
              key={item.id} 
              {...item} 
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
