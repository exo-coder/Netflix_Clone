import React, { useState } from "react";
import styled from "styled-components";
import { VscAdd } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";

export default function HomeEndFaqData1({ faqDataEndPage }) {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    //if clicked is active then close it .
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <Main>
      <h1 className="title">Frequently Asked Questions</h1>
      {faqDataEndPage.map((item, index) => {
        const { id, header, body } = item;
        return (
          <div key={id} className="container">
            <div className="header" onClick={() => toggle(index)} key={index}>
              {header}
              {clicked === index ? <VscChromeClose /> : <VscAdd />}
            </div>
            {clicked === index ? <div className="body">{body}</div> : null}
          </div>
        );
      })}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: auto;

  @media (max-width: 1200px) {
    width: 90%;
  }

  .title {
    text-align: center;
    font-size: 60px;
    padding: 20px;
    font-weight: bold;

    @media (max-width: 767px) {
      font-size: 25px;
    }
  }

  .header {
    align-items: center;
    font-size: 25px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    padding: 0.6em 1.2em;
    margin-top: 5px;
    background-color: #303030;
    user-select: none;

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
  .icon {
    height: 30px;
    width: 30px;
    color: white;

    @media (max-width: 767px) {
      height: 20px;
      width: 20px;
    }
  }
  .body {
    font-size: 19px;
    padding: 0.8em 1.2em;
    margin-bottom: 1px;
    background-color: #303030;
  }

  margin-bottom: 50px;
`;
