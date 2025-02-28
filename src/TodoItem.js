import React from 'react';

const TodoItem = ({ todo, removeTodo }) => {
  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <button className="delete-btn" onClick={() => removeTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
