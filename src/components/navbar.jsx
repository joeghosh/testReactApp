import React, { Component } from "react";

const NavBar = ({ totalcounters }) => {
  return (
    <nav className="justify-content-center navbar navbar-light bg-light">
      <a className="navbar-brand m-3" href="#">
        Joe's Shopping Cart App{" "}
        <span className="badge badge-pill bg-secondary">{totalcounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
