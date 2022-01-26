const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const JWT = require("jsonwebtoken");
const passportConfig = require("../passport");
const User = require("../Models/User");

const signToken = (userID, username, email, contact) => {
  return JWT.sign(
    {
      iss: "xr",
      sub: userID,
      username: username,
      email: email,
      contact: contact,
    },
    "XRSim",
    { expiresIn: "1h" }
  );
};



userRouter.post("/register", (req, res) => {
  const { username, password, email, contact } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err)
      res
        .status(500)
        .json({ message: { msgBody: "Error has occured", msgError: true } });
    if (user)
      res
        .status(400)
        .json({ message: { msgBody: "Username is taken", msgError: true } });
    else {
      const newUser = new User({ username, email, password, contact });
      newUser.save((err) => {
        if (err)
          res.status(500).json({
            message: { msgBody: "Error has occured", msgError: true },
          });
        else
          res
            .status(201)
            .json({ message: { msgBody: "Account created", msgError: false } });
      });
    }
  });
});

userRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    console.log("backend");
    if (req.isAuthenticated()) {
      const { _id, username, email, contact } = req.user;
      const token = signToken(_id, username, email, contact);
      res.status(200).json({
        isAuthenticated: true,
        user: { username, email, contact },
        token: token,
      });
    }
  }
);

userRouter.post("/checkUser", (req, res) => {
  const token = req.body.access_token;
  const data = JWT.verify(token, "XRSim");
  res.status(200).json({
    body: { msgBody: "Retrieved a user", success: true, user: data },
  });
});

// FIXME: validate user

userRouter.post("/validateUsername", (req, res) => {
  const { name } = req.body;
  const username = name;
  User.findOne({ username }, (err, user) => {
    if (err) {
      res.status(500).json({
        body: { msgBody: "Unexpected error, pls try again", success: false },
      });
    }else if (user) {
      res
        .status(201)
        .json({ body: { msgBody: "Username already in use", success: true } });
    } else {
      res
        .status(200)
        .json({ body: { msgBody: "Username available", success: true } });
    }
  });
});

userRouter.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.clearCookie("access_token");
    res.json({ user: { username: "", email: "", contact: "" }, success: true });
  }
);

userRouter.get(
  "/authenticated",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { username, email, contact } = req.user;
    // console.log(req, "authenticated backend req");
    res
      .status(200)
      .json({ isAuthenticated: true, user: { username, email, contact } });
  }
);

module.exports = userRouter;
