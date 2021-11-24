import React from "react";
import styled from "styled-components";
import { ReactComponent as NetflixLogo } from "../../Netflix_Logo.svg";
import { getAuth, signOut } from "firebase/auth";
import initializeFirebase from "../../firebase";
import { useHistory } from "react-router";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogoutState,
} from "../../app/userSlice";

export default function HomeBanner() {
  const history = useHistory();
  const auth = getAuth(initializeFirebase);

  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();

  function signedOut() {
    signOut(auth)
      .then(() => {
        dispatch(setUserLogoutState());
        history.push("/");
        console.log("signed out...");
      })
      .catch((error) => {
        alert(error);
        console.log("problem with sign out.");
      });
  }

  return (
    <Main>
      <NetflixLogo className="logo" />
      {userName ? (
        <LogOutDropDown>
          <UserImg onClick={signedOut} src={userPhoto}  />
          <DropDown>
            <span>Exit</span>
          </DropDown>
        </LogOutDropDown>
      ) : (
        <NavBtn onClick={signedOut}>sign out</NavBtn>
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
    margin: 25px;
    margin-left: 25px;

    @media (max-width: 767px) {
      width: 110px;
      height: 30px;
    }
  }
`;

const NavBtn = styled.button`
  width: 100%;
  max-width: 80px;
  height: 30px;
  margin: 20px;
  margin-top: 20px;
  padding: 5px;
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
  margin-right: 30px;
  margin-top: 15px;
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
