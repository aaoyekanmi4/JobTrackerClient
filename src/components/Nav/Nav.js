import React from "react";
import { Link, useHistory } from "react-router-dom";
import TokenService from "../../services/TokenService";
import "./Nav.css";
const Nav = () => {
  const history = useHistory();
  const logout = () => {
    TokenService.clearAuthToken();

    history.push("/login");
  };
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
          {TokenService.hasAuthToken() ? (
            <button id="logout" onClick={() => logout()}>
              Logout
            </button>
          ) : (
            <div>
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
