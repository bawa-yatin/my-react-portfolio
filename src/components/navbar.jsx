import React, { Component } from "react";
import { Link } from "react-router-dom";
// import icon from "../images/icon.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link
            to="#"
            className="navbar-brand ml-5 h6"
            style={{
              marginRight: "0px",
              marginLeft: "0.8rem",
              paddingBottom: "0",
            }}
          >
            My Portfolio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item h6 mb-0 mx-2 active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item h6 mb-0 mx-2">
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
              {/* <li className="nav-item h6 mb-0 mx-2">
                <Link to="/skills" className="nav-link">
                  Skills
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
