import './App.css';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Navbar from './components/inc/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/inc/Footer';
import Topics from './components/pages/Topics'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;