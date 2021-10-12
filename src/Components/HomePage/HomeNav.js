import React from "react";
import styled from "styled-components";
import { ReactComponent as NetflixLogo } from "../../Netflix_Logo.svg";
import { Link } from "react-router-dom";
//firbase stuff
import initializeFirebase from "../../firebase"; // configuration
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(initializeFirebase);
const provider = new GoogleAuthProvider();
export default function HomeBanner() {
  const signIn = () => {
    signInWithPopup(auth,provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  return (
    <Main>
      <NetflixLogo className="logo" />
      <button onClick={signIn} className="login-btn">
        Sign in
      </button>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: space-between;

  .logo {
    width: 130px;
    height: 35px;
    margin: 25px;
    margin-left: 25px;

    @media (max-width: 767px) {
      width: 110px;
      height: 30px;
      margin: 20px;
    }
  }
  .login-btn {
    width: 80px;
    height: 30px;
    margin: 25px;
    margin-right: 25px;
    background-color: red;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: bold;
    transition: transform 450ms;
    :hover {
      transform: scale(1.08);
      color: #000;
      background-color: #fff;
      transition: all 0.2s;
    }

    @media (max-width: 767px) {
      margin: 15px;
      height: 35px;
    }
  }
`;
