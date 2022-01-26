import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import AuthService from "../../Services/AuthServices";

const Register = ({ dark }) => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    contact: "",
    confirmPassword: "",
  });
  const [finalMessage, setFinalMessage] = useState(null);
  const [usernameValidationMessage, setUsernameValidationMessage] =
    useState(null);
  const [emailValidationMessage, setEmailValidationMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("cryptData");
    if (token) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const validateEmail = () => {
    if (user.email !== "") {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
      } else {
        setEmailValidationMessage("invalid Email");
        return false;
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUser({ username: "", email: "", contact: "" });
  };

  const validateUsername = () => {
    const dummy = {
      name: user.username,
    };
    AuthService.validateUsername(dummy).then((data) => {
      setUsernameValidationMessage(data.body.msgBody);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, contact, confirmPassword } = user;
    if (!username || !email || !password || !contact || !confirmPassword)
      setFinalMessage("Pls fill all fields");
    else if (password !== confirmPassword) setFinalMessage("Password mismatch");
    else if (!validateEmail()) {
      setFinalMessage("Invalid Email");
      // timerID = setTimeout(() => {
      //   setMessage("");
      // }, 2000);
    }
    else {
      AuthService.register(user).then((data) => {
        const { message } = data;
        setFinalMessage(message.msgBody);
        if (message.msgError) {
          resetForm();
        }
        if (!message.msgError) {
          timerID = setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      });
    }
  };

  const backgroundColor = dark ? "#121212" : "#F2EEEE";
  const primary = dark ? "white" : "black";
  return (
    <div
      className="signup-wrapper"
      style={{ backgroundColor: backgroundColor }}
    >
      <h2 style={{ color: primary }}>We are glad you are joining us!!</h2>
      <h1 style={{ color: "#FF7597", marginTop: "3vh" }}>Get Started!!</h1>

      // * FORM SATRTS HERE *
      <form className="form" onSubmit={handleSubmit}>
        <div className="field-wrapper">
          <label>
            
          </label>
        </div>
      </form>
    </div>
  );
};
