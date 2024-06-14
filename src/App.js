
import './App.css';
import Experiance from './components/experices/Experiance';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experiance />
    </div>
  );
}

export default App;
