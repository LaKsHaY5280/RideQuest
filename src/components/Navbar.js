import React from "react";
import logo from "./logo.png";
import "./Navbarsty.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/Combcomp");
  };

  return (
    <div className="alwon">
      <nav
        className={`navbar navbar-expand-lg ${
          props.mode === "dark" ? "navbar-dark" : ""
        } bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/Combcomp"
            onClick={handleLogoClick}
          >
            <img src={logo} alt="" />
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Form">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Fares">
                  Fares
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch">
            <div
              className={`form-check form-switch mx-2 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleTheme}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "light" ? "Light" : "Dark"} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
