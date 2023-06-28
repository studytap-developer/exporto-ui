
import Navbar from './components/Navbar';
import './App.css';
import Topnav from './components/Topnav';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Flow from './components/Flow';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
   <>
   <Topnav/>
   <Navbar />
   <Hero/>
   <About/>
   <Products/>
   <Flow/>
   <Certifications/>
   <Contact/>
   <Footer/>
   
   </>
  );
}

export default App;