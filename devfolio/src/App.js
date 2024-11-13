import React, { lazy, Suspense } from 'react';
import './App.css';
const Footer = lazy(() => import('./Footercomponent/Footer'));
const Header = lazy(() => import('./Headercomponent/Header'));
const Main = lazy(() => import('./Maincomponent/Main'));
const Project = lazy(() => import('./Projectcomponent/Project'));
const Skills = lazy(() => import('./Skillscomponent/Skills'));
const Certificate = lazy(() => import('./Certificationscomponent/Certificate'));
const Contact = lazy(() => import('./Contactformcomponent/Contactme'));
const Time = lazy(() => import('./Timelinecomponent/Timeline'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <main>
        <div id="main">
          <Main />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="Journey">
          <Time />
        </div>
        <div id="project">
          <Project />
        </div>
        <div id="certificate">
          <Certificate />
        </div>
        <div id="contactme">
          <Contact />
        </div>
      </main>
      <Footer />
    </Suspense>
  );
}

export default App;
