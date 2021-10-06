import React from "react";
import styled from "styled-components";

export default function HomeMiddle({ data }) {
  return (
    <>
      {data.map((item) => {
        const { id, title, subTitle, image, direction } = item;
        return (
          <Main key={id}>
            <div className="section" >
              <div className="texts">
                <h1 className="title">{title}</h1>
                <h3 className="subTitle">{subTitle}</h3>
              </div>
              <img className="img" src={image} alt=" " />
            </div>
          </Main>
        );
      })}
    </>
  );
}

const Main = styled.div`
  border-bottom: 8px solid #222;

  .section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 70px 25px;
    height: 95%;
    color: white;
    max-width: 1100px;
    width: 90%;

    @media (max-width: 1200px) {
      flex-direction: column;
    }
  }

  .texts {
    max-width: 700px;

    @media (max-width: 1200px) {
      text-align: center;
      margin: auto;
    }

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  .title {
    font-size: 50px;

    @media (max-width: 768px) {
      font-size: 30px;
      text-align: center;
    }
  }

  .subTitle {
    font-size: 27px;
    font-family: "Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

    @media (max-width: 768px) {
      font-size: 17px;
      text-align: center;
    }
  }

  .img {
    z-index: 1;
    max-width: 400px;

    @media (max-width: 768px) {
      max-width: 350px;
    }
  }
`;
