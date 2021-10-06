import React from "react";
import styled from "styled-components";

export default function HomeEndLinks() {
  return (
    <Container>
      <div className="border" />
      <div className="all-Over">
        <Title>Questions? Contact us.</Title>
        <Break />
        <Row>
          <Column>
            <Link href="">FAQ</Link>
            <Link href="">Investor Relations</Link>
            <Link href="">Ways to Watch</Link>
            <Link href="">Corporate Information</Link>
            <Link href="">Netflix Originals</Link>
          </Column>

          <Column>
            <Link href="">Help Centre</Link>
            <Link href="">Jobs</Link>
            <Link href="">Terms of Use</Link>
            <Link href="">Contact Us</Link>
          </Column>

          <Column>
            <Link href="">Account</Link>
            <Link href="">Redeem gift cards</Link>
            <Link href="">Privacy</Link>
            <Link href="">Speed Test</Link>
          </Column>

          <Column>
            <Link href="">Media Centre</Link>
            <Link href="">Buy gift cards</Link>
            <Link href="">Cookie Preferences</Link>
            <Link href="">Legal Notices</Link>
          </Column>
        </Row>
        <Break />
        <Text>Netflix Tehran</Text>
      </div>
    </Container>
  );
}

//...
const Container = styled.div`
    border-top: 8px solid #222;


  .all-Over {
  display: flex;
  padding: 70px 0;
  margin: auto;
  max-width: 900px;
  flex-direction: column;
  }

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
