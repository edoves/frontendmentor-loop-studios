import styled from "styled-components";

import Navbar from "../components/Navbar";
import heroImage from "../assets/desktop/image-hero.jpg";
import { Container } from "../GlobalStyles";

const TheHeader = () => {
  return (
    <Header>
      <Navbar />
      <Container>
        <div className="header__text">
          <h1>immersive experiences that deliver</h1>
        </div>
      </Container>
    </Header>
  );
};

export default TheHeader;

const Header = styled.header`
  background-image: url("${heroImage}");
  background-size: cover;
  background-position: 90% -10px;
  background-repeat: no-repeat;
  min-height: 70vh;

  .header__text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 50rem;
    color: #fff;
    width: 50%;
    max-width: 53rem;
    h1 {
      font-size: clamp(1.6rem, 10vw, 7rem);
      text-transform: uppercase;
      border: 0.3rem solid #fff;
      padding: 2.5rem 0 1rem 2rem;
    }
  }
`;
