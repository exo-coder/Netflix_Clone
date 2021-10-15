import React from "react";
import styled from "styled-components";
import DetailSingleRow from "./DetailSingleRow";
import requests from "./API/Request";

export default function DetailRows() {
  return (
    <Main>
      <DetailSingleRow
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <DetailSingleRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <DetailSingleRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <DetailSingleRow
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <DetailSingleRow
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <DetailSingleRow
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <DetailSingleRow
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <DetailSingleRow
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </Main>
  );
}

const Main = styled.div`
margin: auto;
`;
