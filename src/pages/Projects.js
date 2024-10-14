import React from 'react';
import styled from 'styled-components';
import projectImage from '../assets/notedzv2.jpg';
import projectImageTwo from '../assets/commitz.jpg';
import { FiExternalLink } from 'react-icons/fi';

const ProjectsWrapper = styled.div`
  text-align: left;
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 3vh;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const ProjectItem = styled.div`
  background-color: ${(props) => props.theme.cardBackground};
  padding: 1.5rem;
  border-radius: 5px;
  margin-bottom: 2rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TechList = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const TechItem = styled.span`
  background-color: transparent;
  color: ${(props) => props.theme.text};
  padding: 0.3rem 0.6rem;
  border: 1px solid ${(props) => props.theme.text};
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const VisitButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.text};
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  border: 1px solid ${(props) => props.theme.text};
  transition: background-color 0.3s, color 0.3s;
  flex: 1;
  justify-content: center;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.background};
  }

  @media (max-width: 768px) {
    padding: 0.2rem 1rem;
    font-size: 0.9rem;
  }
`;

const VisitButtonText = styled.span`
  margin-right: 0.5rem;
`;

const ProjectUnderline = styled.u`
  text-decoration-color: purple;
  text-decoration-thickness: 2px;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex; 
  gap: 1rem; 
  flex-wrap: nowrap;
  margin-bottom: 1.5rem;
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <Title>Meus Projetos</Title>
      <ProjectItem>
        <h1>Notedz</h1>
        <ProjectImage src={projectImage} alt="Notedz Cover" />
        <ProjectDescription>
          O <ProjectUnderline>Notedz</ProjectUnderline> é um lugar onde qualquer pessoa pode criar anotações de forma rápida e prática. Sem coletar informação nenhuma do usuário, permitindo que o mesmo tenha o máximo de privacidade e possa utilizar a aplicação com segurança e extraíndo 100% do potencial dela.
        </ProjectDescription>
        <TechList>
          <TechItem>React.js</TechItem>
          <TechItem>Styled-Components</TechItem>
          <TechItem>LocalStorage</TechItem>
        </TechList>
        <ButtonGroup>
          <VisitButton href="https://notedz.vercel.app" target="_blank" rel="noopener noreferrer">
            <VisitButtonText>Visitar projeto</VisitButtonText>
            <FiExternalLink size={16} />
          </VisitButton>
          <VisitButton href="https://github.com/leoz11/notedz" target="_blank" rel="noopener noreferrer">
            <VisitButtonText>Ver código</VisitButtonText>
            <FiExternalLink size={16} />
          </VisitButton>
        </ButtonGroup>
      </ProjectItem>
      <ProjectItem>
        <h1>Commitz</h1>
        <ProjectImage src={projectImageTwo} alt="Commitz Cover" />
        <ProjectDescription>
          O <ProjectUnderline>Commitz</ProjectUnderline> é um lugar onde qualquer pessoa pode controlar seus metas anuais de maneira rápida e prática, tendo informações de quantas metas já completou e de quanto tempo falta para o ano acabar. Sem coletar informação nenhuma do usuário, permitindo que o mesmo tenha o máximo de privacidade e possa utilizar a aplicação com segurança e extraíndo 100% do potencial dela.
        </ProjectDescription>
        <TechList>
          <TechItem>React.js</TechItem>
          <TechItem>TailwindCSS</TechItem>
          <TechItem>LocalStorage</TechItem>
        </TechList>
        <ButtonGroup>
          <VisitButton href="https://commitzz.vercel.app" target="_blank" rel="noopener noreferrer">
            <VisitButtonText>Visitar projeto</VisitButtonText>
            <FiExternalLink size={16} />
          </VisitButton>
          <VisitButton href="https://github.com/leoz11/notedz" target="_blank" rel="noopener noreferrer">
            <VisitButtonText>Ver código</VisitButtonText>
            <FiExternalLink size={16} />
          </VisitButton>
        </ButtonGroup>
      </ProjectItem>
    </ProjectsWrapper>
  );
};

export default Projects;
