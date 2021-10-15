import React, { useState } from "react";
import styled from "styled-components";
import HomeBann from "./HomeBann";
import HomeMiddle from "./HomeMiddle";
import HomeEndFaq from "./HomeEndFaq";
import HomeEndLinks from "./HomeEndLinks";
import DataFixture from "../../Data_Fixture/midpageDatas"; //mid page datas
import { faqData } from "../../Data_Fixture/faqData"; //Faq Questions datas

export default function Home() {
  const [data] = useState(DataFixture); //mid page datas
  const [faqDataEndPage] = useState(faqData); //end page datas

  return (
    <Main>
      <HomeBann />
      <HomeMiddle data={data} />
      <HomeEndFaq faqDataEndPage={faqDataEndPage} />
      <HomeEndLinks />
    </Main>
  );
}

//CSS-styling
const Main = styled.div`
  margin: auto;
  align-items: center;
`;
