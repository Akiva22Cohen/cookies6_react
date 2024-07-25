import React from "react";
import { Link } from "react-router-dom";
import cookies from "js-cookie";

export default function Header() {
  return (
    <header className="container-fluid p-2 bg-info">
      <div className="container">
        <div className="row align-items-center">
          <div className="logo col-auto">
            <h2>My logo</h2>
          </div>
          <nav className="col-auto">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {!cookies.get("token") ? (
                <li>
                  <Link to="/login">Log in</Link>
                </li>
              ) : (
                <li>
                  <Link to="/logout">Log out</Link>
                </li>
              )}
              <li>
                <Link to="/user_info">User info</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
