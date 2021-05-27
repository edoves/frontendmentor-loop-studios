import React from "react";
import styled from "styled-components";
import { Container } from "../../GlobalStyles";

import Interactive from "../../assets/desktop/image-interactive.jpg";

const SectionInfo = () => {
  return (
    <SectionContainer>
      <Row>
        <FeaturedImage className="flex">
          <img src={Interactive} alt="Interactive" />
        </FeaturedImage>
        <FeaturedContent className="flex">
          <h2>the leader in interactive vr</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed business through
            digital experiences that bind to their brand.
          </p>
        </FeaturedContent>
      </Row>
    </SectionContainer>
  );
};

export default SectionInfo;

const SectionContainer = styled(Container)`
  padding-top: 8rem;

  margin-right: auto;
  margin-left: auto;

  @media only screen and (min-width: 64em) {
    /* width: 70%; */
  }
`;

const Row = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (min-width: 64em) {
    /* padding-right: 10rem;
    padding-left: 10rem; */
  }
`;
const FeaturedImage = styled.div`
  img {
    width: 100%;
    display: block;
  }
`;
const FeaturedContent = styled.div`
  font-size: clamp(1.6rem, 2vw, 1.8rem);
  background-color: #fff;
  color: #000;
  padding: 5rem;

  @media only screen and (min-width: 64em) {
    position: absolute;
    /* width: 42%;
    bottom: -4rem;
    left: 40%; */
    width: 55%;
    bottom: -4rem;
    left: 48%;
  }
  @media only screen and (max-width: 63em) {
    text-align: center;
  }
  h2 {
    font-size: clamp(1.6rem, 5vw, 5rem);
    text-transform: uppercase;
  }

  p {
    color: var(--dark-gray);
  }
`;
