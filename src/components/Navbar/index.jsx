import styled from "styled-components";
import { Container } from "../../GlobalStyles";
import { FaBars } from "react-icons/fa";
import LogoImage from "../../assets/logo.svg";

const menuItems = [
  { url: "/about", menu: "About" },
  { url: "/carrers", menu: "Carrers" },
  { url: "/events", menu: "Events" },
  { url: "/products", menu: "Products" },
  { url: "/support", menu: "Support" },
];

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <Logo>
          <img src={LogoImage} alt="loopstudios" />
        </Logo>
        <Menu>
          {menuItems.map((menuItem, idx) => (
            <li key={idx}>
              <a href={menuItem.url}>{menuItem.menu}</a>
            </li>
          ))}
        </Menu>
        <MobileMenu />
      </Nav>
    </Container>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 8rem;

  h2 {
    font-size: 4rem;

    font-weight: 300;
    a {
      color: #fff;
    }
  }
`;

const Logo = styled.div``;

const Menu = styled.ul`
  display: none;

  align-items: center;
  font-size: 1.7rem;

  @media only screen and (min-width: 50rem) {
    display: flex;
  }
  li {
    min-height: inherit;
    a {
      padding: 0.5rem 1rem;
      color: var(--white);
    }
  }
`;

const MobileMenu = styled(FaBars)`
  font-size: 3rem;
  color: #fff;
  cursor: pointer;

  @media only screen and (min-width: 50rem) {
    display: none;
  }
`;
