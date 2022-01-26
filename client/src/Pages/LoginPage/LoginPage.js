import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import AuthService from '../../Services/AuthServices'
import Message from '../../Components/Message/Message'
import "./LoginPage.css";
import Cookie from "js-cookie";

const Login = ({ dark }) => {
  let navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("cryptData");
    if (token) {
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setUser({...user, [e.target.name] : e.target.value})
  }

  // TODO: clean code and check again
  const handleSubmit = (e) => { 
    e.preventDefault();
    const { username, password } = user;
    if(!username || !password) {
      setMessage("Please enter all fields");
    }
    else{
      AuthService.login(user).then(data => {
        console.log("first");
        const { isAuthenticated, user, message } = data;
        if(isAuthenticated){
          Cookie.set("access_token", data.token);
  
          const crpytData = {
            "access_token" : data.token,
          }
  
          localStorage.setItem("cryptData", JSON.stringify(crpytData));
  
          // ** this part needs no changes
          authContext.setUser(user);
          authContext.setIsAuthenticated(isAuthenticated);
          navigate("/");
        }else{
          setMessage("Invalid credentials");
        }
      })
    }
    
  }

  const backgroundColor = dark ? "#121212" : "#F2EEEE";
  const primary = dark ? "white" : "black";
  return (
    <div className="login-wrapper" style={{ backgroundColor: backgroundColor }}>
      <h1 style={{ color: "#FF7597", fontSize: "40px" }}> Welcome back!! </h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          name="username"
          placeholder="username"
          // value={email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          className="input-field"
          type="password"
          name="password"
          placeholder="Password"
          // value={password}
          onChange={handleChange}
        />
        <br />
        <br />
        <div className="btn">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </form>
      {/* { message ? <Message message={message} /> : null } */}
      {message ? (
          <div>
            <br/>
            <h3 style={{ color: "white" }}>{message}</h3>
          </div>
        ) : null}
    </div>
  );
};

export default Login;
