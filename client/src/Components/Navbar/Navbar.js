import React, { useContext } from "react";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthContext";
import AuthService from "../../Services/AuthServices";
import { Link, useNavigate } from "react-router-dom";
import LinkButton from "../LinkButton/LinkButton";

const Navbar = ({ dark }) => {
  let navigate = useNavigate();

  const navbarColor = dark ? "#424242" : "#F2EEEE";
  const primary = dark ? "FF7597" : "#212121";

  const { user, setUser, isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);

  const handleLogout = () => {
    AuthService.logout().then((data) => {
      setUser(data.user);
      setIsAuthenticated(false);
      localStorage.clear();
      navigate("/login");
    });
  };

  return (
    <div
      className="navbar-wrapper"
      style={{
        backgroundColor: navbarColor,
      }}
    >
      <div className="logo-wrapper">
        <Link style={{ textDecoration: "none" }} to="/">
          <h1 className="logo-text" style={{ color: primary }}>
            XR-Sim
          </h1>
        </Link>
      </div>
      <div className="navlink-wrapper">
        { isAuthenticated ? (
          <>
            <LinkButton
              path={"/profile"}
              content={"Profile"}
              primary={false}
              small={false}
            />
            <LinkButton
              path={"/rental"}
              content={"VR Rental"}
              primary={false}
              small={false}
            />
            <button className="btn-logout" onClick={handleLogout}>
              <h4 style={{ fontWeight: 500 }}>Logout</h4>
            </button>
          </>
        ) : (
          <>
            <LinkButton
              path={"/rental"}
              content={"VR Rental"}
              primary={false}
              small={false}
            />
            <LinkButton
              path={"/register"}
              content={"Get started"}
              primary={false}
              small={false}
            />
            <LinkButton
              path={"/login"}
              content={"Login"}
              primary={true}
              small={true}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
