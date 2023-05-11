import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <Link className="navbar-brand" to="/home">
          Home
        </Link>
        <Link className="navbar-brand" to="/search">
          Search
        </Link>
        <Link className="navbar-brand" to="/houses">
          Houses
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
