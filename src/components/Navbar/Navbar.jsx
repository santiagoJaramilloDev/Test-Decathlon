import React from "react";
import { Link } from "react-router-dom";
import LoginBtn from "../Login/Login";
import LogoutBtn from "../Login/Logout";
import AuthenticationButton from "../Login/Authentication";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Decathlon
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <AuthenticationButton></AuthenticationButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
