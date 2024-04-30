import React, { useState }  from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import './Card_Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FiMenu } from "react-icons/fi";


const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false); 

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); 
  };


  const redirectTOAbout = () => {
    navigate("/About");
  };

  const redirectTOHome = () => {
    navigate("/");
  };

  const redirectTOProtfolio = () => {
    navigate("/Protfolio");
  };

  const redirectTOContact = () => {
    navigate("/Contact");
  };

  return (
    <div className='Card_Main'>
      <div className='Card_start'>
        <div className='Card_logo'>
          <p className='Card_name'> Abhiram.</p>
        </div>
        <div className='Card_Content1' onClick={toggleDropdown}>
          <div className='icon'>
          <FiMenu />
          </div>
          {showDropdown && (
            <div className="dropdown-menu">
              <p onClick={redirectTOHome}>Home</p>
              <p onClick={redirectTOAbout}>About</p>
              <p onClick={redirectTOProtfolio}>Portfolio</p>
              <p>Blog</p>
              <p onClick={redirectTOContact}>Contact</p>
            </div>
          )}
        </div>
        <div className='Card_Content'>
          <p className={location.pathname === '/' ? 'active' : ''} onClick={redirectTOHome}>Home</p>
          <p className={location.pathname === '/About' ? 'active' : ''} onClick={redirectTOAbout}>About</p>
          <p className={location.pathname === '/Protfolio' ? 'active' : ''} onClick={redirectTOProtfolio}>Portfolio</p>
          <p>Blog</p>
          <p className={location.pathname === '/Contact' ? 'active' : ''} onClick={redirectTOContact}>Contact</p>
        </div>
        <div className='Card_Talk'>
          <div>
            <p className='Card_Talk1'>Let's Talk </p>
          </div>
          <div>
            <p><FontAwesomeIcon icon={faArrowRight} /></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
