import React from "react";
import styled from "styled-components";
import DetailBann from "./DetailBann";
import DetailRows from "./DetailRows";

export default function Detail() {
  return (
    <Main>
      <DetailBann />
      <DetailRows />
    </Main>
  );
}

const Main = styled.div`
  * {
    margin: 0;
  }
`;
