import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';


const Navbar = () => (
<div className="container-navbar">
    <div className="conatiner-title">
    <NavLink to="/" className="navbar-title">
    Bootcamp DevSuperior
    </NavLink>
    
    </div>

</div>

);

export default Navbar;