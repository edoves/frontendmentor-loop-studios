import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { creationData } from "./data";

const CreationItem = () => {
  const [isMobile, setIsMobile] = useState(false);

  const mobileView = useCallback(() => {
    if (window.innerWidth <= 1127) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", mobileView);
  }, [mobileView]);

  return (
    <>
      {creationData.map((item, idx) => (
        <Item key={idx} isMobile={isMobile} item={item}>
          <h3>{item.title}</h3>
        </Item>
      ))}
    </>
  );
};

export default CreationItem;

const Item = styled.li`
  ${({ item }) => console.log(item.desktopBgImage)};

  background-image: ${({ isMobile, item }) =>
    !isMobile ? `url(${item.desktopBgImage})` : `url(${item.mobilegImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: ${({ isMobile }) => (!isMobile ? "45rem" : "15rem")};
  color: #fff;
  cursor: pointer;
  /* flex: 0.4; */
  margin: 1rem;
  position: relative;

  @media only screen and (max-width: 70.43rem) {
    margin-bottom: 2rem;
  }

  /* flex: 1 1 calc((100rem - 100%) * 999); */

  h3 {
    text-transform: uppercase;
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
  }
`;
