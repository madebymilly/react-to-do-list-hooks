import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'bla bla', completed: false },
    { id: 2, task: 'bla2 bla2', completed: true },
    { id: 3, task: 'bla3 bla3', completed: false }
  ]
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTask) => {
    let tempTodos = todos;
    setTodos([...tempTodos, {id: tempTodos.length + 1, task: newTask, completed: false }])
  }
  const deleteTodo = (todoID) => {
    let tempTodos = todos;
    setTodos(tempTodos.filter(todo => todo.id !== todoID));
  }
  return (
    <Paper 
      style={{ padding: 0, margin: 0, height: '100vh', backgroundColor: '#fafafa'}}
      evalation={0}
    >  
      <AppBar color='primary' position='static' style={{ height: "64px" }}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </Paper>
  );
}

export default TodoApp;