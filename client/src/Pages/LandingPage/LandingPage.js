import React, { useContext, useEffect, useState } from "react";
import "./LandingPage.css";
import LinkButton from "../../Components/LinkButton/LinkButton";
import { AuthContext } from "../../Context/AuthContext";
import AuthService from "../../Services/AuthServices";
// import AuthServices from "../../Services/AuthServices";

const LandingPage = ({ dark }) => {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  // color scheme
  const backgroundColor = dark ? "#121212" : "#FFFFFF";
  const primary = dark ? "#FFFFFF" : "#121212";
  return (
    <div
      className="landing-page-wrapper"
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        style={{ color: primary, fontSize: "20px" }}
        className="welcome-text"
      >
        Hello, welcome to{" "}
      </div>

      <div
        style={{ color: "#FF7597", fontSize: "70px" }}
        className="welcome-text"
      >
        <h1>XR Sim!</h1>
      </div>

      <div
        style={{ color: primary, fontSize: "24px" }}
        className="welcome-text"
      >
        Enjoy Rich VR Experiences right on the web
      </div>

      <div className="links">
        {isAuthenticated ? (
          <LinkButton path={"/chatpage"} content={"See chats"} primary={true} />
        ) : (
          <>
            <LinkButton
              path={"/register"}
              content={"Get Started"}
              primary={true}
            />
            <div style={{ color: "white", padding: "0px 20px" }}>Or</div>
            <LinkButton path={"/login"} content={"Log in"} primary={true} />
          </>
        )}
      </div>
      {isAuthenticated ? (
        <>
          <br />
          <h2 style={{ color: primary }}>{user.username || "user here"}</h2>
        </>
      ) : null}
    </div>
  );
};

export default LandingPage;


