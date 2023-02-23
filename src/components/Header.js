import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <ul className="list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li>
              <Link to="/updateShoe">Update Shoe</Link>
            </li>
            <li>
              <Link to="/addShoe">Add Shoe</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
