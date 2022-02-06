import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import LinkButton from "../LinkButton/LinkButton";

const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-contents">
        <div className="logo-wrapper">
          <Link style={{ textDecoration: "none" }} to="/">
            <h1 className="logo-txt">XRSim</h1>
          </Link>
        </div>

        <div className="navlink-wrapper">
          <div className="links">
            <LinkButton path={"/"} content={"Home"} small={false} />
            <LinkButton path={"/services"} content={"Services"} small={false} />
            <LinkButton path={"/blogs"} content={"Blogs"} small={false} />
            <button className="btn-logout">
              <h4 style={{ fontWeight: "bold" }}>Contact Us</h4>
            </button>
          </div>

          <svg
            className="hamburger"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
