import React from "react";
import "./HomePageUses.css";
import Img from "../../Assets/VRCollege.jpeg";
import { Link } from "react-router-dom";

const HomePageUses = () => {
  return (
    <div className="home-page-uses-wrapper">
      <h1 className="header-main">“Explore the unexplored with VR”</h1>

      <div className="sec-1-events">
        <div className="content">
          <h2>VR for events</h2>
          <p>
            Invite your friends and loved ones <br />
            to have a fun time at your place.
          </p>
          <Link className="link" to="/services">
            Know more
          </Link>
        </div>

        <img className="sec-img" src={Img} />
      </div>

      <div className="sec-1-events">
        <img className="sec-img" src={Img} />
        <div className="content">
          <h2>VR for Business</h2>
          <p>
            Invite your friends and loved ones <br />
            to have a fun time at your place.
          </p>
          <Link className="link" to="/services">
            Know more
          </Link>
        </div>
      </div>

      <div className="sec-1-events">
        <div className="content">
          <h2>VR for Education</h2>
          <p>
            Invite your friends and loved ones <br />
            to have a fun time at your place.
          </p>
          <Link className="link" to="/services">
            Know more
          </Link>
        </div>

        <img className="sec-img" src={Img} />
      </div>
    </div>
  );
};

export default HomePageUses;
