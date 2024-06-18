import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Timetable from './components/Timetable';
import Contact from './components/Contact';
import Login from './components/Login';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

function Main() {
  return (
    <>
      <Header />
      <Hero />
      <Programs />
      <Timetable />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
