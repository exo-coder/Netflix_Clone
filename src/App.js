import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Detail from "./Components/DetailPage/Detail";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/"]} component={Home} />
      </Switch>
      <Switch>
        <Route exact path="/detail" component={Detail} />
      </Switch>
    </Router>
  );
}
