import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext.jsx";

export default function HeaderSection() {
  const { token } = useContext(UserContext);

  return (
    <div className="header_section">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo">
          <Link to="/">
            <img src="/images/logosmal.svg" alt={""} />
          </Link>
        </div>
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
            <div className="side">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  OUR PRODUCTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/comments">
                  COMMENTS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/promotions"
                  style={{ display: token ? "" : "none" }}
                >
                  PROMOTIONS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  CONTACT US
                </Link>
              </li>
            </div>
            <div className="side">
              {/*<li className="nav-item">*/}
              {/*  <Link className="nav-link" to="#">*/}
              {/*    <img src="/images/search-icon.png" alt={""} />*/}
              {/*  </Link>*/}
              {/*</li>*/}
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/login"
                  style={{ display: token ? "none" : "" }}
                >
                  SIGN IN
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/register"
                  style={{ display: token ? "none" : "" }}
                >
                  REGISTER
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/logout"
                  style={{ display: token ? "" : "none" }}
                >
                  LOGOUT
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
