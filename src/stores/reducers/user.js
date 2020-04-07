import { user } from "../constants";

const initState = {
  loading: false,
  errors: null,
  users: []
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case user.LOADING:
      return {
        ...state,
        loading: true
      };
    case user.FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    case user.FETCH_ALL_USER:
      return {
        ...state,
        loading: false,
        users: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
