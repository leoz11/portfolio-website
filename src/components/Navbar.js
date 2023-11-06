import React from 'react';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Link } from 'react-scroll';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 400px;
  background-color: ${(props) => (props.theme === 'dark' ? '#09090B' : '#fff')};
  transition: background-color 0.5s;

  @media (max-width: 1200px) {
    padding: 30px 100px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 576px) {
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Roboto', sans-serif;
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;
  font-family: 'Roboto', sans-serif;
`;

const Name = styled.span`
  font-size: 1.8em;

  @media (max-width: 576px) {
    display: none;
  }
`;

const ThemeButton = styled.button`
  background: ${(props) => (props.theme === 'dark' ? '#09090B' : '#fff')};
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#09090B')};
  border: 1px solid gray;
  cursor: pointer;
  font-size: 1.4em;
  border-radius: 10%;
  padding: 5px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, opacity 0.3s;
  
  &:hover {
    opacity: 0.8;
  }
`;

const MoonIcon = styled(FiMoon)`
  color: purple;
`;

const SunIcon = styled(FiSun)`
  color: yellow;
`;

const NavbarOption = styled.span`
  font-size: 1.2em;
  position: relative;
  cursor: pointer;
  
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: purple;
    transition: width 0.3s;
  }
  
  &:hover:before {
    width: 100%;
  }
`;

const Navbar = ({ theme, toggleTheme }) => {
    return (
      <NavbarContainer theme={theme}>
        <NavbarLeft>
          <Name>Leonardo</Name>
        </NavbarLeft>
        <NavbarRight>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <NavbarOption>Home</NavbarOption>
          </Link>
          <Link
            to="projetos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <NavbarOption>Projetos</NavbarOption>
          </Link>
          <Link
            to="contato"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <NavbarOption>Contato</NavbarOption>
          </Link>
          <ThemeButton theme={theme} onClick={toggleTheme}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </ThemeButton>
        </NavbarRight>
      </NavbarContainer>
    );
  };
  
  export default Navbar;
