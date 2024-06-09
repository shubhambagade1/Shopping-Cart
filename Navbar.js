import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  const handleOffcanvasClick = () => {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const offcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasElement) || new window.bootstrap.Offcanvas(offcanvasElement);
    offcanvas.hide();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand text-white" to="/">My Shop</Link>
          <div className="collapse navbar-collapse d-none d-lg-block" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link main-link" to="/" onClick={handleOffcanvasClick}>Shopping Page</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link main-link" to="/cart" onClick={handleOffcanvasClick}>Cart</Link>
              </li>
            </ul>
          </div>
        

        <div className="offcanvas offcanvas-start d-lg-none" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">My Shop</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleOffcanvasClick}>Shopping Page</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart" onClick={handleOffcanvasClick}>Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>

  );
};

export default Navbar;
