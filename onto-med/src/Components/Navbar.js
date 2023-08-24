import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./CssFiles/colors.css";
import"./Buttons/button.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const shadowStyle = {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
     // Lighter shadow
  };
  
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary px-5"
        style={shadowStyle}
      >
        <div className="container-fluid " >
          <NavLink className="navbar-brand " to="#">
            OntoMed
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-3">
              {" "}
              {/* Add the mr-3 className here */}
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button
                className="btn  me-2 btn-mg" // Adding btn-lg for larger size and btn-danger for red color
                type="submit"
              >
               Register / SignUp
              </button>
              <button
                className="btn-outline btn-mg " // Adding btn-lg for larger size and border-0 for no border
                type="submit"
                
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
