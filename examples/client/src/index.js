import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from "react-redux";
import { createStores } from "ReactShared";
import { BrowserRouter } from "react-router-dom";
import './_lib'
import "./index.scss";

// store

const store = createStores();

// Root Component
const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
