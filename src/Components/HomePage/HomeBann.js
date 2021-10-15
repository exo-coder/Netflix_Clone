import React from "react";
import styled from "styled-components";
import HomeNav from "./HomeNav";

const Banner = "/images/banner.jpg";
export default function HomeBann() {
  return (
    <Main style={{ backgroundImage: `url(${Banner})` }}>
      <HomeNav />
      <div className="texts">
        <h1 className="title-1">Unlimited movies, TV shows, and more.</h1>
        <h1 className="title-4">
          Just hit the sign in button to enter with google Authentication and
          make a lot of Dreams. 
        </h1>
      </div>
    </Main>
  );
}

const Main = styled.div`
  background-size: cover;
  background-position: center;
  border-bottom: 8px solid #222;
  padding: 10px;
  height: 500px;
  justify-content: center;
  box-shadow: inset 0 0 500px black;
  

  .texts {
    text-align: center;
    align-items: center;
    margin: auto;
    width: 90%;
  }

  .title-1 {
    font-size: 60px;
    font-weight: bold;
    max-width: 700px;
    margin: auto;
    margin-top: 90px;

    @media (max-width: 768px) {
      font-size: 45px;
    }
  }

  .title-4 {
    font-size: 20px;
  }
  
`;
