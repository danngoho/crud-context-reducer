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
        ))}
      </ul>
    </div>
  );
}

export default App;
