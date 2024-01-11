import logo from './logo.svg';
import './index.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-gray-400 bg-black body-font">
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactMe/>  
      <Footer/>
    </div>
  );    
}

export default App;
