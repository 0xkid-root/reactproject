import React from 'react';
import { Route, Routes,Navigate } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

const App =()=> {
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={< Home />}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="*" element={<Navigate to ="/" />}/>


    </Routes>
    <Footer/>
    </>
  );

}
export default App;