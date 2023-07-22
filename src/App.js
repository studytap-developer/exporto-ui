
import Navbar from './components/navbar';
import './App.css';
import Topnav from './components/topnav';
import Hero from './components/hero';

import Products from './components/products';
import Flow from './components/flow';
import Certifications from './components/certifications';
import Contact from './components/contact';
import Footer from './components/footer';
import About from './components/about';


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