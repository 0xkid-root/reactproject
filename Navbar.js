import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar=()=>{
    return(
        <>
        <div>
           
                    
        <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">CrypCoinInfo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to="contact">Contact</NavLink>
        </li>
        
        
      </ul>
      <div className='nav_toggler'>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
      
    </div>
  </div>
</nav>
</div>
 
        </>
    );
}
export default Navbar;