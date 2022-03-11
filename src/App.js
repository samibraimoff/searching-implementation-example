import React, { useState } from 'react';
import './App.css';
import Table from './components/table/Table';
import UserList from './components/users/UserList';

import { Users } from './users';

const App = () => {
  const [query, setQuery] = useState('');

  const keys = ['first_name', 'last_name', 'email'];

  const search = (data) => {
    return data.filter((user) =>
      keys.some((key) => user[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className='app'>
      <input
        type='text'
        placeholder='Search...'
        className='search'
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      {/* <UserList query={query} setQuery={setQuery} /> */}
      <Table users={search(Users)} />
    </div>
  );
};

export default App;
