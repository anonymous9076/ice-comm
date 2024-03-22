import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="nav container-fluid">
          <div>
            <img
              src="./pics/logo1.png"
              alt="Logo"
              title="BCA"
              width="50em"
              height="45em"
              className="imga mx-3"
            />
            <h2 className="imga mx-3 neon">B.C.A</h2>
          </div>
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
            <ul className="navbar-nav mb-lg-0 mx-4" id="list-on-nav">
             
              <li className="nav-item">
                <Link
                  className="nav-link active "
                  
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                {/* flavour */}
                <div className="dropdown ">
                  <button style={{ color: '#FFFDD0' ,fontWeight:500}}
                    className="dropdown-toggle  my-2"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    Flavour
                  </button>
                  <ul
                    className="dropdown-menu"
                    style={{ backgroundColor: "inherit" }}
                  >
                    <li>
                      <Link className="dropdown-item " to="/cupflavour">
                        Cup Flavour
                      </Link>
                    </li>
                    {/* <li><Link className="dropdown-item" to="/popflavour">Pop Flavour</Link></li> */}
                    <li>
                      <Link className="dropdown-item " to="/coneflavour">
                        Cone Flavour
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item -nav">
                <Link className="nav-link active "  to="/Receipt">
                  Receipt
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active "  to="/ContactUs">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
