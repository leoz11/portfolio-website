import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import Loading from './components/Loading';
import './App.css';

import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Navbar from './components/Navbar';

import miniblogimg from './assets/mini-blog.jpg';
import countdownimg from './assets/countdown.jpg';

function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const openMiniBlogLink = () => {
    window.open('https://miniblog-x.vercel.app/', '_blank');
  };

  const openCountdownLink = () => {
    window.open('https://countdown-to-next-year.vercel.app/', '_blank');
  };

  return (
    <>
      <GlobalStyle theme={theme} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <div className='portfolio'>
            <div className='home'>
              <div className='title'>
                Leonardo Oliveira, desenvolvedor frontend
                <div className='description'>
                  Sou fascinado em desenvolver interfaces intuitivas e responsivas, utilizando:{' '}
                  <b>HTML5</b>, <b>CSS3</b>, <b>ReactJS</b>, <b>Tailwind</b> & <b>Bootstrap</b>, tendo
                  conhecimentos também com <b>NodeJS</b>, <b>MongoDB</b>, <b>Firebase</b> e <b>GIT</b>.
                  Estou sempre disposto e pronto para evoluir, conhecer novas tecnologias e aplicá-las
                  em meus projetos.
                </div>
              </div>
              <div className='social-buttons'>
                <a
                  href='https://twitter.com/leoz_js'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='social-button twitter'
                >
                  <FaTwitter size={30} />
                </a>
                <a
                  href='https://github.com/leoz11'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='social-button github'
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href='https://www.linkedin.com/in/leleo-oliveira/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='social-button linkedin'
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href='https://www.youtube.com/channel/UCaHLG1KGomJI72z7UIJdaww'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='social-button youtube'
                >
                  <FaYoutube size={30} />
                </a>
              </div>
            </div>
            <div className='projects'>
              <h1>Meus projetos</h1>
              <p>Conheça meus projetos! Clicando neles você pode visitá-los.</p>
              <div className='cards'>
                <div className='project' onClick={openMiniBlogLink}>
                  <img src={miniblogimg} alt='Mini-blog' />
                  <div className='project-overlay'>
                    <span className='project-name'>MiniBlog</span>
                  </div>
                </div>
                <div className='project' onClick={openCountdownLink}>
                  <img src={countdownimg} alt='Countdown' />
                  <div className='project-overlay'>
                    <span className='project-name'>Countdown</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='contact'></div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
