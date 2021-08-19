import React from "react";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">TODO</Link>
      </div>
      <div className="navigations">
        <ul className="nav-items">
          <li className="nav-list">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-list">
            <Link to="/add-todo" className="nav-link">
              Add Todo
            </Link>
          </li>
          <li className="nav-list">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainNavigation;
