import React from 'react';
import { Outlet, Link } from 'react-router-dom';

// basic boostrap nav bar
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-light p-3">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/houses">
              Houses
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

