import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

import "./Nav.css";
const Nav = () => {
 const { loggedIn, logout } = useContext(AuthContext);
  return (
    <nav>
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/jobs">Your Jobs</Link>
        </li>
        <li className="nav-link">
          {" "}
          <Link to="/">Instructions</Link>
        </li>
        <li className="nav-link">
          {loggedIn ? (
            <button id="logout" onClick={() => logout()}>
              Logout
            </button>
          ) : (
            <div className="nav-link">
              <Link to="/login">Login</Link> |{" "}
              <Link to="/sign-up">Sign Up</Link>{" "}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
