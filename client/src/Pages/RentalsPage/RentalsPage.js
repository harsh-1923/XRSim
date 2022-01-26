import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import RentalService from "../../Services/RentalService";
import "./RentalsPage.css"

const RentalsPage = ({ dark }) => {
  // *varaibles
  const [req, setReq] = useState({
    name: "",
    email: "",
    contact: "",
  });
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    setReq({ ...req, [e.target.name]: e.target.value });
  };

  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    } else {
      return false;
    }
  };

  const resetForm = () => {
    setReq({ name: "", email: "", contact: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, contact } = req;
    if (!name || !email || !contact) {
      setMessage("Pls fill in all the fields");
      timerID = setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (!validateEmail(email)) {
      setMessage("Invalid Email");
      timerID = setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      RentalService.create(req).then((data) => {
        setMessage(data.message.msgBody);
        timerID = setTimeout(() => {
          setMessage("");
        }, 2000);
      });
    }
  };

  // *color scheme
  const backgroundColor = dark ? "#121212" : "#F2EEEE";
  const primary = dark ? "white" : "black";
  return (
    <div className="rental-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">Name</label>
        <input
          className="input-field"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <br/>

        <label className="label">Email</label>
        <input
          className="input-field"
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

<br />
        <label className="label">Contact</label>
        <input
          className="input-field"
          type="text"
          name="contact"
          placeholder="Contact"
          onChange={handleChange}
        />
        <br/>

        <div className="btn">
          <button
            type="submit"
            className="btn"
            style={{ color: primary, backgroundColor: backgroundColor }}
          >
            Register
          </button>
        </div>
        {message ? (
          <div>
            <h2 style={{ color: "red" }}>{message}</h2>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default RentalsPage;
