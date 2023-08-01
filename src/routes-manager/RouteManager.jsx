import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';


export default function RouteManager() {
  return (
   <Router>
    <NavBar/>
        <Routes>
            <Route path='/' element={
               <Home/>
            } />
        </Routes>
        <Footer/>
   </Router>
  )
}
