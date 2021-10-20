import React from "react";
import styled from "styled-components";
import { ReactComponent as NetflixLogo } from "../../Netflix_Logo.svg";
//firbase stuff
import initializeFirebase from "../../firebase"; 
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(initializeFirebase);
const provider = new GoogleAuthProvider();

export default function HomeNav(props) {
  const signIn = () => {
    signInWithPopup(auth, provider)
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
    margin: 15px;

    @media (max-width: 767px) {
      width: 110px;
      height: 30px;
    }
  }
  .login-btn {
    width: 80px;
    height: 30px;
    margin: 15px;
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
  }
`;
