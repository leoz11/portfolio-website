import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="section" id="home">
      <h1 className='title'><span className="angle-brackets">&lt;</span>LEONARDO OLIVEIRA<span className="angle-brackets">&gt;</span></h1>
        <h1><i>Desenvolvedor Frontend</i></h1>
        <p>Sou fascinado em desenvolver interfaces intuitivas e responsivas, utilizando: <br />
          <b>HTML5</b>, <b>CSS3</b>, <b>ReactJS</b> e <b>Bootstrap</b>, tendo conhecimentos também com<br />
          <b>NodeJS</b>, <b>MongoDB</b> e <b>GIT</b>. Estou sempre disposto e pronto para evoluir,<br />
          conhecer novas tecnologias e aplicá-las em meus projetos.
        </p>
        <div className="social-icons">
          <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className='twitter' />
          </a>
          <a href="https://www.linkedin.com/in/your_linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='linkedin' />
          </a>
          <a href="https://github.com/your_github" target="_blank" rel="noopener noreferrer">
            <FaGithub className='github' />
          </a>
          <a href="https://www.youtube.com/your_youtube" target="_blank" rel="noopener noreferrer">
            <FaYoutube className='youtube' />
          </a>
        </div>
      </div>
      <div className="section" id="conhecimentos">
        <h2>Habilidades</h2>
        <p>Meu nome é Leonardo e sou um desenvolvedor web apaixonado por criar aplicações incríveis com tecnologias modernas.</p>
      </div>
      <div className="section" id="sobre">
        <h2>Sobre</h2>
        <p>Meu nome é Leonardo e sou um desenvolvedor web apaixonado por criar aplicações incríveis com tecnologias modernas.</p>
      </div>
      <div className="section" id="projetos">
        <h2>Projetos</h2>
        <ul>
          <li>
            <strong>Projeto 1:</strong> Site de e-commerce em React.js
            <p>Um site de e-commerce com carrinho de compras e integração com API de pagamento.</p>
          </li>
          <li>
            <strong>Projeto 2:</strong> Aplicativo de lista de tarefas em React Native
            <p>Um aplicativo mobile para gerenciar suas tarefas diárias de forma simples e intuitiva.</p>
          </li>
        </ul>
      </div>
      <div className="section" id="contato">
        <h2>Contato</h2>
        <p>Você pode entrar em contato comigo através do email: leonardo@example.com</p>
      </div>
    </div>
  );
};

export default App;
