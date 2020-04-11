import { combineReducers } from "redux";
import auth from "./reducers/auth";
import alert from "./reducers/alert";
import profile from "./reducers/profile";
import posts from "./reducers/post";

const reducer = combineReducers({
    auth,
    alert,
    profile,
    posts
});

export default reducer;
