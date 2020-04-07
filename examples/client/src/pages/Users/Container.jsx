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

  const fetchSingleUser = id => {
    getUser(id);
    console.log("user", user);
  };

  return (
    <div>
      <h1>Users</h1>
      <ul className="row">
        {users.map(user => (
          <li className="col-sm-3 mb-3" key={user.id}>
            <div className="card">
              <div className="card-header">{user.name}</div>
              <div className="card-body">
                {user.username} / {user.email}
                <button
                  onClick={() => fetchSingleUser(user.id)}
                  className="btn btn-info mt-2"
                  type="button"
                >
                  Get Details
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="single-user">
        <div>{user.name}</div>
      </div>
    </div>
  );
};

export default Container;
