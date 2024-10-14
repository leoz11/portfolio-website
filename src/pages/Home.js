import React from 'react';
import styled from 'styled-components';
import SocialLinks from '../components/SocialLinks';
import CVButton from '../components/CVButton';
import { Link } from 'react-router-dom';

const MainContent = styled.main`
  text-align: left;
  max-width: 800px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.25rem;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-weight: normal;
  color: ${(props) => props.theme.accent};
`;

const LinksSection = styled.div`
  margin-top: 2rem;
`;

const LinkRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Home = () => {
  return (
    <MainContent>
      <Title>Leonardo Oliveira</Title>
      <Subtitle>Desenvolvedor de Software</Subtitle>
      <SocialLinks />
      <LinksSection>
        <LinkRow>
          <StyledLink to="/projects">Conheça meus projetos →</StyledLink>
        </LinkRow>
        <LinkRow>
          <StyledLink to="/about">Conheça-me →</StyledLink>
        </LinkRow>
      </LinksSection>
      <CVButton href="https://docs.google.com/document/d/16GosgHP_JSRZFp5Er8e4mkm9hVqYy5i-Yg4Y5_vkBMQ/edit?usp=sharing" />
    </MainContent>
  );
};

export default Home;
