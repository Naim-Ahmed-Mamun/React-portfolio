import React, { useEffect } from 'react';
import Home from './components/Home/Home/Home';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleProject from './components/SingleProject/SingleProject';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration:1600
    });
  },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/project/:id" element={<SingleProject></SingleProject>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;