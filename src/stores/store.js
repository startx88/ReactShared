import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from "./reducer";

let compose = applyMiddleware(thunk);

if (process.env.NODE_ENV === "development") {
  compose = composeWithDevTools(applyMiddleware(thunk));
}

// const reducer = combineReducers({
//   user
// });

// stores
export const createStores = () => {
  const store = createStore(Reducer, compose);
  return store;
};
