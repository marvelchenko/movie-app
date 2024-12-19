import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header  from './components/header/Header';
import HomePage from './home/HomePage';
import Footer from './components/footer/Footer';


function App() {
 
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route  path='/' element={<HomePage />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
