import React, { useState, useContext } from 'react';
import { TodoContext } from './ToDoContext';
import TodoItem from './TodoItem';

const App = () => {
  const { state, addTodo, removeTodo } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          className="todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />
        <button className="add-btn" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
      <ul className="todo-list">
        {state.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
