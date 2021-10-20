import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Detail from "./Components/DetailPage/Detail";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import initializeFirebase from "./firebase";
//import { useHistory } from "react-router";

export default function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  // const history = useHistory();

  // onStateChanged firebase to handle for next page

  const auth = getAuth(initializeFirebase);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return setIsUserSignedIn(true);
    } else {
      setIsUserSignedIn(false);
    }
  });

  return (
    <Router>
      <Switch>
        <Route exact path={["/"]} component={Home}>
          {isUserSignedIn ? (
            <Redirect to="/detail" />
          ) : (
            null &&
            alert("there is some problem with sign in . plz try it again")
          )}
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/detail" component={Detail} />
      </Switch>
    </Router>
  );
}
