import React, {useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import {AuthContext} from '../../Context/AuthContext'

const ProfilePage = ({ dark }) => {
  let navigate = useNavigate();

  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  console.log(user);
  console.log(isAuthenticated);

  useEffect(() => {
    console.log("activating use effect...");
    const token = localStorage.getItem("cryptData")
    if(!token){
      navigate("/");
      console.log("not authenticated");
    }
  }, []);

  //Color scheme
  const backgroundColor = dark ? "#121212" : "#F2EEEE";
  const primary = dark ? "white" : "black";
  return (
    <div
      className="profile-wrapper"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="user-detail-wrapper">
        <h2>hey</h2>
        <h2>{user.username} here</h2> 
        <h2>{user.contact} here</h2> 
        <h2>{user.email} here</h2> 
      </div>
    </div>
  );
};

export default ProfilePage;
