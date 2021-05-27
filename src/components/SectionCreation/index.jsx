import React from "react";
import styled from "styled-components";
import { Container } from "../../GlobalStyles";
import CreationItem from "./CreationItem";

const SectionCreation = () => {
  return (
    <SectionContainer>
      <SectionHeding>
        <h2>our creation</h2>
        <Button>See All</Button>
      </SectionHeding>
      <CreationItemContainer>
        <CreationItem />
      </CreationItemContainer>
    </SectionContainer>
  );
};

export default SectionCreation;

const SectionContainer = styled(Container)`
  padding: 8rem 0;
`;
const SectionHeding = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: clamp(1.6rem, 5vw, 5rem);
    text-transform: uppercase;
  }
`;
const Button = styled.button`
  font-size: 1.6rem;
  font-family: var(--button-font);
  text-transform: uppercase;
  border: 0.2rem solid var(--black);
  background-color: #fff;
  padding: 1.2rem 3rem;
  cursor: pointer;
  letter-spacing: 0.5rem;
`;

const CreationItemContainer = styled.ul`
  position: relative;
  padding: 3rem 0;
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap; */

  @media only screen and (min-width: 70.43rem) {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
  }
`;
