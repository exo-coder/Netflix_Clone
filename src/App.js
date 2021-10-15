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

export default function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);

  const auth = getAuth(initializeFirebase);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
    } else {
      setIsUserSignedIn(false);
    }
  });

  return (
    <>
      <Router>
        <Route exact path={["/"]}>
          <Home />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
      </Router>
    </>
  );
}
