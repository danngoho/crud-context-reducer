import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoProvider } from './ToDoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoProvider>
    <App />
  </TodoProvider>
=======
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ItemProvider } from './components/ItemContext';

ReactDOM.render(
  <ItemProvider>
    <App />
  </ItemProvider>,
  document.getElementById('root')
>>>>>>> a999a11d66ce32a8f348a5dc5c51c7cd4bed8d3b
);
