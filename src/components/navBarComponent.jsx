// eslint-disable-next-line
import React, { Component } from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

//Stateless functional component
const NavBar = ({ totalItem }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">
        <img
          className="navbar-brand-img m-2"
          src="https://picsum.photos/30"
          alt=""
        />
        La'Carte
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <span className="nav-link">
              <NavLink to="/">Home</NavLink>
              <span className="sr-only">(current)</span>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <NavLink to="/cart">Cart</NavLink>
            </span>
          </li>
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Other..
            </span>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <span className="dropdown-item">
                <NavLink to="/nested-user">Nested routing</NavLink>
              </span>
              <span className="dropdown-item">
                <NavLink to="/contact">Fetch API</NavLink>
              </span>
            </div>
          </li>
          <li className="nav-item">
            <span className="nav-link disabled">Disabled</span>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <span>
            <img src="https://image.flaticon.com/icons/svg/2/2772.svg" alt="" />
            <span className="badge badge-pill badge-secondary">
              {totalItem}
            </span>
          </span>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
