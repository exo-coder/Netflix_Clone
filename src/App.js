import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Detail from "./Components/DetailPage/Detail";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={["/"]}>
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/detail" >
            <Detail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
