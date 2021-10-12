import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Detail from "./Components/DetailPage/Detail";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import initializeFirebase from "./firebase";

export default function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);

  const auth = getAuth(initializeFirebase);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return setIsUserSignedIn(true);
    } else {
      setIsUserSignedIn(false);
    }
  });

  if (isUserSignedIn === true) {
  
  } else {

  }

  return (
    <>
      <Router>
        <Switch>
          <Route exact path={["/"]} component={Home}>
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/detail" component={Detail}>
            <Detail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
