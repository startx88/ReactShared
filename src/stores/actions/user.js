import { user } from "../constants";
import axios from "axios";
// loading
const LOADING = () => ({ type: user.LOADING });
// failed
const FAILED = error => ({ type: user.FAILED, payload: error });
// load_users
const USERS = data => ({ type: user.FETCH_ALL_USER, payload: data });
// load_user

export const getUsers = () => async dispatch => {
  dispatch(LOADING());
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const { data } = await response.data;
    dispatch(USERS(data));
  } catch (error) {
    console.log(error);
    dispatch(FAILED(error));
  }
};
