import React, {useState} from 'react';
import './App.css';

type User = {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([
    {id: 1, name: 'Alice', email: 'alice@example.com'},
    {id: 2, name: 'Bob', email: 'bob@example.com'}
  ])
  return (
    <div className="App">
      Users
    </div>
  );
}

export default App;
