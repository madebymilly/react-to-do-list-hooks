import React from 'react';
import useTodoState from './hooks/useTodoState';
import useLocalStorageState from './hooks/useLocalStorageState';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {

  const [ initialTodos ] = [];
  const [ todos, addTodo, deleteTodo, updateTodo, toggleTodo ] = useTodoState(initialTodos);

  // const [ mood, setMood ] = useLocalStorageState('moods', 'happy')
  
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
      {/* <button onClick={() => setMood('angry')}>Get Angry!</button> */}
    </Paper>
  );
}

export default TodoApp;