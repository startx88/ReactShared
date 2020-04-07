import { useState, useEffect } from "react";
import axios from "axios";

export const Demo = ({ render, children }) => {
  const [users, setUsers] = useState([]);

  const loadData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.data;
    setUsers(data);
  };

  useEffect(() => {
    loadData();
  }, []);
  console.log("users", users);

  return render(users);
};
