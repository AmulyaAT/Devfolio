import './App.css';
import Footer from './Footercomponent/Footer';
import Header from './Headercomponent/Header';
import Main from './Maincomponent/Main';
import Projectone from "./Projectcomponent/Projectone";
import Projectfour from './Projectcomponent/Projectthree';
import Projecttwo from './Projectcomponent/Projecttwo';
import Skills from './Skillscomponent/Skills';
import Certificate from './Certificationscomponent/Certificate';

function App() {
  return (
    <>
    <Header/>
    <Main/>
    <Skills/>
    <Projectone/>
    <Projecttwo/>
    <Projectfour/>
    <Certificate/>
    <Footer/>
    </>
  );
}

export default App;
