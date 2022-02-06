import React from "react";
import "./LinkButton.css";
import { Link } from "react-router-dom";

const LinkButton = ({ path, content, small }) => {
  const width = small ? "100px" : "130px";
  return (
    <div className="link-wrapper" style={{ minWidth: width }}>
      <Link className="link" to={path}>
        {content}
      </Link>
    </div>
  );
};

export default LinkButton;
