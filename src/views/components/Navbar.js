import {useState } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/Cus.css";

const Navbar = props =>{

  const [open,setOpen] = useState(false);
  const menu = () =>{
    setOpen(!open)
  }

    return (
      <div>
        <div className="">
          <nav className="navbar navbar-expand-lg bg-body-tertiary z-1000">
            <div className="container">
              <a className="navbar-brand fw-bold" href="#">
                RepoHub
              </a>
              <div
                className={`${open ? "show" : ""} menu-icon`}
                onClick={menu}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop"
                aria-controls="offcanvasTop"
              >
                <span></span>
                <span></span>
              </div>
            </div>
          </nav>

          <div className="container pt-lg-3">
            <div
              className="offcanvas offcanvas-top"
              tabIndex="-1"
              id="offcanvasTop"
              aria-labelledby="offcanvasTopLabel"
            >
              <div className="offcanvas-header"></div>
              <div className="offcanvas-body">
                <div className="container">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive
                            ? "text-warning h6 text-decoration-none"
                            : "h6 text-decoration-none text-black"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="list-group-item border-0">
                      <NavLink
                        to="/story"
                        className={({ isActive }) =>
                          isActive
                            ? "text-warning h6 text-decoration-none"
                            : "h6 text-decoration-none text-black"
                        }
                      >
                        Story
                      </NavLink>
                    </li>
                    <li className="list-group-item border-0">
                      <NavLink
                        to="/service"
                        className={({ isActive }) =>
                          isActive
                            ? "text-warning h6 text-decoration-none"
                            : "h6 text-decoration-none text-black"
                        }
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="list-group-item border-0">
                      <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                          isActive
                            ? "text-warning h6 text-decoration-none"
                            : "h6 text-decoration-none text-black"
                        }
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navbar;