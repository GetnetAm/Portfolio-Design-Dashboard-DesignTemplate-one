
import './App.css';
import Footer from './components/Footer/Footer';
import Contacts from './components/contacts/Contacts';
import Experiance from './components/experices/Experiance';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Testimonial from './components/testimonial/Testimonial';
import Works from './components/works/Works';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experiance />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
