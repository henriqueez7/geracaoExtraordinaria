import React from 'react';
import Header from './components/Header.jsx';
import './App.css'; 
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Carrosel from './components/Carrosel.jsx';
import Location from './components/Location.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Carrosel />
      <Location />
      <Contact />
    </div>
    
  );
}

export default App;