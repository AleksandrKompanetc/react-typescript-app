import React, { useState, useEffect } from 'react';
import './App.css';

type User = {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch(err: any) {
        setError(err.message);
      } finally {
        setLoading(false)
      }
    }

    fetchUsers();
  }, [])

  const addUser = () => {
    if (name.trim() && email.trim()) {
      const newUser: User = {
        id: Date.now(),
        name,
        email
      };
      setUsers([...users, newUser]);
      setName('');
      setEmail('');
    }
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  }

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
