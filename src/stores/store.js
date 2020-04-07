import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import { composeWithDevTools } from "redux-devtools-extension";

import user from "./reducers/user";

// let compose = Redux.applyMiddleware(thunk);
// if (process.env.production === "development") {
//   compose = composeWithDevTools(Redux.applyMiddleware(thunk));
// }

const reducer = combineReducers({
  user
});

// stores
const createStores = () => {
  const store = createStore(reducer, applyMiddleware(thunk));
  return store;
};

export default createStores;
