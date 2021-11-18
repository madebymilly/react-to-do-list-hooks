import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function useTodoState(initialTodos = []) {

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

  return [todos, addTodo, deleteTodo, updateTodo, toggleTodo]

}

export default useTodoState;



