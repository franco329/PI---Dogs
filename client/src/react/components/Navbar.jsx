import React from "react";
import logo from "../../images/logo-breed.JPG";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <a href='http://localhost:3000/'>
          <img src={logo} alt='logo' className='logo' />
        </a>
        <div className='btnContenedor'>
          <a href='http://localhost:3000/' className='btn btn-inicio btn-2'>
            Landing Page
            <span></span>
            <span></span>
          </a>
          <a href='http://localhost:3000/home' className='btn btn-inicio btn-2'>
            Home
            <span></span>
            <span></span>
          </a>
          <a
            href='http://localhost:3000/home/form'
            className='btn btn-inicio btn-2'
          >
            Create breed
            <span></span>
            <span></span>
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
