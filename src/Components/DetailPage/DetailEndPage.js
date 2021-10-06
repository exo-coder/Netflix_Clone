import React from "react";
import styled from "styled-components";

export default function DetailEndPage() {
  return (
    <Main>
      <div className="end__page">
        <h1 className="end__page_title">There’s even more to watch.</h1>
        <h1 className="end__page_text">
          Netflix has an extensive library of feature films, documentaries, TV
          programmes, anime, award-winning Netflix originals and more. Watch as
          much as you want, any time you want.
        </h1>
        <button className="end__page_btn">JOIN</button>
      </div>

    </Main>
  );
}

const Main = styled.div`
.end__page {
    align-items: center;
    justify-content: center;
    color: white;
    height: 300px;
    display: flex;
    flex-direction: column;
}

.end__page_title {
    font-size: 40px;
    text-align: center;
    padding-top: 10px;
}

.end__page_text {
   text-align: center;
   font-size: 1.5rem;
   display: block;
   width: 90%;
   max-width: 500px;
   margin-block-start: 1em;
   
}

.end__page_btn {
    font-size: 13px;
    align-items: center;
    color: #fff;
    background-color: red;
    cursor: pointer;
    outline: none;
    border: none;
    margin-top: 10px;
    padding: 0.7rem;
    width: 70px;
    transition: transform 450ms;
}

.end__page_btn:hover{
    transform: scale(1.08) ;
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
}




`;
