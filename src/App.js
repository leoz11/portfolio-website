import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import coffee from './coffee.gif';
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaNodeJs, FaDatabase, FaFire, FaGit } from 'react-icons/fa';
import { BiLogoTailwindCss } from 'react-icons/bi';

import background from './mini-blog.jpg'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='geral'>
        {/* Seção Inicial */}
        <div className="section" id="home">
          <div>
            <img src={coffee} alt="" />
          </div>
          <div className='title'>LEONARDO OLIVEIRA</div>
          <i className='sub-title'>Desenvolvedor Frontend</i>
          <p className='home-text'>
            Sou fascinado em desenvolver interfaces intuitivas e responsivas, utilizando: <b>HTML5</b>, <b>CSS3</b>, <b>ReactJS</b>, <b>Tailwind</b> & <b>Bootstrap</b>, tendo conhecimentos também com <b>NodeJS</b>, <b>MongoDB</b>, <b>Firebase</b> e <b>GIT</b>. Estou sempre disposto e pronto para evoluir, conhecer novas tecnologias e aplicá-las em meus projetos.
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
        
        {/* Seção de Projetos */}
        <div className="section" id="projetos">
          <div className="cards-container">
            <div className="card">
              <h3>Mini-Blog</h3>
              <img className='background' src={background} alt="" />
              <p>Projeto "Mini-Blog" feito utilizando REACT.JS e Firebase.</p>
              <a href="URL_DO_PROJETO" target="_blank" rel="noopener noreferrer" className="visit-button">Visitar</a>
            </div>
            {/* Projeto 2 */}
            <div className="card">
              <h3>Projeto 2</h3>
              <p>Descrição do Projeto 2</p>
              <a href="URL_DO_PROJETO" target="_blank" rel="noopener noreferrer" className="visit-button">Visitar</a>
            </div>
            {/* Projeto 3 */}
            <div className="card">
              <h3>Projeto 3</h3>
              <p>Descrição do Projeto 3</p>
              <a href="URL_DO_PROJETO" target="_blank" rel="noopener noreferrer" className="visit-button">Visitar</a>
            </div>
          </div>
          <div className="icon-container">
            <div className="tech-card">
              <div className="tech-icon">
                <FaHtml5 className="html-icon" />
              </div>
              <div>HTML</div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">
                <FaCss3 className="css-icon" />
              </div>
              <div>CSS</div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">
                <FaJs className="js-icon" />
              </div>
              <div>JavaScript</div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">
                <FaReact className="react-icon" />
              </div>
              <div>React</div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">
                <BiLogoTailwindCss className="tailwind-icon" />
              </div>
              <div>Tailwind</div>
            </div>
        </div>
        <div className="icon-container">
        <div className="tech-card">
              <div className="tech-icon">
                <FaBootstrap className="bootstrap-icon" />
              </div>
              <div>Bootstrap</div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">
                <FaNodeJs className="node-icon" />
              </div>
              <div>Node.js</div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">
                <FaDatabase className="db-icon" />
              </div>
              <div>Database</div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">
                <FaFire className="firebase-icon" />
              </div>
              <div>Firebase</div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">
                <FaGit className="git-icon" />
              </div>
              <div>Git</div>
            </div>
          </div>
        </div>

        {/* Seção Sobre */}
        <div className="section" id="sobre">
          <h2>Sobre</h2>
          <p>Meu nome é Leonardo e sou um desenvolvedor web apaixonado por criar aplicações incríveis com tecnologias modernas.</p>
        </div>

        {/* Seção de Contato */}
        <div className="section" id="contato">
          <h2>Contato</h2>
          <p>Você pode entrar em contato comigo através do email: leonardo@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default App;
