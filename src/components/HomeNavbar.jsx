import React from "react";
import { Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <>
      <ul className="homePage--ul">
        <li>
          <Link to="/" className="links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/users" className="links">
            Users
          </Link>
        </li>
      </ul>
    </>
  );
}

export default HomeNavbar;