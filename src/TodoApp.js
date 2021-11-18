import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
  const initialTodos = [
    { id: uuidv4(), task: 'bla bla', completed: false },
    { id: uuidv4(), task: 'bla2 bla2', completed: true },
    { id: uuidv4(), task: 'bla3 bla3', completed: false }
  ]
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTask) => {
    setTodos([...todos, {id: uuidv4(), task: newTask, completed: false }])
  }

  const deleteTodo = (todoID) => {
    let tempTodos = todos.filter(todo => todo.id !== todoID);
    setTodos(tempTodos);
  }

  const updateTodo = (todoID, updatedTask) => {
    let tempTodos = todos.map(todo => todo.id === todoID 
      ? { ...todo, task: updatedTask} 
      : todo
    );
    setTodos(tempTodos);
  }

  const toggleTodo = (todoID) => {
    let tempTodos = todos.map(todo => todo.id === todoID
      ? { ...todo, completed: !todo.completed }
      : todo
    );
    setTodos(tempTodos)
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
      <Grid container justifyContent="center" style={{marginTop: '1rem'}}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList 
            todos={todos} 
            deleteTodo={deleteTodo} 
            updateTodo={updateTodo} 
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;