import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import AuthService from "../../Services/AuthServices";

const RegisterPage = ({ dark }) => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    contact: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState(null);
  const [availabilityMessage, setAvailabilityMessage] = useState(null);
  const [emailValidationMessage, setEmailValidationMessage] = useState(null);
  let timerID = useRef(null);

  // !to check if a user is already logged in new tabs - persistent login

  useEffect(() => {
    const token = localStorage.getItem("cryptData");
    if (token) {
      navigate("/");
    }
  }, []);

  // !timer to disapper message

  useEffect(() => {
    validateEmail(user.email);
    validateUsername();
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  //! client side email validation

  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    } else {
      return false;
    }
  };

  const validateContact = (contact) => {
    if(/^\d{10}$/.test(contact))return true;
    else return false;
  };

  const handleChange = (e) => {
    // console.log(user);
    e.preventDefault();
    // const t =
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUser({ username: "", email: "", password: "", contact: "" });
  };

  const validateUsername = () => {
    const dummy = {
      name: user.username,
    };
    console.log(dummy);
    AuthService.validateUsername(dummy).then((data) => {
      // console.log(data.body);
      setAvailabilityMessage(data.body.msgBody);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // FIXME: all checks

    const { username, email, password, contact, confirmPassword } = user;
    if (!username || !email || !password || !contact || !confirmPassword) {
      setMessage("Pls fill all fields");
    } else if (password !== confirmPassword) {
      setMessage("Password mismatch");
    } else if (!validateEmail(email)) {
      setMessage("Invalid email");
    } else if (!validateContact(contact)) {
      setMessage("Invalid Phone Number");
    } else {
      AuthService.register(user).then((data) => {
        // console.log(data, "data");
        const { message } = data;
        // console.log(data, "response data");
        setMessage(message.msgBody);
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
      <form className="form" onSubmit={handleSubmit}>
        {/* // !USER NAME */}

        <div className="field-wrapper">
          <label className="label">Username</label>
          <br />
          <input
            className="input-field"
            type="text"
            name="username"
            placeholder="Username "
            // value = {username}
            onChange={handleChange}
          />
          <button style={{ display: "none" }} onClick={validateUsername()}>
            Find availablibility
          </button>
          <br />
          {availabilityMessage ? (
            <small>
              {" "}
              <p> {availabilityMessage} </p>
            </small>
          ) : null}
        </div>

        <br />

        {/* // !EMAIL */}

        <div className="field-wrapper">
          <label className="label">Email</label>
          <br />
          <input
            className="input-field"
            type="text"
            name="email"
            placeholder="Email"
            // value={role}
            onChange={handleChange}
          />
          {/* {emailValidationMessage ? (
            <small>
              {" "}
              <p> {emailValidationMessage} </p>
            </small>
          ) : null} */}
        </div>

        <br />
        <br />

        <div className="field-wrapper">
          {/* //!CONTACT NUMBER */}
          <label className="label" id="label">
            Conact Number
          </label>
          <select>
            <option value="+91">+92</option>
            <option value="+1">+1</option>
          </select>
          <br />
          <input
            className="input-field"
            type="text"
            name="contact"
            placeholder="Contact"
            // value={role}
            onChange={handleChange}
          />
        </div>

        <br />
        <br />

        {/* // !PASSWORD */}
        <div className="field-wrapper">
          <label className="label">Password</label>
          <br />
          <input
            className="input-field"
            type="text"
            name="password"
            placeholder="Password"
            // value={role}
            onChange={handleChange}
          />
        </div>

        <br />
        <br />

        <div>
          {/* // !ReENTER PASSWORD */}
          <label className="label">Confirm Password</label>
          <br />
          <input
            className="input-field"
            type="password"
            name="confirmPassword"
            placeholder="Re-enter Password"
            // value={password}
            onChange={handleChange}
          />
        </div>

        <br />
        <br />
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
            <h2 style={{ color: "white" }}>{message}</h2>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default RegisterPage;

// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./RegisterPage.css";
// import AuthService from "../../Services/AuthServices";

// const RegisterPage = ({ dark }) => {
//   let navigate = useNavigate();
//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     password: "",
//     contact: "",
//     confirmPassword: "",
//   });
//   const [finalMessage, setFinalMessage] = useState(null);
//   const [usernameValidationMessage, setUsernameValidationMessage] =
//     useState(null);
//   const [emailValidationMessage, setEmailValidationMessage] = useState(null);
//   let timerID = useRef(null);

//   useEffect(() => {
//     const token = localStorage.getItem("cryptData");
//     if (token) {
//       navigate("/");
//     }
//   }, []);

//   useEffect(() => {
//     return () => {
//       clearTimeout(timerID);
//     };
//   }, []);

//   const validateEmail = () => {
//     if (user.email !== "") {
//       if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.username)) {
//         // setEmailValidationMessage("Valid Email");
//         return true;
//       } else {
//         setEmailValidationMessage("invalid Email");
//         return false;
//       }
//     }
//   };

//   const handleChange = (e) => {
//     e.preventDefault();
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const resetForm = () => {
//     setUser({ username: "", email: "", contact: "" });
//   };

//   const validateUsername = () => {
//     const dummy = {
//       name: user.username,
//     };
//     AuthService.validateUsername(dummy).then((data) => {
//       setUsernameValidationMessage(data.body.msgBody);
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { username, email, password, contact, confirmPassword } = user;
//     if (!username || !email || !password || !contact || !confirmPassword)
//       setFinalMessage("Pls fill all fields");
//     else if (password !== confirmPassword) setFinalMessage("Password mismatch");
//     else if (!validateEmail()) setFinalMessage("Invalid Email");
//     else {
//       AuthService.register(user).then((data) => {
//         const { message } = data;
//         setFinalMessage(message.msgBody);
//         if (message.msgError) {
//           resetForm();
//         }
//         if (!message.msgError) {
//           timerID = setTimeout(() => {
//             navigate("/login");
//           }, 2000);
//         }
//       });
//     }
//   };

//   const backgroundColor = dark ? "#121212" : "#F2EEEE";
//   const primary = dark ? "white" : "black";
//   return (
//     <div
//       className="signup-wrapper"
//       style={{ backgroundColor: backgroundColor }}
//     >
//       <h2 style={{ color: primary }}>We are glad you are joining us!!</h2>
//       <h1 style={{ color: "#FF7597", marginTop: "3vh" }}>Get Started!!</h1>
//       {/* // * FORM SATRTS HERE * */}
//       <form className="form" onSubmit={handleSubmit}>
//         <div className="field-wrapper">
//           <label className="label" style={{ backgroundColor: "pink" }}>
//             Username
//           </label>
//           <div>heyy</div>
//           <br />
//           <input
//             className="input-field"
//             type="text"
//             name="username"
//             placeholder="Username "
//             onChange={handleChange}
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;
