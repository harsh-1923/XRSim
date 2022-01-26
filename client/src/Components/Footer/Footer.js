import React, {useContext} from "react";
import "./Footer.css";
import QuickLinks from "../QuickLinks/QuickLinks";
import { AuthContext } from "../../Context/AuthContext";

const Footer = ({ dark }) => {
  
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  //color scheme
  const backgroundColor = dark ? "#424242" : "#F2EEEE";
  const primary = dark ? "FF7597" : "#212121";
  return (
    <div
      className="footer-wrapper"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="sec-1">
        <h1 style={{ color: primary }}>XR Sim!</h1>
        <div className="sm-links">
          <a href="http://google.com">Facebook</a>
          <br />
          <a href="https://www.linkedin.com/in/harshjusharma/">LinkedIn</a>
          <br />
          <a href="http://youtube.com">Youtube</a>
          <br />
          <a href="https://www.gmail.com">Gmail</a>
          <br />
        </div>
      </div>

      <div className="sec-2" style={{ marginTop: "30px" }}>
        <h3 style={{ color: primary, marginBottom: "5px" }}>Quick Links</h3>
        <div className="quick-links">
          <QuickLinks path={"http://google.com"} disp={"Our Methodology"} />
          <QuickLinks path={"http://linkedin.com"} disp={"Careers"} />
          <QuickLinks path={"http://youtube.com"} disp={"Privacy Policy"} />
          <QuickLinks path={"http://github.com"} disp={"Conact us"} />
        </div>
      </div>

      <div className="user-links">
        { isAuthenticated ? <div className="sec-3"> 
        <h3 style={{ color: primary, marginBottom: "5px" }}>User Links</h3>
        <div className="quick-links">
          <QuickLinks path={"http://google.com"} disp={"Profile"} />
          <QuickLinks path={"http://linkedin.com"} disp={"Projects"} />
          <QuickLinks path={"http://youtube.com"} disp={"Legal"} />
          <QuickLinks path={"http://github.com"} disp={"Request Demo"} />
        </div>
        </div> : null}
      </div>
    </div>
  );
};

export default Footer;
