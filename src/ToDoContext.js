import React, { createContext, useReducer } from 'react';

// Initial state for the todo list
const initialState = {
  todos: [],
};

// Actions
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

// Reducer function to handle state changes
const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload },
        ],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

// Create context
export const TodoContext = createContext();

// Provider component to wrap the app with context
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text) => {
    dispatch({ type: ADD_TODO, payload: text });
  };

  const removeTodo = (id) => {
    dispatch({ type: REMOVE_TODO, payload: id });
  };

  return (
    <TodoContext.Provider value={{ state, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
