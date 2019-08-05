import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <NavLink exact className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">Logotype</NavLink>
        </nav>
    );
};

export default Navbar;