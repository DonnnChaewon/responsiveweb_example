import './App.css';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Navbar from './components/inc/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/inc/Footer';
import Topics from './components/pages/Topics'
import React, { useEffect, useState } from 'react';

function App() {
  // Initialize from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Sync theme to body class and localStorage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <div>
        <Navbar theme={theme} setTheme={setTheme} />

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