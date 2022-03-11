import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Table from './components/table/Table';
// import UserList from './components/users/UserList';

// import { Users } from './users';

const App = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3030?query=${query}`);
    setData(response.data.Users);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

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
      <Table users={data} />
    </div>
  );
};

export default App;
