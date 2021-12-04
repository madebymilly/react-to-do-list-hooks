import { v4 as uuid } from 'uuid';

function todosReducer(state, action) {
  switch(action.type) {
    case 'ADD':
      return [...state, { id: uuid(), task: action.task, completed: false }]
    case 'UPDATE':
      return state.map(todo => todo.id === action.id ? { ...todo, task: action.task } : todo);
    case 'DELETE':
      return state.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return state.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
    default:
      return state;
  }
}

export default todosReducer;