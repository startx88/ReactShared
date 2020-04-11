import React, { useCallback, useEffect } from "react";
import { storiesOf } from "@storybook/react";
import Users from "./Users";
import { useSelector } from "react-redux";
import { getUsers } from "../../src";
const usersStory = storiesOf("Redux/Users", module);

usersStory.add("All Users", () => {
  const loadUser = useCallback(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return <Users users={{}} />;
});
