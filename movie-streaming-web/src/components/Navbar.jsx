import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Anonime</div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#movies">List anime</a>
        </li>
        <li>
          <input
            type="text"
            placeholder="Search anime or movie..."
            className="search-bar"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
