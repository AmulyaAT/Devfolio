import './App.css';
import Footer from './Footercomponent/Footer';
import Header from './Headercomponent/Header';
import Main from './Maincomponent/Main';
import {Project} from "./Projectcomponent/Project"
import Skills from './Skillscomponent/Skills';
import {Certificate} from './Certificationscomponent/Certificate';
import Contact from './Contactformcomponent/Contactme';

function App() {
  return (
    <>
    <Header/>
    <Main/>
    <Skills/>
    <Project/>
    <Certificate/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
