import React from 'react';
import { Link } from 'react-router-dom';
import { GiHorseHead } from 'react-icons/gi';
import { FaUserFriends } from 'react-icons/fa';
import { BiShuffle } from 'react-icons/bi';
import logo from './ihsalogo.png';
import './navbar.css';

const iconStyle = {
  fontSize: '20px',
};

const linkStyle = {
  fontSize: '12px',
};

const NavBar = () => {
 

  return (
    <div className="navbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul className="menu">
       <li>
              <Link to="/manage-horses" style={linkStyle}>
                <GiHorseHead style={iconStyle} /> Manage Horses
              </Link>
            </li>
            <li>
              <Link to="/manage-riders" style={linkStyle}>
                <FaUserFriends style={iconStyle} /> Manage Riders
              </Link>
            </li>
            
            <li>
              <Link to="/" style={linkStyle}>
                <BiShuffle style={iconStyle} /> Randomize
              </Link>
            </li>
         
      </ul>
    </div>
  );
};

export default NavBar;
