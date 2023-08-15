import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  age: number;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 28 },
  ]);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            Name: {user.name}, Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
