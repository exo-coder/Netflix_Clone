import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "./API/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";
export default function DetailSingleRow({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl] = useState("");

  //here we wanna set the Detail-Request for just once.
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //youtube react prop
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  //handling on click for showing the youtube 
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Row>
      <h2 className="row-title">{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            onClick={() => handleClick(movie)}
            key={movie.id}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts} />} 
    </Row>
  );
}

const Row = styled.div`
 
  .row-title {
    margin-left: 10px;
    font-size: 23px;
  }

  .row-posters {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 12px;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  .row-poster {
    object-fit: contain;
    width: 100%;
    max-height: 100px;
    margin-right: 10px;
    transition: transform 450ms;
    :hover {
      transform: scale(1.08);
    }
  }

  .row-posterLarge {
    max-height: 250px;
    :hover {
      transform: scale(1.09);
    }
  }
`;
