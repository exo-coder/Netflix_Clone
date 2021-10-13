import React , {useState,useEffect} from "react";
import styled from "styled-components";

const useMediaQuery = (query) => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  return matches;
};

export default function HomeMiddle({ data }) {
  const isRowBased = useMediaQuery("(max-width: 1200px)");
  return (
    <>
      {data.map((item) => {
        const { id, title, subTitle, image, direction } = item;
        //there is some media query customizing which i made by some hostum kooks in ./hooks
        const styles = {
          container: (isRowBased) => ({
            display: "flex",
            flexDirection: isRowBased ? "column" : direction,
          }),
        };
        return (
          <Main key={id}>
            <div className="section" style={styles.container(isRowBased)}>
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
  }

  .texts {
    max-width: 650px;

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
    max-width: 500px;

    @media (max-width: 768px) {
      max-width: 350px;
    }
  }
`;
