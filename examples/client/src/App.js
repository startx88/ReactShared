import React from "react";
import "./App.css";
import { Demo } from "ReactShared";

const Display = ({ users }) => {
  return users && users.map(user => <li>{user.name}</li>);
};

function App() {
  return (
    <div className="App">
      <Demo
        render={users => {
          console.log(users);
          return <Display users={users} />;
        }}
      />
    </div>
  );
}

export default App;
