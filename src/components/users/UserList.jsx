import React from 'react';

import { Users } from '../../users';
import UserItem from './UserItem';

const UserList = ({ query, setQuery }) => {
  return (
    <div>
      <ul className='list'>
        {Users.filter((user) =>
          user.first_name.toLocaleLowerCase().includes(query)
        ).map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
