import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DetailNav from "./DetailNav";
import axios from "./API/axios";
import requests from "./API/Request";

export default function DetailBann() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  // this is forl less showing discription ....
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <Main
      style={{
        backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
              )`,
      }}
    >
      <DetailNav />
      <div className="bann-contents">
        <h1 className="bann-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="bann-btns">
          <button className="bann-btn">Play</button>
          <button className="bann-btn">My List</button>
        </div>
        <div className="bann-dis">{truncate(movie?.overview, 160)}</div>
      </div>
    </Main>
  );
}

const Main = styled.div`
  background-size: cover;
  background-position: center;
  color: white;
  object-fit: contain;
  height: 500px;
  border-bottom: 8px solid #222;
  box-shadow: inset 0 0 500px black;
  .bann-contents {
    margin-top: 80px;
    margin-left: 25px;
  }
  .bann-title {
    font-size: 2.5rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
  }
  .bann-btn {
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding: 2rem;
    margin: 3px;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    background-color: rgba(51, 51, 51, 0.5);
    transition: transform 450ms;
    :hover {
      transform: scale(1.08);
      color: #000;
      background-color: #e6e6e6;
      transition: all 0.2s;
    }
  }
  .bann-dis {
    line-height: 1.3;
    padding-top: 0.5rem;
    font-size: 1.2rem;
    max-width: 360px;
    height: 80px;
  }
 
`;
