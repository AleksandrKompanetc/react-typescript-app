import React, { useState } from 'react';
import './App.css';

type User = {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const addUser = () => {}

  return (
    <div className="App">
      <h1>Users</h1>
      <div>
        <input
          type="text"
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button onClick={addUser}>Add User</button>
      </div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email}){' '}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
