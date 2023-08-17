import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./CssFiles/colors.css";
import"./Buttons/button.css";

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
        <div class="container-fluid " >
          <a class="navbar-brand " href="#">
            OntoMed
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mr-3">
              {" "}
              {/* Add the mr-3 class here */}
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button
                class="btn  me-2 btn-mg" // Adding btn-lg for larger size and btn-danger for red color
                type="submit"
              >
               Become an Expert
              </button>
              <button
                class="btn-outline btn-mg " // Adding btn-lg for larger size and border-0 for no border
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
