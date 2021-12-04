import React, { createContext, useReducer } from "react";
import todosReducer from "../reducer/todos.reducer";
import useTodoState from "../hooks/useTodoState";
const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
  { id: 2, task: "Release lady bugs into garden", completed: true }
];
export const TodosContext = createContext();

export function TodosProvider(props) {
  //const todosStuff = useTodoState(defaultTodos);
  const [todos, dispatch] = useReducer(todosReducer, defaultTodos);
  return (
    <TodosContext.Provider value={{todos, dispatch}}>
      {props.children}
    </TodosContext.Provider>
  );
}