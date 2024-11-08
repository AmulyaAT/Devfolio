import './App.css';
import Footer from './Footercomponent/Footer';
import Header from './Headercomponent/Header';
import Main from './Maincomponent/Main';
import {Project} from './Projectcomponent/Project';
import Skills from './Skillscomponent/Skills';
import {Certificate} from './Certificationscomponent/Certificate';
import Contact from './Contactformcomponent/Contactme';
import Time from './Timelinecomponent/Timeline';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;