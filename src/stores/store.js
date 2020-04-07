import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import user from "./reducers/user";

let compose = applyMiddleware(thunk);
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  compose = composeWithDevTools(applyMiddleware(thunk));
}

const reducer = combineReducers({
  user
});

// stores
export const createStores = () => {
  const store = createStore(reducer, compose);
  return store;
};
