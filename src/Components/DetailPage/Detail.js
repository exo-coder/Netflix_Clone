import React from "react";
import styled from "styled-components";
import DetailBann from "./DetailBann";
import DetailRows from "./DetailRows";
import DetailEndPage from "./DetailEndPage";

export default function Detail() {
  return (
    <Main>
      <DetailBann />
      <DetailRows />
      <DetailEndPage />
    </Main>
  );
}

const Main = styled.div`
  * {
    margin: 0;
  }
`;
