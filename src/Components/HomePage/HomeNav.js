import React from "react";
import styled from "styled-components";
import { ReactComponent as NetflixLogo } from "../../Netflix_Logo.svg";
import { useHistory } from "react-router";
//firbase stuff
import initializeFirebase from "../../firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  setUserLoginDetails,
  selectUserName,
  selectUserPhoto,
} from "../../app/userSlice";

const auth = getAuth(initializeFirebase);
const provider = new GoogleAuthProvider();

export default function HomeNav() {
  const history = useHistory();

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        userInfo(result.user);
        history.push("detail");
      })
      .catch((error) => {
        console.log(error);
        alert("please turn on VPN-Internet then sign in ....");
      });
  };

  const userInfo = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Main>
      <NetflixLogo className="logo" />
      {userName ? (
        <LogOutDropDown>
          <UserImg
            onClick={() => history.push("detail")}
            src={userPhoto}
            alt={userName}
          />
          <DropDown>
            <span>Site</span>
          </DropDown>
        </LogOutDropDown>
      ) : (
        <NavBtn onClick={signIn}>Sign in</NavBtn>
      )}
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
  }
`;

const NavBtn = styled.button`
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
`;

const UserImg = styled.img`
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 5px;
`;

const DropDown = styled.div`
  text-align: center;
  position: absolute;
  top: 50px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 60px;
  opacity: 0;
`;

const LogOutDropDown = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  height: 100%;
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
