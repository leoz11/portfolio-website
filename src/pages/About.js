import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CVButton from '../components/CVButton';

const AboutWrapper = styled.div`
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

const Content = styled.div`
  font-size: 1rem;
  line-height: 1.6;

  p {
    margin-bottom: 1rem;
  }
`;

const EmailLink = styled.a`
  color: ${(props) => props.theme.accent};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <Title>Leonardo Oliveira</Title>
      <Subtitle>Desenvolvedor de Software</Subtitle>
      <Content>
        <p>
          Sou um engenheiro de software brasileiro de 19 anos, apaixonado por criar sites 
          intuitivos, bonitos e que ajudam as pessoas. Tenho uma fascinação pela tecnologia 
          desde criança e adoro transformar essa paixão em projetos que fazem a diferença.
        </p>
        <p>
          Meu objetivo é projetar e construir sites que não apenas pareçam ótimos, mas 
          também proporcionem uma experiência de usuário perfeita. Acredito no poder da 
          tecnologia para resolver problemas e melhorar a vida das pessoas, e estou 
          comprometido em contribuir para essa missão através do meu trabalho.
        </p>
        <p>
          Quando não estou programando, gosto de passar um tempo com a minha família,
          jogar futebol, videogames, treinar e ler.
        </p>
        <p>
          Obrigado por visitar meu site. Caso queira você pode entrar em contato comigo através do e-mail:{' '}
          <EmailLink href="mailto:leo11.contato@gmail.com">leo11.contato@gmail.com</EmailLink>.
        </p>
        <LinksSection>
        <LinkRow>
          <StyledLink to="/projects">Conheça meus projetos →</StyledLink>
        </LinkRow>
      </LinksSection>
      <CVButton href="https://docs.google.com/document/d/16GosgHP_JSRZFp5Er8e4mkm9hVqYy5i-Yg4Y5_vkBMQ/edit?usp=sharing" />
      </Content>
    </AboutWrapper>
  );
};

export default About;