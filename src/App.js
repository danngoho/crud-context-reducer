<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { useItems, addItem, removeItem, editItem } from './components/ItemContext';

function App() {
  const { state, dispatch } = useItems();
  const [input, setInput] = useState('');
  const [editing, setEditing] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      dispatch(editItem({ id: editing.id, name: input }));
      setEditing(null);
    } else {
      const newItem = { id: Date.now(), name: input };
      dispatch(addItem(newItem));
    }
    setInput('');
  };

  const handleEdit = (item) => {
    setInput(item.name);
    setEditing(item);
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h1>CRUD with useContext & useReducer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
        />
        <button type="submit">{editing ? 'Edit Item' : 'Add Item'}</button>
      </form>
      
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
>>>>>>> a999a11d66ce32a8f348a5dc5c51c7cd4bed8d3b
        ))}
      </ul>
    </div>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> a999a11d66ce32a8f348a5dc5c51c7cd4bed8d3b

export default App;
