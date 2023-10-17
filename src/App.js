import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import coffee from './coffee.gif';
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaNodeJs, FaFire, FaGit } from 'react-icons/fa';
import { BiLogoTailwindCss, BiLogoMongodb } from 'react-icons/bi';
import background from './mini-blog.jpg';
import background_two from './countdown.jpg';
import ytchannel from './ytchannel.jpg';
import Loading from './components/Loading';

import { useState, useEffect } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
    {isLoading ? (
        <Loading />
      ) : (
    <div>
      <Navbar />
      <div className='geral'>
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
            <a href="https://twitter.com/leoz_js" target="_blank" rel="noopener noreferrer">
              <FaTwitter className='twitter' />
            </a>
            <a href="https://www.linkedin.com/in/leleo-oliveira/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='linkedin' />
            </a>
            <a href="https://github.com/leoz11" target="_blank" rel="noopener noreferrer">
              <FaGithub className='github' />
            </a>
            <a href="https://www.youtube.com/channel/UCaHLG1KGomJI72z7UIJdaww" target="_blank" rel="noopener noreferrer">
              <FaYoutube className='youtube' />
            </a>
          </div>
        </div>
        
        <div className="section" id="projetos">
          <h1>Meus Projetos</h1>
          <p>Abaixo encontram-se os meus projetos! Você pode visitá-los e conhecê-los você mesmo.</p>
          <div className="project-container">
            <div className="project-card">
              <img src={background} alt="Projeto Mini Blog" />
              <div className="project-title">Mini Blog</div>
              <div className="project-description">Um projeto de miniblog com React e Firebase.</div>
              <a href="https://mini-blog-leo.vercel.app" target="_blank" rel="noopener noreferrer">
                <button className="visit-button">Visitar</button>
              </a>
            </div>
            <div className="project-card">
              <img src={background_two} alt="Projeto Countdown" />
              <div className="project-title">Countdown</div>
              <div className="project-description">Um projeto de contagem regressiva para o próximo ano com React.</div>
              <a href="https://countdown-to-next-year.vercel.app" target="_blank" rel="noopener noreferrer">
                <button className="visit-button">Visitar</button>
              </a>
            </div>
          </div>
        </div>

        <div className='section' id="skills">
          <h1>Meus conhecimentos</h1>
          <p>Abaixo encontram-se os meus conhecimentos principais!</p>
          <div className="icon-container">
            <div className="tech-card">
              <div className="tech-icon">
                <FaHtml5 className="html-icon" />
              </div>
              <div>HTML5</div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">
                <FaCss3 className="css-icon" />
              </div>
              <div>CSS3</div>
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
                <FaNodeJs className="nodejs-icon" />
              </div>
              <div>Node.js</div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">
                <BiLogoMongodb className="mongodb-icon" />
              </div>
              <div>MongoDB</div>
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

        <div className="section" id="sobre">
          <h2>Um pouco sobre mim...</h2>
          <p>Eu me chamo Leonardo, mas pode me chamar de Léo, eu sou da cidade de Pelotas, no Rio Grande do Sul. Sou apaixonado por programação desde 2018, quando comecei criando plugins para jogos, mas foi em 2021 que eu decidi mergulhar de vez no desenvolvimento web. Minha paixão é criar aplicações responsivas, modernas e intuítivas. Amo participar de projetos, desde o planejamento até a execução, é a minha vibe, transformando ideias em realidade palpável. Se você está em busca de um desenvolvedor que entende tanto de códigos quanto das necessidades humanas, estou pronto para encarar desafios e criar soluções que realmente são úteis.</p>
          <p>Abaixo você encontra minhas redes sociais.</p>       
          <div className="social-icons">
            <a href="https://twitter.com/leoz_js" target="_blank" rel="noopener noreferrer">
              <FaTwitter className='twitter' />
            </a>
            <a href="https://www.linkedin.com/in/leleo-oliveira/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='linkedin' />
            </a>
            <a href="https://github.com/leoz11" target="_blank" rel="noopener noreferrer">
              <FaGithub className='github' />
            </a>
            <a href="https://www.youtube.com/channel/UCaHLG1KGomJI72z7UIJdaww" target="_blank" rel="noopener noreferrer">
              <FaYoutube className='youtube' />
            </a>
          </div>
       </div>

       <div className="section" id="youtube">
          <img src={ytchannel} alt="Canal do YouTube" className="youtube-background" />
          <h1>Meu Canal no YouTube</h1>
          <p>Aqui você encontra vídeos sobre programação e desenvolvimento web.</p>
          <div className="video-container">
            <div className="video-wrapper">
              <div className="youtube-video">
                <iframe 
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/UoPp9DE2X3E" 
                  title="Video 1"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="video-wrapper">
              <div className="youtube-video">
                <iframe 
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/-yu0nBthAdo" 
                  title="Video 2"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
    </div>
  );
};

export default App;
