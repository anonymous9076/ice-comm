import React,{useState,useEffect} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { app } from './Firebase'
import { getAuth, onAuthStateChanged ,signOut} from 'firebase/auth'
const Navbar = () => {
  const auth = getAuth(app)
  const [user, setUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
    });
  }, [auth])
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
                  className="nav-link active neon"
                  style={{ color: 'white' }}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                {/* flavour */}
                <div className="dropdown neon">
                  <button style={{ color: 'white' }}
                    className="dropdown-toggle neon my-2"
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
                      <Link className="dropdown-item neon" to="/cupflavour">
                        Cup Flavour
                      </Link>
                    </li>
                    {/* <li><Link className="dropdown-item" to="/popflavour">Pop Flavour</Link></li> */}
                    <li>
                      <Link className="dropdown-item neon" to="/coneflavour">
                        Cone Flavour
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item neon-nav">
                <Link className="nav-link active neon" style={{ color: 'white' }} to="/Receipt">
                  Receipt
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active  neon" style={{ color: 'white' }} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active neon" style={{ color: 'white' }} to="/ContactUs">
                  Contact us
                </Link>
              </li>
            </ul>
            <form className="d-flex " role="search">
              {user ?
                <>
                  <h2 className="for-user neon ">Hi Buddy</h2>
                  <button className="btn logbtn" onClick={() => signOut(auth)}>Log out</button>
                </>
                : <>
                  <Link to="/Login" > <button className="btn logbtn">Log in</button></Link>
                  <Link to="/Signin" ><button className="btn logbtn">Sign in</button></Link>
                </>}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
