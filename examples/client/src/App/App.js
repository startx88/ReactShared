import React, { lazy, Suspense } from "react";
import Main from "../layouts/Main";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Users = lazy(() => import("../pages/Users"));

function App() {
  return (
    <Main>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/" component={Users} />
        </Switch>
      </Suspense>
    </Main>
  );
}

export default App;
