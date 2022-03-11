import React from 'react';

const UserItem = ({ user }) => {
  return <div>{<li className='list-item'>{user.first_name}</li>}</div>;
};

export default UserItem;
