import React, { useEffect, useCallback } from "react";

const Container = props => {
  console.log(props);
  const { users, loading, user, getUsers, getUser } = props;

  const loadUser = useCallback(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Container;
